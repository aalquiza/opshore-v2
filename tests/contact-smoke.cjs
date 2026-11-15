// Offline, no-network smoke checks for the Vercel handler. Does not send email.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');

const file = path.join(__dirname, '../api/contact.ts');
const source = fs.readFileSync(file, 'utf8');
const result = ts.transpileModule(source, {
  fileName: 'contact.ts', reportDiagnostics: true,
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true }
});
const errors = (result.diagnostics || []).filter(d => d.category === ts.DiagnosticCategory.Error);
assert.equal(errors.length, 0, errors.map(x => ts.flattenDiagnosticMessageText(x.messageText, '\n')).join('\n'));

let sends = [];
let failAt = 0;
const fakeNodemailer = {
  createTransport(options) {
    assert.equal(options.port, 465);
    assert.equal(options.secure, true);
    return {
      async sendMail(data) {
        sends.push(data);
        if (sends.length === failAt) throw new Error('Simulated SMTP failure');
        return { accepted: [data.to] };
      }
    };
  }
};
const fakeProcess = {
  env: {
    ZOHO_EMAIL: 'internal@example.org',
    ZOHO_FROM_EMAIL: 'sender@example.org',
    ZOHO_PASSWORD: 'dummy-not-a-real-credential'
  }
};
const moduleShim = { exports: {} };
const localRequire = (id) => {
  if (id === 'dotenv') return { config() { return {}; } };
  if (id === 'nodemailer') return fakeNodemailer;
  throw new Error('Unexpected import: ' + id);
};
new Function('require','module','exports','process','Buffer','URL',result.outputText)(
  localRequire, moduleShim, moduleShim.exports, fakeProcess, Buffer, URL
);
const { escapeHtml, validateContact, default: handler } = moduleShim.exports;
assert.equal(escapeHtml('<img src=x onerror="oops">'), '&lt;img src=x onerror=&quot;oops&quot;&gt;');

const valid = {
  firstName: ' Jane ', lastName: ' Doe ', email: 'jane@example.org',
  website: 'example.org', useCase: 'software-development',
  message: '<script>alert(1)</script>\nPlease contact me'
};
assert.equal(validateContact(valid).firstName, 'Jane');
assert.equal(validateContact(valid).website, 'https://example.org/');
assert.equal(validateContact({ ...valid, firstName: ['X'] }), null);
assert.equal(validateContact({ ...valid, email: 'not-an-email' }), null);
assert.equal(validateContact({ ...valid, lastName: '\r\nBcc: attacker@example.org' }), null);
assert.equal(validateContact({ ...valid, message: 'a'.repeat(4001) }), null);
assert.equal(validateContact({ ...valid, website: 'javascript:alert(1)' }), null);
assert.equal(validateContact({ ...valid, website: 'https://example.org/a' }).website, 'https://example.org/a');

function makeResponse() {
  return {
    code: 200, payload: undefined, headers: {},
    setHeader(key, value) { this.headers[key] = value; return this; },
    status(code) { this.code = code; return this; },
    json(payload) { this.payload = payload; return this; }
  };
}
async function call(method = 'POST', body = valid, type = 'application/json') {
  const response = makeResponse();
  await handler({method, headers: {'content-type': type}, body}, response);
  return response;
}
(async () => {
  sends = []; failAt = 0;
  let response = await call();
  assert.equal(response.code, 200);
  assert.equal(response.payload.success, true);
  assert.equal(sends.length, 2);
  assert.equal(sends[0].to, 'internal@example.org');
  assert.equal(sends[0].replyTo.address, 'jane@example.org');
  assert.equal(sends[1].to, 'jane@example.org');
  assert(sends[0].html.includes('&lt;script&gt;alert(1)&lt;/script&gt;'));
  assert(!sends[0].html.includes('<script>'));
  assert.equal(sends[0].disableFileAccess, true);
  assert.equal(sends[0].disableUrlAccess, true);

  sends = []; response = await call('GET');
  assert.equal(response.code, 405);
  assert.equal(sends.length, 0);

  sends = []; response = await call('POST', { ...valid, email: ['x'] });
  assert.equal(response.code, 400);
  assert.equal(sends.length, 0);

  sends = []; response = await call('POST', valid, 'text/plain');
  assert.equal(response.code, 415);
  assert.equal(sends.length, 0);

  sends = []; response = await call('POST', { ...valid, extra: 'x'.repeat(15000) });
  assert.equal(response.code, 413);
  assert.equal(sends.length, 0);

  sends = []; failAt = 2;
  response = await call();
  assert.equal(response.code, 200);
  assert.equal(sends.length, 2);

  sends = []; failAt = 1;
  response = await call();
  assert.equal(response.code, 502);
  assert.equal(sends.length, 1);

  console.log('PASS: 15 offline contact handler security and behavior checks');
})().catch(err => { console.error(err); process.exitCode = 1; });

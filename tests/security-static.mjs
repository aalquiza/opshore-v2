import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const config = JSON.parse(readFileSync('vercel.json', 'utf8'));
const contact = readFileSync('src/components/ContactPage.tsx', 'utf8');
const rewrite = config.rewrites[0].source;
assert.ok(!rewrite.includes('.* '), 'SPA rewrite still has a stray space');
assert.ok(rewrite.includes('api/'), 'API exclusion missing from rewrite');
const hs = config.headers.flatMap(row => row.headers);
const headers = Object.fromEntries(hs.map(h => [h.key, h.value]));
for (const name of ['Content-Security-Policy', 'X-Content-Type-Options', 'X-Frame-Options', 'Referrer-Policy', 'Strict-Transport-Security']) {
  assert.ok(headers[name], `Missing ${name}`);
}
assert.ok(headers['Content-Security-Policy'].includes("script-src 'self'"));
assert.ok(headers['Content-Security-Policy'].includes("frame-ancestors 'none'"));
assert.ok(contact.includes('maxLength={4000}'), 'Message limit missing');
assert.ok(contact.includes('controller.abort()'), 'Timeout missing');
assert.ok(!contact.includes('result.error ||'), 'Raw server error displayed to public');
assert.ok(contact.includes('content-type'), 'Content-type verification missing');
assert.ok(contact.includes('result.success === true'), 'API success must be explicit');
console.log('PASS: 12 source/configuration security assertions');

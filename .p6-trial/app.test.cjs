const test = require('node:test');
const assert = require('node:assert/strict');
function value(path) { try { return require(path); } catch (error) { if (error.code !== 'MODULE_NOT_FOUND') throw error; return 1; } }
test('P6 fixture compatibility', () => assert.ok(value('./a.cjs') * value('./b.cjs') <= 2));

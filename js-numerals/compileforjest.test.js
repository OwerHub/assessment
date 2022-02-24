const { expect } = require("@jest/globals");
const sum = require("./compileforjest.mjs");

/* test('asdasd', () => {
 expect(sum(1,2)).toBe(3))
} )
 */

test("properly", () => {
  expect(sum(1, 2)).toBe(3);
});

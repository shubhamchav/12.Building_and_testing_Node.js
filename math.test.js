// math.test.js
const { add, subtract, multiply, divide } = require('./math');

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('subtracts 4 - 2 to equal 2', () => {
  expect(subtract(4, 2)).toBe(2);
});

test('multiplies 3 * 4 to equal 12', () => {
  expect(multiply(3, 4)).toBe(12);
});

test('divides 8 / 2 to equal 4', () => {
  expect(divide(8, 2)).toBe(4);
});

test('divides 8 / 0 should return Cannot divide by zero', () => {
  expect(divide(8, 0)).toBe('Cannot divide by zero');
});

const stringlength = require('./stringLength');
const reverseString = require('./reverseString');

test('string length', () => {
  expect(stringlength('Artur')).toBe(5);
});

test('string too long', () => {
  expect(stringlength('paralelepipedo')).toBe('invalid length');
});

test('string is reversed', () => {
  expect(reverseString('artur')).toBe('rutra');
});
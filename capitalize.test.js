const capitalise = require('./capitalise');

test('THIS is uppercase', () => {
  expect(capitalise('artur')).toBe('Artur');
});
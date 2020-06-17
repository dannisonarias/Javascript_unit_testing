const capitalize = require('./capitalize');

test('capitalize first letter of word', () => {
  expect(capitalize('cat')).toBe('Cat');
});
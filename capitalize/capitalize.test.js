import capitalize from './capitalize';

test('capitalize first letter of word', () => {
  expect(capitalize('cat')).toBe('Cat');
});
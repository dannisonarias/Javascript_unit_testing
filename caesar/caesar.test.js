import caesar from './caesar';

test('Shifts a string a specific number of letters', () => {
  expect(caesar('abc', 1)).toBe('bcd');
});
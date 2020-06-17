const reverse = require('./reverse');

test('takes a string and returns it reversed.', () => {
  expect(reverse('cat')).toBe('tac');
});
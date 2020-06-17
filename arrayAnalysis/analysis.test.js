const analyze = require('./analysis');

test('Return object with array analysis', () => {
  const arr = [1, 8, 3, 4, 2, 6];
  expect(analyze(arr)).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
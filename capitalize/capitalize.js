function sum(string) {
  let first = string.slice(0,1);
  return  (first.toUpperCase() + string.slice(1))
  }
  module.exports = sum;
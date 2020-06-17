const calculator = (() => {
  const sum = (a, b) => a + b;

  const subtract = (a, b) => a - b;


  const divide = (a, b) => a / b;

  const multiply = (a, b) => a * b;

  return {
    sum, subtract, divide, multiply,
  };
})();

module.exports = calculator;
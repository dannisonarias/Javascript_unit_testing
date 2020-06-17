function sum(string) {
  const first = string.slice(0, 1);
  return (first.toUpperCase() + string.slice(1));
}

export default sum;
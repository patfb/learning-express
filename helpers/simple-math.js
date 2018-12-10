function sum(...input) {
  return input.reduce((previous, current) => {
    return previous + current;
  });
}

function product(...input) {
  return input.reduce((previous, current) => {
    return previous * current;
  });
}

module.exports = {
  sum: sum,
  product: product
};

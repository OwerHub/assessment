function sum(a, b) {
  return a + b;
}

//export { sum };

if (typeof exports !== "undefined") {
  module.exports = sum;
}

//module.exports = sum;

const { odd, even } = require('./var.js').default;

function checkOddOrEven(num) {
  if (num % 2) {
    // 홀수일 때
    return odd;
  }
  return even;
}

export default checkOddOrEven;

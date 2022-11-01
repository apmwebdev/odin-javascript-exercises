const sumAll = function(num1, num2) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number' || num1 < 0 ||
    num2 < 0) {
    return 'ERROR';
  }
  let sum = 0;
  let firstNum;
  let lastNum;
  if (num1 > num2) {
    firstNum = num2;
    lastNum = num1;
  } else {
    firstNum = num1;
    lastNum = num2;
  }
  for (let i = firstNum; i <= lastNum; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;

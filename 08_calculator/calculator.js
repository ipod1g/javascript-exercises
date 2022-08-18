const add = function(...num) {
  let answer = 0;
	for (const n of num) {
     answer += n;
  }
  return answer;
};

const subtract = function(num1, num2) {
  let answer = 0;
  answer += num1 - num2;
  return answer;
};

const sum = function(numArray) {
	return numArray.reduce((partialsum,a) => partialsum + a, 0)
};

const multiply = function(numArray) {
  return numArray.reduce((partialsum,a) => partialsum * a, 1)
};

const power = function(num1,num2) {
  return answer = num1 ** num2;
};

const factorial = function(num) {
  let answer = 1;
	for (i=num;i>0;i--) {
    answer *= i
  }
  return answer;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

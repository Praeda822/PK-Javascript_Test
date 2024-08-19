'use strict';

const a1 = 1;
const a2 = 'Hello';
const a3 = true;

console.log(a1, a2, a3);

for (let i = 0; i < 101; i++) {
  if (i % 3 === 0) console.log('Fizz');
  if (i % 5 === 0) console.log('Buzz');
  else console.log(i);
}

let myArr = [];
myArr.push(a1, a2, a3);
console.log(myArr);
console.log('This is the first element of my array: ', myArr[0]);
console.log('This is second element of my array: ', myArr[1]);
console.log('This is the third element of my array: ', myArr[2]);
console.log('Here I use the spread operator to collect ALL values: ', ...myArr);

function sum(a, b) {
  return a + b;
}
console.log(sum(5, 5));

const newSum = (a, b) => a + b;
console.log(newSum(20, 5));

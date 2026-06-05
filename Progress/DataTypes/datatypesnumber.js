let i=1000000;
i=10_0_0_0_0;//_ are ignored here
console.log(i);
// for representing billions use e
i=1e9;
// mean1 1 multiplied by 1,9 times 0 or billion 
1e3 === 1 * 1000; // e3 means *1000
1.23e6 === 1.23 * 1000000; // e6 means *1000000
let mcs = 1e-6; // five zeroes to the left from 1 or 
// -3 divides by 1 with 3 zeroes
1e-3 === 1 / 1000; // 0.001
console.log(0xFFF);//hexadecimal
console.log(0b101 , 0o101)//0b for binary and 0o for octal number
let num =2.8;
// convert number to string base use toString(base) for base being 2 to 36 for binary to 36th base
console.log(num.toString(2));//output 10

console.log(Math.floor(num));//2

console.log(Math.ceil(num));//3

console.log(Math.round(num));//3

console.log(Math.trunc(num));//2

console.log(num.toFixed(2));//for rounding off two decimals or n 

console.log(isNaN(8));//is not a number
console.log(isFinite(90));//is finite or Infinity
console.log(Infinity==50e307);
console.log(isNaN("str"));//returns true as it convert first str to number gets Nan and then checks
console.log(Number.isNaN("strs"));//a stricter num check

// + or Number() fails for a value with other than number or other symbols like $100 or 100px so we use parseint , parsefloat 
console.log( parseInt('100px',2) ); // 100,2 as base
console.log( parseFloat('12.5em') ); // 12.5
console.log(parseFloat('a123'));
Math.random()//returns random number 0 to 1
Math.pow(10,9);
Math.min(10,9);
Math.max(10,9);
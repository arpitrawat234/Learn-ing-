function sumAll(...args) { // args is the name for the array
  let sum = 0;
  console.log(arguments.length);
  console.log(arguments[1]);
  for (let arg of args) sum += arg;

  return sum;
}

console.log( sumAll(1) ); // 1
console.log( sumAll(1, 2) ); // 3
console.log( sumAll(1, 2, 3) ); // 6

let arr = [3, 5, 1];
let name="Arpit";
let arr2=[-1,-3,90]
console.log( Math.max(...arr,...arr2) ); // 5 (spread turns array into a list of arguments)
console.log(Math.min(...arr,...arr2));
console.log(([...arr,...arr2]))//convert to array
console.log(Array.from(name));
let obj = { a: 1, b: 2, c: 3 };
console.log({...obj})
console.log(Object.assign(obj));
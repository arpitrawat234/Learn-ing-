let names=["arpit","Arpita","Shubham","Java",56];
console.log(names[0]);//arpit
console.log(names[1]);
console.log(names[3]);
console.log(names.at(0));
console.log(names.at(-1));//returns last elements
console.log(names.push("python"));// returns new length of array
console.log(names.shift());
console.log(names.pop());
console.log(names.unshift("Amit"));// add to the first element of array
console.log(names);

let fruits = ["Banana"]

let arr = fruits; // copy by reference (two variables reference the same array)

console.log( arr === fruits ); // true

arr.push("Pear"); // modify the array by reference

console.log( fruits ); // Banana, Pear - 2 items now

//push/pop do in last and
// shift/unshift do in beginning

arr = ["Apple", "Orange", "Pear"];

for (let i = 0; i < arr.length; i++) {
  console.log( arr[i] );
}
// But for arrays  for..of:

fruits = ["Apple", "Orange", "Plum"];

// iterates over array elements
for (let fruit of fruits) {
console.log( fruit );}

fruits.length=0;//clears the arrays

arr = [1, -2, 3, 4, -9, 6];
function getMaxSubSum(arr){
let i=0;
let max=0;
let curr=0;
while(i<arr.length){
curr+=arr[i];
max=Math.max(curr,max);
if(curr<0){
curr=0;
}
i++;
}
return max;
}
console.log(getMaxSubSum([-1, -2, -3,5,6,7,-111]));
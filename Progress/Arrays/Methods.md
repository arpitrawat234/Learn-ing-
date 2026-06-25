## Splice

```js
let arr=["Car","Cycle","Bike"];
array.splice((start: number, deleteCount?: number): string[])
arr.splice(1,1); // "Car","Bike"
arr.splice(1,0,"Truck","Ship");
//"car","Truck","Ship","Bike",
```

## Slice

```js
arr.slice(0,1);//copy elements new from index to end index not including the end
//"Car"
```

## Concat

console.log([1].concat([1,2,3],[1,2,3]));
//[1,2,3,1,2,3]

## for each

```js
["Bilbo", "Gandalf", "Nazgul"].forEach(
(item, index, array) => {
console.log(`${item} is at index ${index} in ${array}`);
});
```

## Seaching in Array

```js

arr.indexOf(item, from) –  returns index otherwise -1.

arr.includes(item, from) – returns true if found

console.log(arr.indexOf('Mango'));
console.log(arr.includes('rat'));//most uptodate
console.log(arr.lastIndexOf('Mango'));
```

## find

```
let users = [
{id: 1, name: "John"},
{id: 2, name: "Pete"},
{id: 3, name: "Mary"},
{id: 3, name: "Arpit"}
];let user=users.find(item=>item.id==3);
console.log(user.name); // John
user=users.findIndex(item=>item.id==2);
console.log(user); // 1
user=users.findLastIndex(item=>item.id==3);//as findindex but gives last values
console.log(user); // 2
user=users.findLast(item=>item.id==3)//as find but give last value
console.log(user);
```

## Filter

```js
let results = arr.filter(function(item, index, array) {
// if true item is pushed to results and the iteration continues
// returns empty array if nothing found
});

let someusers=users.filter(item=>item.id<=3);
console.log(someusers);//returns array of element thus filter returns all elements making the function true
```

## Transform an array

### MAP



```js
/ let result = arr.map(function(item, index, array) {
//  ... returns the new value instead of item
// });
let result=someusers.map((item,index,array)=> item.name);//we changed the array with the new array mapping to every item in array with the names changed
console.log(result);
```

### Comparison

```js
function compareNumeric(a, b) {
if (a > b) return 1;// +ve then b then a
if (a == b) return 0;//0 then no change
if (a < b) return -1;// -ve then a, b
}let arrnum = [ 1, 2, 15 ];arrnum.sort(compareNumeric);// a-b ascending
//b-a descending
arrnum.reverse();
arrnum.reverse();

```

### Split,Join
```js
let names = 'Bilbo, Gandalf, Nazgul';
//split(', ', 2) extra param for length limit

let arrnames = names.split(', ');
console.log(arrnames);
console.log(arrnames.join(';'));
//join names with ;  in between
```
### Reduce Reduce Right

```js
 let value = arr.reduce(function(accumulator, item, index, array) {
 }, [initial]);
// accumulator – is the result of the previous function call,
//equals initial the first time (if initial is provided).

 item – is the current array item.
 index – is its position. 
 array – is the array.

console.log(arrnum.reduce((intial , current)=>intial+current,0));//here 0 is the intial value

//return sum of array

reduceright do it right to left

```

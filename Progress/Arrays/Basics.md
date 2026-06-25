# Arrays

```js
let arr = ["arpit", "java", 56];
```

## Access

```js
arr[0]
arr.at(-1) // last element
```

## Add / Remove

```js
arr.push("python")    // add end, returns new length
arr.pop()             // remove end

arr.unshift("amit")   // add start
arr.shift()           // remove start
```

## Reference Copy

```js
let a = ["Banana"];
let b = a;

b.push("Pear");

console.log(a); // ["Banana", "Pear"]
```

Arrays are copied by reference.

## Iteration

```js
for(let i=0;i<arr.length;i++){}

for(const item of arr){}
```

## Clear Array

```js
arr.length = 0;
```
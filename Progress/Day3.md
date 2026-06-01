 freq[digits]=(freq[digits] || 0)+1 // as all falsey values are made false we can use nullish coaleshing ?? for keeping null undefined as missing

## GITHUB
ls = list file
```
PS D:\Learn-ing> ls


    Directory: D:\Learn-ing


Mode               LastWriteTime
----               -------------
d-----       4/18/2026  11:38 AM
d-----       5/16/2026   8:49 PM
d-----       5/16/2026  10:16 PM
d-----       5/16/2026   8:48 PM
-a----       4/11/2026  10:48 AM
-a----       5/16/2026   5:58 PM
```

## https://javascript.info/logical-operators
Or looks for first truthy value
```
alert( 1 || 0 ); // 1 (1 is truthy)

alert( null || 1 ); // 1 (1 is the first truthy value)
alert( null || 0 || 1 ); // 1 (the first truthy value)

alert( undefined || null || 0 ); // 0 (all falsy, returns the last value)
```
AND
OR
!NOT
?? NULLISH COLLISION

let user;

alert(user ?? "Anonymous"); // Anonymous (user is undefined)
The nullish coalescing defines or return the first value if its not null or undefined and if its null or undefined return next value

used for default value
|| return first truthy value here 0 or "" are also falsey
?? return first defined value

## https://javascript.info/while-for
```let i = 0;
do {
  alert( i );
  i++;
} while (i < 3);
```

```
let i=10
while(i){
console.log(i)
i--
}
```
```
let sum = 0;

while (true) {

  let value = +prompt("Enter a number", '');

  if (!value) break; // (*)

  sum += value;

}
alert( 'Sum: ' + sum );
//break a loop
```
```
for (let i = 0; i < 10; i++) {

  // if true, skip the remaining part of the body
  if (i % 2 == 0) continue;

  alert(i); // 1, then 3, 5, 7, 9
}
```

break/continue support labels before the loop. A label is the only way for break/continue to escape a nested loop to go to an outer one.

[Functions](./functions.js)
```
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);
Here, functions are declared right inside the ask(...) call. They have no name, and so are called anonymous. Such functions are not accessible outside of ask (because they are not assigned to variables), but that’s just what we want here.
```
Function Declaration: a function, declared as a separate statement, in the main code flow:

// Function Declaration
function sum(a, b) {
  return a + b;
}
Function Expression: a function, created inside an expression or inside another syntax construct. Here, the function is created on the right side of the “assignment expression” =:

// Function Expression
let sum = function(a, b) {
  return a + b;
};

```
let double = n => n * 2;//arrow functions
// roughly the same as: let double = function(n) { return n * 2 }

alert( double(3) ); // 6
```


Sometimes we need a more complex function, with multiple expressions and statements. In that case, we can enclose them in curly braces. The major difference is that curly braces require a return within them to return a value (just like a regular function does).
```
Like this:

let sum = (a, b) => {  // the curly brace opens a multiline function
  let result = a + b;
  return result; // if we use curly braces, then we need an explicit "return"
};

alert( sum(1, 2) ); //3 ```
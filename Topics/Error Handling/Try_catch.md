**Try Catch block**

```js
try {

  // code...

} catch (err) {

  // error handling

}
```

For a _try catch_ block to work it should be free form parsing error or compile time error and only have

```js
try {

  alert('Start of try runs');  // (1) <--

  lalala; // error, variable is not defined!

  alert('End of try (never reached)');  // (2)

} catch (err) {

  alert(`Error has occurred!`); // (3) <--

}
```

Here as lalala is not defined it will give error in runtime thus catch block catches it

```js
try {
  {{{{{{{{{{{{
} catch (err) {
  alert("The engine can't understand this code, it's invalid");
}
```

there is a syntax error here thus this do not works.

---
The error object has its name and message 
```js
let error = new Error(message);
// or
let error = new SyntaxError(message);
let error = new ReferenceError(message);
// ...
```
Here we createa a new error using new Error we can also create
```js
let error = new Error(message);
// or
let error = new SyntaxError(message);
let error = new ReferenceError(message);
// ...
```
For throwing errors of our own we use throw
```js
let json = '{ "age": 30 }'; // incomplete data

try {

  let user = JSON.parse(json); // <-- no errors

  if (!user.name) {
    throw new SyntaxError("Incomplete data: no name"); // (*)
  }

  alert( user.name );

} catch (err) {
  alert( "JSON Error: " + err.message ); // JSON Error: Incomplete data: no name
}
```
Finally block of code execute always
```js
try {
   ... try to execute the code ...
} catch (err) {
   ... handle errors ...
} finally {
   ... execute always ...
}
```

- We can inherit from Error and other built-in error classes normally. We just need to take care of the name property and don’t forget to call super.

- We can use instanceof to check for particular errors. It also works with inheritance. name property can also be used for such checks.

- Wrapping exceptions : a function handles low-level exceptions and creates higher-level errors.  Low-level exceptions sometimes become properties of that object 

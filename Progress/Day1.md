### introduction

Today i am going through the introduction for the javascript tutorial in javascript.info

Here i wrote [hello world](1-helloworld.html)

## Variables
[variables](JavaScript-Fundamentals\02-variable.js)

| Keyword | Scope    |
| ------- | -------- |
| `var`   | Function |
| `let`   | Block    |
| `const` | Block    |

````
// comments

/*big 
comments */

 alert(hello); //semicolons should be norms 
````
## DATATYPES
javascript is a dynamically typed language

Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}, for example:

````
let name = "John";

// embed a variable

alert( `Hello, ${name}!` ); 

// Hello, John!
// embed an expression
alert( `the result is ${1 + 2}` );

 // the result is 3 
````
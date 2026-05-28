### introduction

Today i am going through the introduction for the javascript tutorial in [Javascript.info](htttps://javascript.info)

Here i wrote [hello world](JavaScript-Fundamentals/1-helloworld.html)


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
## DATATYPES## Variables
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


 let age = null;

typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"
````


There are 8 basic data types in JavaScript.

**Seven primitive data types:**

- number for numbers of any kind: 
integer or floating-point, 

- integers are limited by ±(253-1).

- bigint for integer numbers of arbitrary length.

- string for strings. A string may have zero or more characters, there’s no separate single-character type.

- boolean for true/false.

- null for unknown values – a standalone type that has a single value null.

- undefined for unassigned values – a standalone type that has a single value undefined.

- symbol for unique identifiers.

- And one non-primitive data type:
object for more complex data structures.

The **typeof** operator allows us to see which type is stored in a variable.

- Usually used as typeof x, but typeof(x) is also possible.
- Returns a string with the name of the type, like "string".
- For null returns "object" – this is an error in the language, it’s not actually an object.


value = String(value); // now value is a string "true"
let num = Number(str); // becomes a number 123
alert(Boolean(5));
let x= Number(undefined);//gives nan
console.log(x);

## Operators

alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"
alert('1' + 2 + 2); // "122" and not "14"
alert(1 + 2 + '2'); // "32" and not "14"
// No effect on numbers
let x = 1;
alert( +x ); // 1

let y = -2;
alert( +y ); // -2

// Converts non-numbers
alert( +true ); // 1
alert( +"" );   // 0
// effects of + on numbers same as Number
alert( 0 === false ); // false, because the types are different
alert( '' == false ); // true
null==undefined are complementary couples
"2" > "12" → true dictionary comparison, first char "2" is greater than the first char "1".
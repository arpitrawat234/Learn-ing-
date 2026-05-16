####  https://javascript.info/comparison
```
alert( 0 == false ); // true
The same thing happens with an empty string:

alert( '' == false ); // true
```
This happens because operands of different types are converted to numbers by the equality operator ==. An empty string, just like false, becomes a zero.


A strict equality operator === checks the equality without type conversion.

In other words, if a and b are of different types, then a === b immediately returns false without an attempt to convert them.


These values are different, because each of them is a different type.

```
alert( null === undefined ); 
// false
For a non-strict check ==
There’s a special rule. These two are a “sweet couple”: they equal each other (in the sense of ==), but not any other value.

alert( null == undefined ); // true
```
- Comparison operators return a boolean value.

- Strings are compared letter-by-letter in the “dictionary” order.
- When values of different types are compared, they get converted to numbers (with the exclusion of a strict equality check).
- The values null and undefined are equal == to themselves and each other, but do not equal any other value.
- Be careful when using comparisons like > or < with variables that can occasionally be null/undefined. Checking for null/undefined separately is a good idea.

Our eyes scan the code vertically. Code blocks which span several lines are easier to understand than a long, horizontal instruction set.

//https://javascript.info/logical-operators
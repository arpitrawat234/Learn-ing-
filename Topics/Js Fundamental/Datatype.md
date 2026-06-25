# JavaScript Fundamentals

## Variables

| Keyword | Scope |
|----------|--------|
| var | Function |
| let | Block |
| const | Block |

JavaScript is dynamically typed.

---

## Strings

Template literals:

```js
`Hello ${name}`
`${1 + 2}`
```

Use backticks (` `).

---

## Data Types

### Primitive (7)

- number
- bigint
- string
- boolean
- null
- undefined
- symbol

### Non Primitive

- object

---

## typeof

```js
typeof 0        // "number"
typeof 10n      // "bigint"
typeof undefined // "undefined"
```

Gotcha:

```js
typeof null // "object"
```

Historical bug.

---

## Type Conversion

```js
String(value)
Number(value)
Boolean(value)
```

```js
Number(undefined) // NaN
Boolean(0)        // false
Boolean(5)        // true
```

---

## Operators

### String Concatenation

```js
'1' + 2      // "12"
2 + '1'      // "21"

'1' + 2 + 2  // "122"
1 + 2 + '2'  // "32"
```

---

### Unary +

Converts to Number.

```js
+true  // 1
+""    // 0
```

Equivalent to:

```js
Number(value)
```

---

## Equality

```js
0 === false // false
'' == false // true
```

Use:

```js
===
```

Avoid:

```js
==
```

except when you understand coercion.

Special case:

```js
null == undefined // true
```

---

## String Comparison

```js
"2" > "12" // true
```

Strings are compared lexicographically (dictionary order).
# Interview Gotchas

typeof null === "object"

null == undefined // true

0 == false // true

[] == false // true

{} + [] // weird result

'1' + 2 + 2 // "122"
1 + 2 + '2' // "32"
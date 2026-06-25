# Comparison Operators

## Equality

```js
0 == false     // true
'' == false    // true
```

`==` performs type coercion.

```js
0 === false    // false
```

`===` checks value + type (recommended).

---

## null vs undefined

```js
null == undefined   // true

null === undefined  // false
```

Special rule:
- `null` and `undefined` are only loosely equal to each other.

---

## String Comparison

```js
"2" > "12"   // true
```

Strings are compared lexicographically (dictionary order).

---

## Comparison Rules

- `==` → type coercion allowed
- `===` → no type coercion
- Comparison operators (`>`, `<`, `>=`, `<=`) return boolean
- Different types are usually converted to numbers before comparison
- Be careful when comparing `null` and `undefined`

---

## Interview Gotchas

```js
0 == false            // true
'' == false           // true

null == undefined     // true

null === undefined    // false

'2' > '12'            // true
```
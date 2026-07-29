# Promise Chaining (JavaScript)

## Definition

Promise chaining executes asynchronous operations **sequentially**, where each `.then()` receives the result of the previous Promise.

```javascript
promise
  .then(result => {
    return result * 2;
  })
  .then(result => {
    console.log(result);
  });
```

---

## Key Points

* Every `.then()` returns a **new Promise**.
* Returning a **value** passes it to the next `.then()`.
* Returning a **Promise** makes the next `.then()` wait until it resolves.
* Use chaining instead of nested callbacks (avoids callback hell).

---

## Example 1: Returning a Value

```javascript
new Promise(resolve => {
    setTimeout(() => resolve(1), 1000);
})
.then(result => {
    console.log(result); // 1
    return result * 2;
})
.then(result => {
    console.log(result); // 2
    return result * 2;
})
.then(result => {
    console.log(result); // 4
});
```

**Output**

```
1
2
4
```

---

## Example 2: Returning a Promise

```javascript
.then(result => {
    return new Promise(resolve => {
        setTimeout(() => resolve(result * 2), 1000);
    });
})
```

The next `.then()` waits until this Promise resolves.

---

## `fetch()` Example

```javascript
fetch("https://dummyjson.com/users")
  .then(response => response.json())
  .then(data => {
    console.log(data.users[0].firstName);
  });
```

> Prefer `response.json()` over `response.text()` for JSON APIs.

---

## Flow

```
Promise
   ↓
.then()
   ↓
.then()
   ↓
.then()
```

---

## Remember

* `.then()` → returns a new Promise.
* `return value` → next `.then(value)`.
* `return Promise` → next `.then()` waits.
* Use `.catch()` at the end to handle errors in the chain.


https://javascript.info/promisify
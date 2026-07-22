# JavaScript Promises

## What is a Promise?

A **Promise** represents the eventual result of an asynchronous operation.

**States:**
- **Pending** – In progress
- **Fulfilled** – Success
- **Rejected** – Failure

---

## Creating a Promise

```javascript
let promise = new Promise((resolve, reject) => {
    resolve(value);   // Success
    reject(error);    // Failure
});
```

- The **executor** runs immediately.
- `resolve()` → fulfills the promise.
- `reject()` → rejects the promise.

Example:

```javascript
new Promise(resolve => {
    setTimeout(() => resolve("done"), 1000);
});
```

---

## `.then()`

Handles success.

```javascript
promise.then(result => {
    console.log(result);
});
```

---

## `.catch()`

Handles errors.

```javascript
promise.catch(error => {
    console.log(error);
});
```

---

## Common Mistake

❌ Wrong

```javascript
promise.catch(alert("Error"));
```

✅ Correct

```javascript
promise.catch(() => alert("Error"));
```

> Pass a **function**, not a function call.

---

## `.then(success, error)`

You can handle both success and failure in one call.

```javascript
promise.then(
    result => console.log(result),
    error => console.log(error)
);
```

---

## `.finally()`

Runs whether the Promise succeeds or fails.

```javascript
promise.finally(() => {
    console.log("Cleanup");
});
```

**Common uses:** Hide loader, close connections, cleanup.

---

## Executor

The executor runs **immediately** when the Promise is created.

```javascript
new Promise(() => {
    console.log("Runs immediately");
});
```

---

## Why Promises?

Instead of nested callbacks:

```javascript
loadScript(a, () => {
    loadScript(b, () => {});
});
```

Use:

```javascript
loadScript(a)
    .then(() => loadScript(b));
```

Cleaner and easier to read.

---

## Promises vs Callbacks

| Promises | Callbacks |
|----------|-----------|
| Readable | Can become nested |
| Supports chaining | Callback hell |
| `.catch()` for errors | Manual error handling |
| `.finally()` | No equivalent |

---

## Promise Methods

**`.then()`** → Success

```javascript
promise.then(result => {});
```

**`.catch()`** → Failure

```javascript
promise.catch(error => {});
```

**`.finally()`** → Always runs

```javascript
promise.finally(() => {});
```

---

## Key Points

- Promise = future result of async work.
- Executor runs immediately.
- `resolve()` → fulfilled.
- `reject()` → rejected.
- `.then()` handles success.
- `.catch()` handles errors.
- `.finally()` always runs.
- Always pass a **function**, not its result.
- Promises make async code cleaner than callbacks.
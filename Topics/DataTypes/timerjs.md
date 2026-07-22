# JavaScript Timers

## `setTimeout()`

Runs a function **once** after a delay.

```javascript
setTimeout(callback, delay);
```

```javascript
setTimeout(() => console.log("Hello"), 1000);
```

---

## `clearTimeout()`

Cancels a timeout.

```javascript
let id = setTimeout(task, 1000);
clearTimeout(id);
```

---

## `setInterval()`

Runs a function **repeatedly** at fixed intervals.

```javascript
let id = setInterval(task, 1000);
```

---

## `clearInterval()`

Stops an interval.

```javascript
clearInterval(id);
```

---

## Nested `setTimeout()`

Schedules the next execution manually.

```javascript
function repeat() {
    console.log("Hello");
    setTimeout(repeat, 1000);
}
setTimeout(repeat, 1000);
```

**Advantage:** More control, no overlapping executions.

---

## `setInterval()` vs Nested `setTimeout()`

| `setInterval()` | Nested `setTimeout()` |
|-----------------|-----------------------|
| Fixed interval | Flexible interval |
| Can overlap | No overlap |

---

## Key Points

- `setTimeout()` → Runs **once**.
- `setInterval()` → Runs **repeatedly**.
- `clearTimeout()` / `clearInterval()` cancel timers.
- Prefer nested `setTimeout()` for better control.
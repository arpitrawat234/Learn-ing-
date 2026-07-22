## Arrays as a queue 

push appends an element to the end.
shift get an element from the beginning, advancing the queue, so that the 2nd element becomes the 1st.
## Arrays as Stack

It supports two operations:

push adds an element to the end.
pop takes an element from the end.


# 🧠 JavaScript Array Methods Cheat Sheet

## ➕ Add / ➖ Remove Elements

- `push(...items)` → Add items to the **end**
- `pop()` → Remove item from the **end**
- `shift()` → Remove item from the **beginning**
- `unshift(...items)` → Add items to the **beginning**
- `splice(pos, deleteCount, ...items)` → Modify array:
  - Delete `deleteCount` items from index `pos`
  - Insert `items` at that position

---

## 📋 Copy / Create Arrays

- `slice(start, end)` → Returns a **new array** from `start` to `end` *(end not included)*
- `concat(...items)` → Returns a **new array** combining:
  - Original array + items
  - If items contain arrays → their elements are flattened (1 level)

---

## 🔍 Search & Filter

- `indexOf(item, pos)` → First index of item or `-1`
- `lastIndexOf(item, pos)` → Last index of item or `-1`
- `includes(value)` → `true` / `false`
- `find(func)` → First element matching condition
- `findIndex(func)` → Index of first match
- `filter(func)` → All matching elements (new array)

---

## 🔁 Iteration

- `forEach(func)` → Runs function for each element *(no return value)*

---

## 🔄 Transform / Modify

- `map(func)` → Returns new array with transformed elements
- `sort(func)` → Sorts array **in-place**
- `reverse()` → Reverses array **in-place**

---

## 🔤 String ↔ Array

- `split(separator)` → String → Array
- `join(separator)` → Array → String

---

## 📊 Reduce to Single Value

- `reduce(func, initial)` → Left → Right accumulation
- `reduceRight(func, initial)` → Right → Left accumulation

---

## 🧪 Utility

- `Array.isArray(value)` → Checks if value is an array

---

## ⚠️ Important Notes

- Methods like `push`, `pop`, `splice`, `sort`, `reverse` → **mutate original array**
- Methods like `slice`, `concat`, `map`, `filter` → **return new array**

https://javascript.info/array-methods
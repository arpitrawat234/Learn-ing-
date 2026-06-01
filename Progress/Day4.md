
# 🧠 DOM Basics — Short Notes

## 🔹 What is DOM

* DOM = **Object representation of HTML**
* Browser converts HTML → **tree structure**
* JavaScript interacts with this tree

```text
HTML → DOM → JS manipulates → UI changes
```

---

## 🔹 Selecting Elements

### 1. `getElementById`

```javascript
document.getElementById("id")
```

* selects by **id only**
* returns **one element**

---

### 2. `querySelector`

```javascript
document.querySelector(".class")
```

* uses **CSS selectors**
* returns **first matching element**

---

### 3. `querySelectorAll`

```javascript
document.querySelectorAll(".class")
```

* returns **all matching elements**
* gives **NodeList (loop needed)**

---

## 🔹 Selector Rules (VERY IMPORTANT)

```text
"#id"     → id
".class"  → class
"tag"     → tag name
```

❌ `"first"` → looks for `<first>` tag
✔ `".first"` → class
✔ `"#first"` → id

---

## 🔹 DOM Manipulation

```javascript
element.innerText = "Hello";
element.style.color = "red";
```

---

## 🔹 Events

```javascript
button.addEventListener("click", () => {
    // action
});
```

* makes page interactive
* event-driven programming

---

## 🔹 Script Loading Problem

❌ Script in `<head>` runs before DOM → elements = `null`

---

## 🔹 Fixes

### ✔ Best (modern)

```html
<script src="script.js" defer></script>
```

---

### ✔ Alternative

```javascript
document.addEventListener("DOMContentLoaded", () => {
    // code
});
```

---

### ✔ Old method

```html
<script src="script.js"></script> <!-- at end of body -->
```

---

## 🔹 `defer` vs others

| Type   | Behavior        |
| ------ | --------------- |
| normal | blocks HTML ❌   |
| async  | unpredictable ❌ |
| defer  | waits for DOM ✔ |

---

## 🔹 Common Errors

* selector wrong → `null`
* accessing before DOM loads
* using `querySelectorAll` without loop

---

## 🧠 Mental Model

```text
1. Select element
2. Listen to event
3. Modify DOM
```

---
```
const list = document.getElementById("list");

let li = document.createElement("li");
li.innerText = "New Task";

// add at top
list.prepend(li);

// delete on click
li.addEventListener("click", () => {
    li.remove();
});
```

```li.classList.add("task-item");```
used to add class to the tag

---

# Logical Operators

```js
// OR: first truthy value
1 || 0        // 1
null || 1     // 1

// AND: first falsy value, else last value
1 && 2        // 2
0 && 2        // 0

// NOT
!true         // false

// Nullish Coalescing
user ?? "Anonymous"
```

### Difference

```js
0 || 5   // 5
0 ?? 5   // 0
```

* `||` → first truthy value
* `??` → first non-null/undefined value

---

# Frequency Counter Trick

```js
freq[digit] = (freq[digit] || 0) + 1;
```

Equivalent:

```js
freq[digit] = (freq[digit] ?? 0) + 1;
```

Use `??` when `0`, `""`, `false` are valid values.

---

# Loops

### While

```js
while(condition){
    // code
}
```

### Do While

Runs at least once.

```js
do{
   // code
}while(condition);
```

### For

```js
for(let i=0;i<n;i++){
}
```

### Break

Exit loop.

```js
break;
```

### Continue

Skip current iteration.

```js
continue;
```

---

# Functions

### Function Declaration

```js
function sum(a,b){
    return a+b;
}
```

Hoisted.

---

### Function Expression

```js
const sum = function(a,b){
    return a+b;
};
```

Not callable before definition.

---

### Anonymous Function

```js
setTimeout(function(){
    console.log("Hi");
},1000);
```

Function without a name.

---

# Arrow Functions

### Single Expression

```js
const double = n => n * 2;
```

Implicit return.

### Multiple Statements

```js
const sum = (a,b) => {
    const result = a+b;
    return result;
};
```

Need explicit `return`.

---

# Terminal

```bash
ls
```

Lists files/folders in current directory.


# Date & Time

JavaScript uses the `Date` object to work with dates and time.

Internally, a date is stored as milliseconds from:

```txt
1 Jan 1970 00:00:00 UTC
```

## Create Date

```js
const now = new Date();
console.log(now);
```

### Using Milliseconds

```js
const jan02_1970 = new Date(24 * 60 * 60 * 1000);
console.log(jan02_1970);
```

`new Date(ms)` takes milliseconds after `1 Jan 1970`.

## Date Constructor

```js
new Date(year, month, date, hours, minutes, seconds, ms);
```

Important:

- `month` starts from `0`
- `0 = January`
- `11 = December`

```js
new Date(2024, 0, 1);  // Jan 1, 2024
new Date(2024, 11, 1); // Dec 1, 2024
```

## Get Methods

```js
const date = new Date();

date.getFullYear(); // year
date.getMonth();    // month: 0-11
date.getDate();     // day of month: 1-31
date.getDay();      // day of week: 0-6
date.getHours();    // hour: 0-23
date.getMinutes();  // minutes: 0-59
date.getSeconds();  // seconds: 0-59
date.getTime();     // milliseconds since 1970
```

Week days:

```txt
0 = Sunday
1 = Monday
2 = Tuesday
3 = Wednesday
4 = Thursday
5 = Friday
6 = Saturday
```

## `getDate()` Vs `getDay()`


```js
date.getDate(); // day of the month
date.getDay();  // day of the week
```

This is a common mistake.

## UTC Methods

UTC versions use timezone-independent values.

```js
date.getUTCFullYear();
date.getUTCMonth();
date.getUTCDate();
date.getUTCDay();
date.getUTCHours();
date.getUTCMinutes();
date.getUTCSeconds();
```

## Set Methods

Setter methods change the original date object.

```js
const date = new Date();

date.setFullYear(2030);
date.setMonth(5);    // June
date.setDate(15);
date.setHours(10);
date.setMinutes(30);
date.setSeconds(0);
```

## Date Math

Subtracting dates gives difference in milliseconds.

```js
const start = new Date(2024, 0, 1);
const end = new Date(2024, 0, 2);

console.log(end - start); // 86400000
```

Convert milliseconds:

```js
const second = 1000;
const minute = 60 * second;
const hour = 60 * minute;
const day = 24 * hour;
```

## Copy Date

Dates are objects, so copy them using `new Date(oldDate)`.

```js
const date1 = new Date();
const date2 = new Date(date1);
```

## Common Mistakes

- `getday()` is wrong; use `getDay()`.
- `getFullyear()` is wrong; use `getFullYear()`.
- Months start from `0`, not `1`.
- `getDate()` and `getDay()` are different.
- Setter methods mutate the original date.

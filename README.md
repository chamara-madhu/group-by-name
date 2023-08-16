# group-by-name

Here's a simple grouping function in JavaScript that you can use to group an array of objects by an attribute (in this case, the "name" attribute):

# Install

```sh
npm install group-by-name
```

# Usage

## groupByName(array, name);

_array_ - input array.
_name_ - object key name (attribute name);

Input:

```js
const cars = [
  {
    make: "BMW",
    modal: "X1",
    capacity: "2000cc",
  },
  {
    make: "Benz",
    modal: "E300",
    capacity: "3000cc",
  },
  {
    make: "BMW",
    modal: "X6",
    capacity: "2500cc",
  },
];
```

Invoke:

```js
const groupByName = require("group-by-name");
const output = groupByName(cars, "make");
```

Output:

```js
[
  {
    name: "BMW",
    data: [
      { make: "BMW", modal: "X1", capacity: "2000cc" },
      { make: "BMW", modal: "X6", capacity: "2500cc" },
    ],
  },
  {
    name: "Benz",
    data: [{ make: "Benz", modal: "E300", capacity: "3000cc" }],
  },
];
```
# Author
© chamaramadhushanka

# License

ISC

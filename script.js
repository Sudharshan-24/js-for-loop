// for loop
for (let i = 1; i <= 10; i++) {
    console.log("Hello world!");
}

// use break to exit out of a for loop before condition is false:
for (let j = 10; j >= 1; j--) {
    if (j === 7) {
        break;
    }
    console.log(j);
}

// Common Pitfall: Exceeding the Bounds of an Array
//There are two ways to fix this code: set condition to either i < arr.length or i <= arr.length - 1.
const arr =[1, 2, 3];

for (let k = 0; k <= arr.length; k++) {
    console.log(arr[k]);
}

// for...in loop
const capitals = {
    india: "Delhi",
    us: "Washington DC",
    japan: "Tokyo"
}

for (let capital in capitals) {
    console.log(capital + ": " + capitals);
}

// for...of loop
const fruits = ["apple", "banana", "mango"];

for (let y of fruits) {
    console.log(y);
}

// Iterate over a Map:
const m = new Map();
m.set(1, "yellow");
m.set(2, "green");
m.set(3, "purple");

for (let n of m) {
    console.log(n);
}

// Iterate over a Set:
const s = new Set();
s.add(1);
s.add("blue");
s.add("orange");

for (let a of s) {
    console.log(a);
}
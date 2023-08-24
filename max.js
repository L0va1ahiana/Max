// This program is meant to output the maximum value in a sequence of numbers
// how many numbers we need
let size = parseInt(prompt("Size of the array please: "));
let i;
const t = [];

// creating the array
for (i = 0; i < size; i++) {
    t[i] = parseInt(prompt(`Number ${i+1}: `));
}

// show the array
console.log(`The array: [${t}]`);

// getting the max
let index_max = 0;
for (i = 0; i < size-1; i++) {
    if (t[i] < t[i+1]) {
        index_max = i + 1;
    }
}

console.log(`Max = ${t[index_max]}`);

// method 2: console.log("Max = " + Math.max(...t))





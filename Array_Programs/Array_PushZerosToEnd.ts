let input: number[] = [20, 0, 10, 0, 30, 50, 0, 70, 0];

// Step 1: Filter out non-zero elements
let nonZeroCount = input.filter(num => num!==0);

// Step 2: Count the number of zeroes
let zeroCount = input.length - nonZeroCount.length;

// Step 3: Create an array of zeroes of length equal to zeroCount
let zeroArray = new Array(zeroCount).fill(0);

// Step 4: Concatenate non-zero elements with zero array
let output = nonZeroCount.concat(zeroArray);

console.log(output);
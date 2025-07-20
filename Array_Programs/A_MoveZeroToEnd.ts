//Input: [0, 1, 0, 3, 12] → Output: [1, 3, 12, 0, 0]

let arr7 = [0, 1, 0, 3, 12];
let nonZero = arr7.filter(n => n !== 0);
let zeros = new Array(arr7.length - nonZero.length).fill(0);
let result7 = nonZero.concat(zeros);
console.log(result7); // [1, 3, 12, 0, 0]
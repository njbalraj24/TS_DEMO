//Input: [1, 2, 2, 3, 1] → Output: [1, 2, 3]
let arr5 = [1, 2, 2, 3, 1];
let unique1 = [...new Set(arr5)];
console.log(unique1); // [1, 2, 3]

//Using reduce()
let arr6 = [1, 2, 2, 3, 1];
let unique = arr6.reduce((acc: number[], curr) => {
    if (!acc.includes(curr)) acc.push(curr);
    return acc;
}, []);
console.log(unique); // [1, 2, 3]

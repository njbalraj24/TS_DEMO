let A = ["a", "b", "a", "b", "c", "z"];
let a1 = 0; let b1 = 0; let c1 = 0; let z1 = 0;
for (let i = 0; i < A.length; i++) {
    if (A[i] === "a") {
        a1 += 1;
    }
    if (A[i] === "b") {
        b1 += 1;
    }
    if (A[i] === "c") {
        c1 += 1;
    }
    if (A[i] === "z") {
        z1 += 1;
    }
}
console.log("a:", a1); console.log("b:", b1); console.log("c:", c1); console.log("z:", z1);

//Simplest Way
let counts: Record<string, number> = {};

for (let char of A) {
  counts[char] = (counts[char] || 0) + 1;
}

console.log(counts); // { a: 2, b: 2, c: 1, z: 1 }

/* 
let counts: Record<string, number> = {};
 counts is an object (like a dictionary or map).
 Keys = the characters we encounter ("a", "b", "c", etc.).
 Values = how many times each character appeared so far.
 At this point, counts = {} (empty). 
 
counts[char] = (counts[char] || 0) + 1;
counts[char] → look up how many times we’ve already counted this character.
 If "a" was already seen, counts["a"] will hold a number.
 If "a" never appeared yet, counts["a"] is undefined.
 */

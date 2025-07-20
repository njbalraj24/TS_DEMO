let A = ["a", "b", "a", "b", "c", "z"];
let a1 = 0;
let b1 = 0;
let c1 = 0;
let z1 = 0;

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

console.log("a:", a1);
console.log("b:", b1);
console.log("c:", c1);
console.log("z:", z1);
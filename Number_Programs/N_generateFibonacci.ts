/* 
So the series goes:
0, 1, 1, 2, 3, 5, 8, 13, 21, ...
*/

function generateFibonacci(n: number): number[] {
    const fib: number[] = [];

    for (let i = 0; i < n; i++) {
        if (i === 0) {
            fib.push(0);
        } else if (i === 1) {
            fib.push(1);
        } else {
            fib.push(fib[i - 1] + fib[i - 2]);
        }
    }

    return fib;
}

// Example usage
console.log(generateFibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

/* 
Initialize an empty array fib[] to hold the sequence.

Loop n times:
If index i is 0, push 0
If index i is 1, push 1
Otherwise, push the sum of the last two values: fib[i-1] + fib[i-2]
*/
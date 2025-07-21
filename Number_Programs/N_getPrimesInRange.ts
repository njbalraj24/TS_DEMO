function isPrime(n: number): boolean {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function getPrimesInRange(start: number, end: number): number[] {
    const primes: number[] = [];
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}

// Example usage
console.log(getPrimesInRange(10, 50));
// Output: [11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]


/* 
isPrime(n: number): boolean
 Returns true if n is prime.
 Optimized by checking up to sqrt(n) instead of n - 1.

getPrimesInRange(start, end)
 Iterates from start to end.
 Adds only those numbers that return true from isPrime().
*/
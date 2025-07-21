function gcd(a: number, b: number): number {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function lcm(a: number, b: number): number {
    if (a === 0 || b === 0) return 0;
    return (a * b) / gcd(a, b);
}

// Example usage
console.log(lcm(12, 18)); // Output: 36
console.log(lcm(5, 7));   // Output: 35
console.log(lcm(0, 10));  // Output: 0

/* 
** The Least Common Multiple (LCM) of two numbers is the smallest positive integer that is divisible by 
both numbers. **
First, calculate the GCD of the two numbers using the Euclidean algorithm.
Apply the LCM formula using GCD.
*/
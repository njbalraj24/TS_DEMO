function gcd(a: number, b: number): number {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Example usage
console.log(gcd(48, 18)); // Output: 6
console.log(gcd(100, 25)); // Output: 25
console.log(gcd(7, 13));   // Output: 1 (co-prime)

/* 
** Greatest Common Divisor GCD of two numbers is the largest number that divides both numbers without
 leaving a remainder. **
Euclidean Algorithm:
gcd(a, b) = gcd(b, a % b)
Repeat until b == 0, then a is the GCD.

Example: gcd(48, 18)
48 % 18 = 12 → gcd(18, 12)
18 % 12 = 6 → gcd(12, 6)
12 % 6 = 0 → return 6
*/
function decimalToBinaryAndHex(decimal: number): { binary: string, hex: string } {
    return {
        binary: decimal.toString(2), // base 2 = binary
        hex: decimal.toString(16).toUpperCase() // base 16 = hexadecimal
    };
}

// Example
console.log(decimalToBinaryAndHex(42));
// Output: { binary: '101010', hex: '2A' }

/* 
toString(base) converts a number to a given base:
 .toString(2) → binary
 .toString(16) → hexadecimal
*/
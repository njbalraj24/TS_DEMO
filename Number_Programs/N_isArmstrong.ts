function isArmstrong(num: number): boolean {
    const digits = num.toString().split('');
    const power = digits.length;

    const sum = digits.reduce((acc, digit) => acc + Math.pow(Number(digit), power), 0);

    return sum === num;
}
// Example usage
console.log(isArmstrong(153)); // true
console.log(isArmstrong(9474)); // true
console.log(isArmstrong(123)); // false

/* 
num.toString().split('')
Converts number to string and splits into digit characters.

power = digits.length
Determines the number of digits.

reduce()
Converts digits back to numbers and sums their power-th powers.

Compare the result with the original number.

153 -- true -- 1^3 + 5^3 + 3^3 = 153
*/
function reverseNumber(num: number):number
{
    return parseInt(
        Math.abs(num)
        .toString()
        .split('')
        .reverse()
        .join('')
    ) * Math.sign(num);
}
console.log(reverseNumber(1234));
console.log(reverseNumber(-758));
console.log(reverseNumber(0));

/* 
Math.abs(num): Gets the absolute value of num.
 This removes the sign (-) if the number is negative, making reversal easier. Example: Math.abs(-123) → 123
.toString() : 123 → "123"
.split('') : "123" → ["1", "2", "3"]
.reverse() : ["1", "2", "3"] → ["3", "2", "1"]
.join('') : ["3", "2", "1"] → "321"
parseInt(...) : "321" → 321
* Math.sign(num): Multiplies the reversed number by the sign of the original number:
 Math.sign(num) returns:
 1 if num is positive
 -1 if num is negative
 0 if num is zero
*/
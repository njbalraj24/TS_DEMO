function countNumberOfDigits(num: number): number
{
    return Math.abs(num).toString().length;
}
console.log(countNumberOfDigits(12345)); //5

/* 
Explanation:
Math.abs(num) handles negative numbers.
Converts number to string and gets its length (number of digits).
 */
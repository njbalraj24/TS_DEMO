function countSumOfDigits(num: number):number
{
    let sum = 0;
    let digits = Math.abs(num).toString();

    for(let char of digits)
    {
        sum += parseInt(char);
    }

    return sum;
}
console.log(countSumOfDigits(1234)); //10

/* 
Explanation:

Converts number to string.
Loops through each digit, converts it back to a number with parseInt, and adds to sum.
*/
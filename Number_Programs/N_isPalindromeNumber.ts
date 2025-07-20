function isPalindromeNumber(num: number): boolean
{
    const str = Math.abs(num).toString();
    return str === str.split('').reverse().join('');
}
console.log(isPalindromeNumber(121)); //true
console.log(isPalindromeNumber(246)); //false
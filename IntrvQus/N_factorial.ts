function factorial(num: number): number
{
    if(num<0) return -1;

    let result = 1;
    for(let i=2; i<=num; i++)
    {
        result *= i;
    }
    return result;
}
console.log(factorial(5)); //120
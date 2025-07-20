function isPrime(num: number): boolean
{
    if(num<=1) return false;

    for(let i=2; i<=Math.sqrt(num); i++)
    {
        if(num%i == 0) return false;
    }
    return true;
}
console.log(isPrime(7)); //true
console.log(isPrime(8)); //false

/* 
Logic: A number is prime if it's only divisible by 1 and itself.
Why square root? = If a number is divisible by any number larger than its square root, it would already have 
a smaller corresponding divisor. So no need to check beyond the square root — this improves efficiency.
return true = If no divisors were found, it’s prime
*/
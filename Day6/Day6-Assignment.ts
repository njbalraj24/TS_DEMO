/* While loop assignments */
//1. Write a program to calculate the sum of the first 10 natural numbers using a while loop. 
let a:number=1;
while(a<=10)
{
    console.log(a);
    a++;
}

//2. Write a program to calculate the factorial of a given number using a while loop. 
let b:number=5; let sum1:number=1;
while(b>=1)
{
  sum1=sum1*b;
  b--;
}
console.log("Factorial is: ",sum1)

//3. Write a program to reverse a given number using a while loop
let c:number=12345;
let reverse:number=0

while(c>0)
{
  let digit=c%10; // To Get the last digit
  reverse=reverse*10+digit; //Append the digit to reversed number
  c=Math.floor(c/10) //Remove the last digit from c
}
console.log("Reverse number is: ",reverse)

//4. Write a program to check if a given number is a prime number using a while loop. 
//Prime number: a number that can be divided exactly only by itself and 1, for example 7, 17 and 41
let d:number=7;

while(d>0)
{
  if((d%d==0) && (d%1==0))
  {
    console.log('Prime Number');
    break;
  }
  else
  {
    console.log('Not a Prime Number');
    break;
  }
}


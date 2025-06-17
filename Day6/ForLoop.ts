/* //For loop: A for loop is typically used when the number of iterations known before hand.

//Example 1: Print 1 to 10 numbers

for(let i=1; i<=10; i++)
{
  console.log(i)
} 

//Example 2: Print only Even number from 1 to 10

for(let i=2; i<=10; i+=2)
{
  console.log(i)
}

//Method 2
for(let i=1; i<=10; i++)
    {
        if(i%2==0)
        {
      console.log(i)
       }
    }   


//Example 3: Print 10, 9 - - 1
for(let i=10; i>=1; i--)
{
    console.log(i)
} */

//Example 4: Global variable & Local -- IMPORTANT
let i:number

for(i=1;i<=5;i++) //if we mention let here then will get global & local difference
{
    console.log(i)
}
console.log(i) //Prints 6 if global variable & if it is local then get an error saying access without init

//Example 5: CONTINUE---
console.log("For Loop without BLOCK with GLOBAL Variable")
let j:number;
for(j=1;j<=5;j++);
console.log(j) //only 6 = becuase NO BLOCK in for loop

console.log("For Loop without BLOCK with LOCAL Variable")
let k:number;
for(let k=1;k<=5;k++);
//console.log(k) --Error --> K is used without assigning, becuase we are calling Global
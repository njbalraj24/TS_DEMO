/* Named Function: A function which is declared with a name.

 Syntax

function functionName(parameter): returntype
{
   Block of code
}


//Example1: Named function with no parameter and no return type
function display(): void
{
    console.log("Welcome to TypeScript")
}

display() //Calling the function
 

//Example2: Named function with parameter and return type
function addNumbers(x:number , y:number): number
{
    return x+y
}
console.log(addNumbers(2,3))
*/

//Example3: Named function with Rest parameters - Same type
//Rest Parameters dont restrict the number of values that you can pass to a function
/* function addNumbers(...nums:number[])
{
    let i
    let sum:number=0

    for(i=0;i<nums.length;i++)
    {
        sum=sum+nums[i]
    }
    console.log("Sum of numbers are: ",sum)
}
addNumbers(2,3)
addNumbers(12,12)
addNumbers(1) */


//Example 4: Named function with Rest parameters - Multiple types
/* function CountElements(...elements:(number | string)[])
{
    return elements.length
}
console.log(CountElements(2,"Balu",3,5,"NJB"))
console.log(CountElements(10,30,20,15,66,78,90,43,56,76,89,45,43))
console.log(CountElements("n","g","Ok","Yes"))
 */

//Example 5: Named function with Optional parameters    
/* function displayDetails(id:number,name:string,mailID?:string): void
//If we make 1st parameter itself as Optional then will get ERROR,
//Becuase after Optional paramneter we should not have mandatory parameter
{
  console.log("ID:",id)
  console.log("NAME:",name)
  console.log("EMAIL:",mailID)
}
displayDetails(24,"BNJ","bnj@yp.com")
displayDetails(25,"VSL")
displayDetails(23,"Kavi")
//Will get "undefined" output if we won't pass value. */

//Example 6: Named function with Default parameters
/* function calculateDiscount(price:number , rate:number=0.50)
{
  let discount:number = price*rate
  console.log("Discount Amount is: ", discount)
}
calculateDiscount(100,0.1)
calculateDiscount(100) */
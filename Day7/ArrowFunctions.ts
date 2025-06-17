//Arrow Functions also called as 'LAMBDA functions'

/* Lambda refers to anonymous function in programming.
   Lambda functions are a concise mechanism to represent anonymous function.
   These functions are also called as Arrow functions.

   There are 3 parts to lamdba functions

   1. Parameters - A function may optionally have parameters
   2. The fat arrow notation/lambda notation (=>) - It is also called as "goes to operator"
   3. Statements - represent the functions instruction set
 */

/* //Example 1: Arrow function with No Parameters and No return type
let greet=():void =>
{
    console.log("welcome")
}
greet()

//Example 2: Arrow function with Parameters and return type
let mul=(a:number , b:number):number =>
{
  return a*b
}
console.log(mul(8,3))

//Example 3: Arrow function with Implicit return
//Only if you have single return statements it works
let add=(a:number , b:number):number => a+b
    
console.log(add(2,2)) */

/* let displayDetails=(id:number,name:string,mailID?:string): void =>
{
  console.log("ID:",id)
  console.log("NAME:",name)
  console.log("EMAIL:",mailID)
}
displayDetails(24,"BNJ","bnj@yp.com")
displayDetails(25,"VSL")
displayDetails(23,"Kavi") */

//Example 6: Arrow function with Default parameters
/* let calculateDiscount=(price:number , rate:number=0.50) =>
{
  let discount:number = price*rate
  console.log("Discount Amount is: ", discount)
}
calculateDiscount(100,0.1)
calculateDiscount(100) */

let CountElements=(...elements:(number | string)[]) =>
{
    return elements.length
}
console.log(CountElements(2,"Balu",3,5,"NJB"))
console.log(CountElements(10,30,20,15,66,78,90,43,56,76,89,45,43))
console.log(CountElements("n","g","Ok","Yes"))
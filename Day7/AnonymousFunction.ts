//Anonymous Function also called as 'Unnamed Function / Nameless Function'

/* An anonymous function does not have a name,
   Instead, it is assigned to a variable, which acts as its name.
   
   Syntax:
   let variable = function(parameters)
   {
     //function body
   }
   variable() //Calling the function using variable
 */

//Example 1: Anonymous function
/* let msg=function(): string
{
  return "Hello TS"
}
console.log(msg()) */

//Example 1: Anonymous function with parameters
let multiply=function(a:number , b:number):number
{
  return a*b
}
console.log(multiply(10,20))

//Step1: write a signatures of functions
//Step2: implement a function
//Step3: calling function

//Example1: different parameter Types(Data types)

//Step1: write a signatures of functions
function getInfo(ID:number):string
function getInfo(name:string):string

//Step2: implement a function
 function getInfo(param: number|string):string
{
    if(typeof param==="number")
    {
        return(`User ID is ${param}`)
    }
    else
    {
        return(`User Name is ${param}`)
    }
}

//Step3: calling function
console.log(getInfo(101));
console.log(getInfo("John"))

//Example2: different Number of parameters
/* function add(a:number, b:number):number
function add(a:number, b:number, c:number):number

function add(a:number, b:number, c?:number):number
{
   if(c!==undefined)
   {
     return a+b+c
   }
   else
   {
    return a+b
   }
}

console.log(add(10,20))
console.log(add(2,3,4))
console.log(add(1,0)) */

//Example3: different Return types
/* function processInput(str:string):string
function processInput(num:number):number

function processInput(input:string | number): string | number
{
  if(typeof input==="string")
  {
     return input.toUpperCase()
  }
  else
  {
    return input*2
  }
}

console.log(processInput("balu"))
console.log(processInput(12)) */

//Example4: 
/* function greet(name:string):string
function greet(age:number):string
function greet(IsMarried:boolean):string

function greet(value: string | number | boolean):string
{
   if(typeof value==="string")
   {
      return `Hello ${value}`
   }
   else if(typeof value=="number")
   {
    return `You are ${value} years old`
   }
   else
   {
     let res:string=value ? "married" : "single"
     return res
   }
}

console.log(greet("Balraj N J"))
console.log(greet(30))
console.log(greet(false)) */

let n1:number=20;
let n2:string='Balraj';

if(typeof n1 == "number")
{
  console.log('n1 is a number')
}
if(typeof n2 == "string")
{
  console.log('n2 is a string')
}
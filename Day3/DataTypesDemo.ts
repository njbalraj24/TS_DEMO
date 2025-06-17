/*
1) Premitive Data Types (Built-In)
Number
String
Boolean
Null
Undefined
Any
Union type
Void

2) Non-Premitive Data Types (Objects)
Array
Class
Function
Interface
Touple etc...


*/

/* //1. NUMBER TYPE
// Represents both integers and floating-point numbers
let age:number=25;
let prize:number=99.99;
let big:number=4565475686786868;

console.log("Age is"+age)
console.log("Prize is"+prize)
console.log("Big Number is "+big) */

/* 2. STRING TYPE
String represents Textual data

We can declare using 3 ways
1. Single Quote
2. Double Quote
3. Backtick 

let firstname:string="Balu"
let lastname:string='NJ'

console.log("Hello",firstname,lastname)

let greeting:string=`Hello ${firstname} ${lastname}`
console.log(greeting)*/

/* 3. BOOLEAN Type
Represents true/false values 
let isStudent:boolean=true
let hasjob:boolean=false

console.log(isStudent)
console.log(hasjob) */

/* 4. NULL and UNDEFINED
Special types for absence of values 
let empltyValue:null=null
let notAssigned:undefined=undefined 

console.log(empltyValue)
console.log(notAssigned)

let price:number
console.log(price) //undefined
*/

/* 5. ANY Type
Looses the typescript benefits 
let value:any="Welcome"
console.log(typeof(value))
value=100
console.log(typeof(value))
value=true
console.log(typeof(value))

console.log(value) */

/* 6. UNION - Combine multiple types 
let id:number | string | boolean

id=12345;
console.log(id)

id="Wow"
console.log(id)

id=false
console.log(id) */

/* 7. VOID TYPE
Used for functions that don't return anything */
//Returns nothing just print the value.
function show():void
{
    console.log('Welcome')
}
show()

function display(x:number, y:number):void
{
    console.log(x+y)
}
let res=display(10,20)

console.log(res)
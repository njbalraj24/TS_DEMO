//Variable: container which can hold/store some data.

//Variables can declare using 3 different keywords in JS & TS
//var, let, const

//In JS and TS specifying the Data Type is Optional

//Syntax: Keyword VariableName:Data Type(optional) = value
//Ex: var age:number = 25

//Difference between var, let, const

//1) Scope - Accessible Area (Functional scope[var] & Block scope[let,const])

//Ex1: Functional scope[var]
/* function varScope()
{
    if(true)
    {
        var msg="Hello World";
        console.log(msg)
    }
 console.log(msg)
}
varScope()

function blockScope()
{
    if(true)
    {
        let msg="Hello World";
        const great="Hello const"
        console.log(great)
        console.log(msg)
    }
 console.log(great) //can't access
 console.log(msg) //can't access
}
blockScope() */

// =============================================================================

//2) Declaration/Value Assignment
/* //Example1: var can be declared without initialization
var x;
console.log(x) //undefined
x=30
console.log(x) 

//Example2: let can be declared without initialization
let y;
console.log(y) //undefined
y=44
console.log(y)

//Example3: const must be initialized at the time of declaration
const z;
console.log(z)
const z1=11;
console.log(z1) */

// =========================================================================
//3) Re-declaration
//Ex1: var allows Re-declaration
var city="Mysuru"
var city="Davanagere"
console.log(city)

//Ex2: let NOT allows Re-declaration
let country="India"
//let country="USA" //Not Possible

//Ex3: const NOT allows Re-declaration
const planet="Earth";
//const planet="Mars" //Not Possible

// ========================================================================
//4) Re-Initialization/Re-assignment
//var and let allows BUT const NOT allow
//Ex1: 
/* var num=28;
num=29; //allowed
console.log(num)

//Ex2: 
let num1=28;
num1=29; //allowed
console.log(num1)

//Ex3:
const num2=30;
//num2=31; //Not possible */

//==========================================================================
//5) Hoisting
//console.log(a); undefined
var a=10;
console.log(a);

//console.log(b); //Not Initialized
let b=10;
console.log(b);

//console.log(c); //Not Initialized
const c=10;
console.log(c); 
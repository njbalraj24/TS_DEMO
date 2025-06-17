/* let a:number=20, b:number=10;

//Arithmetic Operations

/* console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)
console.log(5**2) // 5 square value we are checking */

//Assignment Operators
/* let a=10, b=5

//a+=b //a=a+b

console.log(a+=b) //a=a+b = 15
console.log(a-=b) //a=a-b = 10
console.log(a*=b) //a=a*b = 50
console.log(a/=b) //a=a/b = 10
console.log(a%=b) //a=a%b = 00 */

//Relational/Comparision Operators
//Returns boolean values True or False
// > < >= <= == != ===(strict equality)
/* let a=10, b=20

console.log(a>b) // F
console.log(a<b) // T
console.log(a>=b) // F
console.log(a<=b) // T
console.log(a==b) // F
console.log(a!=b) // T

//Difference between ==(equality) and ===(stricit equality)
console.log("Difference between ==(equality) and ===(stricit equality)")
let num1:any=10 //Number type
let num2:any="10" //String type

console.log(num1==num2) // T (Only Compare Values)
console.log(num1===num2) // F (Compares Values and Type) */

//Logical Operators && || !
//Works only between Boolean Variables
//Returns Boolean values true/false

// b1     b2      &&     ||     !(b1)
//------------------------------------
//True   True    True    True   false
//True   false   false   True   false
//false  True    false   True   True
//false  false   false   false  True

let b1:boolean=true
let b2:boolean=false

console.log(b1 && b2)
console.log(b1 || b2)
console.log(!b1)
console.log(!b2)

//PENDING
//Combination of logical & Relational Operators
console.log("Combination of logical & Relational Operators")
console.log(20>10 && 10>5) // T
console.log(10<20 || 5>10) // T









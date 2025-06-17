/* Objects - object contains properties and behaviour.
Object contains Variables and Methods. - In Programming
Object is Collection of Key and Value Pairs. - In JS & TS

Ex: employee
Properties - name, id, dep
Behaviour - bonus(), getdetails(), setdetails()

Ex: students
Properties - name, sid, grade
Behaviour - getdetails(), setdetails()
*/

/* Difference ways to create an Object in JS & TS
1. Using 'object' type - Directly define value for variables (JS/TS)
2. Inline Type Object - We also defines the Datatype of the keys (TS)
3. Using Type Alias (TS)
4. Using the Classes (JS ES16 / TS)
 */

/* 1. Using 'object' type - Directly define value for variables (JS/TS)
The TypeScript 'object' type represents all values that are not in primitive types.
 */
let employee:object = {name:"BNJ", age:30, salary:300000, job:"Engineer"}

//If you want to add Method into above code, then u need to remove object type becuase it allows only Key,Value
let employee1 = 
{
    name:"BNJ", 
    age:30, 
    salary:300000, 
    job:"Engineer",
    getDetails:function()
    {
        //console.log(this.name, this.age, this.salary, this.job)
        return `${this.name} is a ${this.job} earning ${this.salary}`
    }
}
console.log(typeof employee1) //object

//Accessing Object - Approach 1 (Using DOT Notation)
console.log(employee1.name , employee1.age , employee1.salary , employee1.job)
console.log(employee1.getDetails())

//Accessing Object - Approach 2 (Using BRACKET Notation)
console.log(employee1["name"] , employee1["age"] , employee1["salary"] , employee1["job"])
console.log(employee1["getDetails"]()) // *********

//Modify the value
console.log(employee1.job="Manager")
console.log(employee1["name"]="BNJ24")

/* 2. Inline Type Object - We also defines the Datatype of the keys (TS) 
Problem with Inline Type Object is Need to repeat structure for every Object
Here for Every Student Data we need to create structure then need to assign data
*/
let student:{
    name:string,
    age: number,
    grade: string,
    getsummary: ()=>string
} =
{
    name:"Vasu",
    age:30,
    grade:"A+",
    getsummary: function()
    {
        return `${this.name} is ${this.age} years old and scored grade ${this.grade}`
    }
}
console.log(student.getsummary())

/* 3. Using Type Alias (TS)
Allows creating a new name for an existing type
Below We Created Structure only once and using Multiple Types
*/

//Example1:
type Product={
    name: string,
    price: number,
    getInfo: ()=> string
}

let book1: Product={
    name: "Learn Java",
    price: 3000,
    getInfo: function()
    {
        return `${this.name} costs ${this.price}`
    }
}

let book2: Product={
    name: "Learn Python",
    price: 5000,
    getInfo: function()
    {
        return `${this.name} costs ${this.price}`
    }
}

let book3: Product={
    name: "Learn JavaScript",
    price: 8000,
    getInfo: function()
    {
        return `${this.name} costs ${this.price}`
    }
}

console.log(book1.getInfo())
console.log(book2.getInfo())
console.log(book3.getInfo())

//Example2: Intersection Types
type Personal={
    name: string,
    age: number
}

type Contact={
    email: string,
    phone: number
}

type Candidate = Personal & Contact & 
{
    getContactInfo:()=> string
}

let Cand: Candidate={
    name:"Scott",
    age:25,
    email:"abc@gml.com",
    phone: 9867845454,
    getContactInfo: function(){
        return `${this.name} can be contacted at ${this.phone}`
    }
}
console.log(Cand.getContactInfo())

/* 4. Using the Classes (JS ES16 / TS)
 */
class Person{
    ssn: string
    firstname: string
    lastname: string

constructor(ssn:string , firstname:string , lastname:string)
{
  this.ssn=ssn
  this.firstname=firstname
  this.lastname=lastname
}

getFullName(): string{
    return `${this.firstname} ${this.lastname}`
}

getDetails(): string{
    return `ssn: ${this.ssn} Name: ${this.getFullName()}`
}

}

//Object Creation
let person1=new Person("112113114" , "John" , "Kenedy")
console.log(person1.getDetails())

let person2=new Person("010101010" , "Ram" , "Krishna")
console.log(person2.getDetails())

let person3=new Person("989657456" , "Bheem" , "Kali")
console.log(person3.getDetails())

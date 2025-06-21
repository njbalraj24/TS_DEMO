/* Interface
 1. An Interface in Typescript is a way to define structure of an object.
 2. It tells compiler what properties and types an object should have.
 3. Its like a blueprint of an object.
 4. In Interface,  methods are always Abstract

 Abstract method: Only have signature of the method (there is no implementation)

 interface InterfaceName
 {
  Properties
  abstract methods
 }

 1. Regular Properties
 2. Optional Properties
 3. ReadOnly Properties & function types
 4. Extending interfaces
 5. Class implements interface

 */

 //Example1: Basic Interface

 interface Person
 {
    name: string
    age: number
 }

 let student: Person={
    name: "john",
    age: 30
 }

 console.log(student.name)
 console.log(student.age)

 //Example2: Optional Properties (?)
 interface Employee
 {
    id: number,
    name: string,
    department?: string //Optional Property
 }

 let emp1: Employee={
    id:101,
    name:"Peter"
 }

 let emp2: Employee={
    id:102,
    name:"Peter",
    department:"Research"
 }

 console.log(emp1.id, emp1.name, emp1.department) //101 Peter undefined
 console.log(emp2.id, emp2.name, emp2.department) //102 Peter Research

 //Example3: ReadOnly Property (readonly to prevent modification) & Function type

 interface Book
 {
    title: string
    readonly isbn: number

    display(): void //abstract method
 }

 let b1: Book={
    title: "Learn PlayWright",
    isbn: 1234567,

    display()
    {
        console.log(b1.title, b1.isbn)
    }
 }

 console.log(b1.title, b1.isbn)
 b1.display()
 console.log("After changing values.......")

 b1.title="Learn TypeScript"
 console.log("After chaning title: ", b1.title)

 //b1.isbn=45657 --> Read Only Property can't be Changed.


 //Example4: Extending Interfaces (Inheritance is applicable)

 //Parent interface
 /* interface Animal
 {
    name: string
 }

 //Child interface
 interface dog extends Animal
 {
    color: string
 }

 let mydog: dog={name:"Buddy", color:"Black"}
 console.log(mydog.name, mydog.color) */

 //Example5: 
 /* class can extends another class
    interface can extends another interface
    ** class can implements interface
  */ 
 interface Animal
 {
    name: string
    sound(): void
 }

 class Dog implements Animal
 {
    name: string //inherited from Animal
    color: string //property belongs to dog

    constructor(name: string, color: string)
    {
        this.name=name
        this.color=color

    }

    sound() {
        console.log("Barking......")
    }
 }

 let pet=new Dog("Tommy","Blue")
 console.log(pet.name)
 pet.sound()
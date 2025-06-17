/* Inheritence:
A class can reuse the properties and methods of another class.
Inheritence is a mechanism where one class (child) can inherit the properties and method of another class(Parent)
Inheritence allows you to reuse the functionality of an existing class without rewriting it.

Class A --- Properties + methods (Parent class/Base Class/Super Class)
Class B --- Properties + methods (Child Class/Derived Class/Sub Class)

Method Overriding:
A subclass/child class can provide a specific implementation of a method that is already in its superclass.
The method must have the same name, return type, and parameters.
 */

//Parent Class
class Car
{
    name: string
    color: string
    model: string

    constructor(name:string, color:string, model:string)
    {
        this.name=name
        this.color=color
        this.model=model
    }

    //Methods
    start()
    {
        console.log("Car Started...")
    }

    stop()
    {
        console.log("Car Stopped...")
    }

    displayInformation()
    {
        console.log(`Name: ${this.name}, Color: ${this.color}, Model: ${this.model}`)
    }
}

//Child Class
class Honda extends Car
{
    year: number

    //Once we did extends keyword, then in this constructor we should pass Parent class contructor PARAMETERS
    constructor(year:number,name:string, color:string, model:string)
    {
        super(name,color,model) //using super keyword, we need to invoke parent constructor
        this.year=year
    }

    //Method overriding
    start()
    {
        console.log("Honda Started...")
    }

    yom()
    {
        //console.log(`yom: ${this.year}`)
        console.log(`Name: ${this.name}, Color: ${this.color}, Model: ${this.model}, yom: ${this.year}`)
    }
}

//Child Class
class Maruthi extends Car
{
    year: number

    //Once we did extends keyword, then in this constructor we should pass Parent class contructor PARAMETERS
    constructor(year:number,name:string, color:string, model:string)
    {
        super(name,color,model) //using super keyword, we need to invoke parent constructor
        this.year=year
    }

    //Method overriding
    start()
    {
        console.log("Maruthi Started...")
    }

    yom()
    {
        //console.log(`yom: ${this.year}`)
        console.log(`Name: ${this.name}, Color: ${this.color}, Model: ${this.model}, yom: ${this.year}`)
    }

}

//Usage
//Create Honda Object
let honda=new Honda(1994,"Honda","Green","Honda City")
console.log(honda.year)
console.log(honda.name)
console.log(honda.color)
console.log(honda.model)

honda.start() //Honda Started... //Called Child class method (OVER rided)
honda.displayInformation() //Name: Honda, Color: Green, Model: Honda City.. //Parent Class
honda.stop() //Car Stopped... //Parent class
honda.yom()  //Name: Honda, Color: Green, Model: Honda City, yom: 1994 //Child Class

//Create Maruthi Object
let maruthi=new Maruthi(1990,"Maruthi","Yello","Baleno")
maruthi.start() //Child class
maruthi.displayInformation() //Name: Maruthi, Color: Yello, Model: Baleno
maruthi.stop() // Parent
maruthi.yom() //Name: Maruthi, Color: Yello, Model: Baleno, yom: 1990

//****************
console.log("Storing child class honda object into Car Properties(variables)")
console.log("Parent class variable is holding child class object")
let car:Car=new Honda(1994,"Honda","Green","Honda City") //here car type is Car

car.displayInformation() //
car.start() // Honda Started... Even though parent class having start, becuase of already overrided u get this result
car.stop() // Car Stopped... No stop in child class so got parent class implementation
//car.yom() --> NOT Accessible, belongs only to Child class
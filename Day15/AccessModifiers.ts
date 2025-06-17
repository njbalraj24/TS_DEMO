//Access Modifiers appicable for methods as well, but in most case methods should be Public

//Parent class

class Person
{

   public name: string //public property - accessible anywhere
   protected age: number //protected property - accessible within the class and its subclasses
   private ssn: number //private property - accessible only within the class

   constructor(name: string, age: number, ssn: number)
   {
      this.name=name
      this.age=age
      this.ssn=ssn
   }

   displayinfo()
   {
    console.log("Name",this.name)
    console.log("Age",this.age)
    console.log("SSN",this.ssn)
   }
}

//Child class
class Employee extends Person
{
    private employeeID: number

    constructor(name: string, age: number, ssn: number, employeeID: number)
    {
       super(name,age,ssn)
       this.employeeID=employeeID
    }

    showEMployeeDetails()
    {
        console.log(this.name)  //public - accessible
        console.log(this.age) // protected accessible
        //console.log(this.ssn) //private - Not possible
        console.log(this.employeeID) //Private - still access becuase it is inside the class
    }
}

let emp=new Employee("John",30,212121212,101)
emp.displayinfo()
emp.showEMployeeDetails()

console.log(emp.name) // accessible
//console.log(emp.age) //NOT accessible
//console.log(emp.ssn) //NOT accessible
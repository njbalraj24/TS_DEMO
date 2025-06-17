/* 
1. Class
2. Read Only Properties
3. Optional Property


4. Static Properties and Methods
  // 1) static properties/methods are common/shared across all the objects
  // 2) static properties/methods can be accessed through class name directly
  // 3) static properties/methods can be modified using any class
  // 4) We cannot use this keyword for static properties, instead we use Class Name
*/

class Student
{
    readonly studentID: number //Read Only Property (Can only be assigned once, inside constructor)
    name: string //Regular Property
    email?: string //Optional Property
    static schoolName: string='GreenWood High' //Static variable shared among all instances/objects

    //constructor 

    constructor(id:number, name:string, email?:string){
        this.studentID=id
        this.name=name
        this.email=email //If not pass any value then it will be Undefined
    }

    //Method
    displayInfo(): void{
        console.log("Student ID: ", this.studentID)
        console.log("Student Name: ", this.name)

        if(this.email)
        {
            console.log("Email: ", this.email)
        }
        else
        {
            console.log("Email is not Provided")
        }

        console.log("School Name: ",Student.schoolName) //access static property using Classname
    }
    
    static changeSchoolName(newName:string):void
    {
       Student.schoolName=newName
    }
}


//Usage
let s1=new Student(101,"John")
let s2=new Student(102,"Kenedy","abc@gmail.com")

//Display Student Info
s1.displayInfo()
s2.displayInfo()

//Try to modify the studentID of s1 object
//s1.studentID=103 //Can't assign to 'studentID' because it is read-only

//Change school name using static method
Student.changeSchoolName("Sunrise Academy")

//Display student info after changing value
s1.displayInfo()
s2.displayInfo()
//super() - used to invoke immediate parent class constructor
//super - used to invoke immediate parent class method
//super - cannot be used to invoke the parent class property (In Java, it is Possible)
//******super & Overridden - Purely related to Inheritence ********

class Parent{

    num: number=10

    constructor()
    {
        console.log("This is a Parent class contructor....")
    }

    display()
    {
        console.log("This is a Parent class method....")
    }
}

class child extends Parent
{
    num: number=20; //Overridden

    constructor()
    {
        super() //Must ne called -- invoke immediate parent class constructor
        console.log("This is a Child class contructor....")
    }

    show()
    {
        //console.log(super.num) Parents num //TS&JS doesn't support super.num to access parent class properties directly
        //like java does **********
        console.log(this.num) //20
        console.log("This is a child class SHOW method....")
    }

    //overridded method
    display()
    {
        super.display() //this will invoke parent class method..
        console.log("This is a child class DISPLAY method....")
    }
}

let c1=new child() //just with this both constructor will be invoked
c1.show()
c1.display()
//Method Overlaoding and Constructor Overlaoding in TS

class Calculator {

  constructor() //default constructor
  constructor(a: number, b: number) //Parameterized constructor

  constructor(a?: number, b?: number) {
    if (a !== undefined && b !== undefined) {
      console.log("Sum of a & b: ", (a + b))
    }
    else {
      console.log("Default constructor called.....")
    }
  }

  //Method Overloading
  add(a: number, b: number): number
  add(a: number, b: number, c: number): number

  add(a: number, b: number, c?: number): number {
    if (c !== undefined) {
      return a + b + c
    }
    return a + b
  }

}

//Usage Constructor Overloading
let Cal1 = new Calculator()
let Cal2 = new Calculator(12, 12)

//Usage Method Overloading
console.log("Adding 2 numbers: ", Cal1.add(10, 20))
console.log("Adding 3 numbers: ", Cal2.add(10, 20, 30))
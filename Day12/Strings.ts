/* string - Text value or combination of characters

1. Single quote - String Literal ('')
2. Double quote - String Literal ("")
3. backtick (``) - String template - when we try to use a string variable inside another string value ${Variable}

 */


/* //Declaration of strings
let str1:string='This is a string with Single Quote'
let str2:string="This is a string with Double Quote"
let str3:string=`This is a string with Back tick`

console.log(str1)
console.log(str2)
console.log(str3) */

/* When to use Back tick ``
 
let num:number=10
console.log("Number is: ",num) // Valid
console.log("Number is: ,num") // NOT Valid
console.log("Number is: ,${num}") // NOT Valid
console.log(`Number is: ,${num}`) // Valid
*/

//String methods
let str:string="Hello, TypeScript!"

/* 1. length - find the length of a string (How many number of characters)
length is an attribute NOT a METHOD here */
console.log("Length of string is: ",str.length)

/* 2. toUpperCase() and toLowerCase() */
console.log("Upper case",str.toUpperCase())
console.log("Lower case",str.toLowerCase())

/* 3. charAt(index) and indexof(string) */
console.log("Character at 4th place",str.charAt(4))
console.log("Index of type",str.indexOf("Script"))

/* 4. substring(StartIndex, EndIndex-1) 
Ending index is exlusive
*/
console.log(str.substring(0,5))

/* 5. includes() - returns true or false (boolean)
String value is case sensitive
*/
console.log(str.includes("abc"))
console.log(str.includes("Typ"))
console.log(str.includes("HELLO"))

/* 6. startsWith() and endsWith() --> returns boolean value(true/false)*/
console.log(str.startsWith("He"))
console.log(str.endsWith("!"))

/* 7. replace()
let str:string="Hello, TypeScript!"
 */
console.log("Replaced string:",str.replace("TypeScript","WORLD"))

/* 8. split() - breaks string into multiple parts based on DELIMETER, returns an ARRAY */
let words1=console.log("After spliting words: ",str.split(" "))

let mystring:string="abc@gmail.com"
console.log("After split:",mystring.split("."))

/* 9. trim(), trimStart(), trimEnd()
//trim() - removes spaces in the starting and End
 */
let new1="   Welcome to TS   "
console.log(new1.trim())
console.log(new1.trimStart())
console.log(new1.trimEnd())

/* 10. concat() */
let str1="welcome"
let str2=" to TS"
console.log("After Concatination: ",str1.concat(str2))
console.log("After Concatination: ",str1+str2) // Alternative but NOT RECOMMENDED

console.log("Hello".concat(" Balraj"))

//String IMMUTABILITY

let num:number=10
let res=num+5
console.log(res) //15
console.log(num) //10 - here main value is NOT CHANGED, this is called IMMUTABILITY

//Same applicable to String as well

str1="welcome"
let modifiedString=str1.concat("to TS")
console.log(modifiedString)
console.log(str1) //CAN'T ABLE TO CAHNGE ORIGINAL VALUES

/* MultipeLine String = Only possible using Backtick symbol*/
let multiline:string=`Welcome
                to TS`
console.log(multiline)
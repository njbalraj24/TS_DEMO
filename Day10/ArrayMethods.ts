let numbers: number[]=[1,2,3,4,5]
let fruits: string[]=["apple","banana","orange","mango"]

/* console.log("Numbers array",numbers)
console.log("Fruits array",fruits)

//Length - attribute (Not a method)
console.log("Size of numbers array",numbers.length)
console.log("Size of fruits array",fruits.length) */

/* 1. push() - Adds single/multiple elements to the end of an array
Syntax: array.push(element1, --- elementN)
 
numbers.push(8)
numbers.push(7,9)
console.log("After push()",numbers)
*/

/* 2. pop() - Removes the last element from an Array
Syntax: array.pop()
 
let lastFruit=fruits.pop()
console.log("After pop()",fruits)
console.log("Removed fruit is", lastFruit)
*/

/* 3. shift() - Removes the first element from an array
Syntax: array.shift()
 
let firstNumberRemove=numbers.shift()
console.log("After shift()",numbers)
console.log("Removed Number is: ", firstNumberRemove)
*/

/* 4. unshift() - Adds single/multiple elements to the beginning of an array
Syntax: array.unshift(element1, --- elementN)

fruits.unshift("kiwi","guava")
console.log("After unshift()",fruits)
 */

/* 5. concat() - Combines two or more arrays of same type
Syntax: array.concat(array1, --- arrayN)
 
let combinedArray=numbers.concat([6,8],[7,9],[0,1])
console.log("Concatenated Array:",combinedArray)
 */

/* 6. slice() - Extracts a section of an array
Starting index starts from Zero
Ending index is will be exclusive.
Syntax: array.slice(start,end)
 
//let fruits: string[]=["apple","banana","orange","mango"]
let extractedArray=fruits.slice(1,4)
console.log("After slice()",extractedArray) // [ 'banana', 'orange', 'mango' ]

let extractedArray=fruits.slice(1,1)
console.log("After slice()",extractedArray) // [] empty means no values
*/

/* 7.splice() - Adds/removes elements from an array(From everywhere)
Syntax: array.splice(Start,deletecount, item1,---itemN)
 
//let fruits: string[]=["apple","banana","orange","mango"]
let removedElemets=fruits.splice(1,2)
console.log("After splice(1,2)",fruits) //[ 'apple', 'mango' ]
console.log("Removed Elements", removedElemets) //[ 'banana', 'orange' ]


//Ex2
fruits.splice(1,0,'pineapple','grape')
console.log("After splice(1,0,'pineapple','grape'):",fruits) //[ 'apple', 'pineapple', 'grape', 'banana', 'orange', 'mango' ]

//Ex3
fruits.splice(1,2,'mango','cherry')
console.log("After splice(1,2,'mango','cherry'):",fruits)
*/

/* 8. indexOf() - Finds the index of an element, If element not found then return -1 
Syntax: array.indexOf(searchElement) OR array.indexOf(searchElement, Starting Index)
 
//Ex1
let bananaIndex=fruits.indexOf('banana')
console.log("banana index is:",bananaIndex) //1

//Ex2
let PapayaIndex=fruits.indexOf('Papaya')
console.log("banana index is:",PapayaIndex) //-1

//Ex3
bananaIndex=fruits.indexOf('banana',2)
console.log("banana index is:",bananaIndex) //-1

//Ex4
bananaIndex=fruits.indexOf('banana',1)
console.log("banana index is:",bananaIndex) //1
*/

/* //9. includes() - Check if an element exists
Returns True or False
Syntax: array.includes(searchElement, fromIndex) */
 

/* let isAppleExists=fruits.includes('apple')
console.log("Does fruits includes apple:",isAppleExists)

let isGrapesExists=fruits.includes('grapes')
console.log("Does fruits includes Grapes:",isGrapesExists) */


/* 10. toString() - Converts array to string
Syntax: array.toString()
 */
let numbersString=numbers.toString()
console.log("Converted Array to String: ",numbersString)

let myArray:string[]=['w','e','l','c','o','m','e']
console.log("Original myArray is:",myArray)
let myArrayToString=myArray.toString()
console.log("Converted myArray to String: ",myArrayToString)

// ======= forEach(), map(), filter(), reduce(), some(), every() =======

/* 1. forEach() - Executes a function once for each array element
It take function as a parameter

Syntax: array.forEach(function(currentValue, index, array){})

/* currentValue - The current element being processed in an array
index(optional) - The index of the current element being processed in the array
array(optional) - The array current element belongs to */
 

//Ex1: Get index of all the fruits along with value.
let fruits: string[]=['apple','banana','orange','mango','kiwi']

console.log("Printing fruits along with index using for loop")
for(let i in fruits)
{
    console.log(i,fruits[i])
}

console.log("Printing fruits along with index using forEach loop")  
//Using Anonymous function
fruits.forEach(function(element,index)
{
    console.log(`${index}`,`${element}`)
})

//Using Arrow function
fruits.forEach((element,index)=>
{
    //console.log(`${index}`,`${element}`)
    console.log(index,element)
})

//Ex2
fruits.forEach((element)=>
    {
        console.log(element.toUpperCase())
    })

/* 2. map() - Creates a new array with the result of calling the function on every element of an array
It takes function as a parameter
Returns the same number of elements that we have in original array.

Syntax: array.map(function(currentValue, index, array){})
 

//Ex1: Get square of all the numbers in an array. Ex: [1,2,3] then result should be [1,4,9]
let numbers:number[]=[1,2,3,4,5]

let squaredNumbers=numbers.map(function(element){
    return(element * element)
})
console.log("Sqaured Numbers: ",squaredNumbers)
console.log("Original Array",numbers)

//Ex2: Double the each number [1,2,3,4,5] --> [2,4,6,8,10]
let doubleNumber=numbers.map((element)=>{
    return(element+element)
})
console.log("DoubleNumber:",doubleNumber)


/* 3. filter() - Creates a new array with all the elements that pass/satsify the function
It takes function as a parameter
Returns either same or fewer number of elements compared to original array
The .filter() method expects a function that returns a boolean — i.e., it keeps only the elements for which the function returns true.

Syntax: array.filter(function(currentValue, index, array){})
 */
let numbers:number[]=[1,2,3,4,5]
/* let evennumbers=numbers.filter((num)=>{
    return(num%2==0)
}) */

let evennumbers=numbers.filter((num)=>num%2==0)
console.log(evennumbers)

//Ex2: Get only numbers greater than 3
let Greaterthan3Numbers=numbers.filter((num)=>num>3)
console.log(Greaterthan3Numbers)

/* 4. reduce() - Applies a function on every element of an array and returns a single value.
Syntax: array.reduce(function(accumulator, currentValue, index, array){})

accumulator - The accumulated value from previous iteration
currentvalue - The current element being processed
 */

//Ex1: Get the sum of all the elements in an array
let ReduceResult=numbers.reduce((total,num)=>{ //by default "total" value here is ZERO
    return (total+num)
},0) //you need to assign "total" value here if you want to add other than default value
console.log(ReduceResult)

let ReduceResult1=numbers.reduce((total,num)=>(total+num),2)
console.log(ReduceResult1)

/* 5. some() - Checks if any element satisfies a condition
Returns true if atleast one element passes the condition, else false
Syntax: array.some(function(currentValue, index, array){})
 */

//Ex1: Check Array contains Negative values
let hasNegative=numbers.some((num)=>num<0)
console.log("Does Array contains Negatives: ",hasNegative)

//Ex2: Check Array contains Negative values
let hasPositive=numbers.some((num)=>num>0)
console.log("Does Array contains Positives: ",hasPositive)

/* 6. every() - Checks if all element satisfies a condition
Returns true if all element passes the condition, else false
Syntax: array.every(function(currentValue, index, array){})
 */

//Ex1: 
let allEven=numbers.every((num)=>num%2==0)
console.log("Are all numbers are Even?",allEven)

//Ex2: 
let allGreaterthanOne=numbers.every((num)=>num>=1)
console.log("Are all numbers are Greater than One?",allGreaterthanOne)
/* Arrays in TypeScript
- An array is a special type of variable that stores multiple values.
- The values can be of the same data type or different data types.
- Arrays are declared using '[]' or generic 'Array<T>' type.
- Indexing starts from 0
- Arrays are ordered collection of elements.
 */

//Approach 1: Using leteral
/* let names:string[]=[] //Declaring an Array

//Initialization/assigning values
names[0]='Balu'
names[1]='Vasu'
names[2]='Kiru'
names[3]='Vinu' 

let names:string[]=["Balu","Vasu","Kiru","Vinu"] //Declaring + Initialization

console.log(names)*/

/* //Approach 2: Using generic Array<T> type
let empNames: Array<string>=['Yes','No','MayBe','OK']
let empIds: Array<number>=[24,34,44,54]
let data: Array<string | number>=['Zzz',24,33,'Okkk']
let mixedData: Array<any> = [null,true,24,'ok',"456","BNJ"]

console.log(empNames)
console.log(empNames[3])
console.log(empIds)
console.log(data)
console.log(mixedData) */

//Example 1: Iterating over an array using traditional for loop..

/* let names1:string[]=["Balu","Vasu","Kiru","Vinu"]

console.log('Size of an Array',names1.length)

for(let i=0; i<names1.length; i++)
{
    console.log(names1[i])
} */

/* //Example 2: Iterating using 'for...in' loop (indexes)
let empIds1: Array<number>=[24,34,44,54]

for(let i in empIds1)
{
    console.log(empIds1[i])
} */

//Example 3: Iterating using 'for...of' loop (values)
/* let mixedData1: Array<any> = [null,true,24,'ok',"456","BNJ"]

for(let value of mixedData1) //value is NOT a keyword here
{
    console.log(value)
}

let data1: Array<string | number>=['Zzz',24,33,'Okkk']

for(let print of data1)
{
    console.log(print)
}
 */
//Example 4: Passing an array to the function

//Search an element in an Array using function
/* function search(ele:number, arr:number[]):boolean
{
    for(let i=0;i<arr.length;i++)
    {
      if(arr[i]==ele)
      {
        return true
      }
    }
    return false
}

let arr:number[]=[10,20,24,30,50]
console.log(search(24,arr))
console.log(search(114,arr)) */

//Example 5: A function takes an Array and return an array
function capitalizewords(arr:string[]):string[]
{
  let result:string[]=[] 
  for(let i=0;i<arr.length;i++)
  {
    result[i]=arr[i].toUpperCase()
  }
  return result
}

let words:string[]=["hello","bye","typescript","okok"]
console.log(capitalizewords(words))

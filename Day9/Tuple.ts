/* 
Tuples in typescript
A tuple is a fixed length array where each element has a specific type.
It helps in storing multiple fields of different data types together.
 */

//Example 1: tuple with 2 values of string & number
/* let person:[string, number]=["BNJ",24]
console.log(person[0])
console.log(person[1])

console.log(person) */

//Example 2: tuple with multiple values
let user:[number,string,boolean,number,string]=[10,"ABC",false,24,"XYZ"]
console.log(user)

/* //Example 3: Iterating over a tuple using traditional for loop
for(let i=0;i<user.length;i++)
{
    console.log(user[i])
} */

//Example 4: Iterating using a 'for...in' loop (index based iteration)
/* for(let i in user)
{
    console.log(user[i])
} */

//Example 5: Iterating using a 'for..of' loop (value based iteration)
/* for(let data of user)
{
    console.log(data)
} */

//Example 6: Tuple Array(Array of tuples)
let students:[string,number][]=[['Vasu',1],['Balu',2],['Kiru',3],['Vinu',4]]

console.log(students.length)

console.log(students[0])
console.log(students)

//How to extract value 1 from above
let tp=students[0]
console.log(tp[1])
/* function getFirstElement(array:(number | string)[])
{
    return array[0];
}

const numbers = [1,2,3];
const firstNum = getFirstElement(numbers);
console.log(firstNum);

const string = ["abc" , "xyz", "pqr"];
const firstStrg = getFirstElement(string);
console.log(firstStrg); */

/* 
In the above example in order to get a number or string value in a specific position ( array[0] ), we need to 
mention the return types also explicitly like (number | string)[]
*/

//Generic resolves above issue:
//Here 'ElementType' is Generic
function getFirstElement<ElementType>(array:ElementType[])
{
    return array[0];
}

const numbers = [1,2,3];
const firstNum = getFirstElement(numbers); //hover here
console.log(firstNum);

const string = ["abc" , "xyz", "pqr"];
const firstStrg = getFirstElement(string); //hover here
console.log(firstStrg); 
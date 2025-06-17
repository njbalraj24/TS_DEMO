//A callback function: A function passed as an argument to another function and executed later.

//Example 1

//Function that takes callback function as a Parameter
function greet(name:string,CallBack:(message:string)=>void) //CallBack is not a Keyword here
{
    console.log(name)
    CallBack("Hello") //execute the callback function
}


//CallBack function
function showMessage(message:string)
{
    console.log(message)
}
//Calling the function by passing the callback function
greet("Balraj",showMessage)


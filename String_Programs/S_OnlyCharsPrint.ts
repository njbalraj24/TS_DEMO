let str = "Jane628Dane891";

function onlyCharacters(str: string) {
    return str.match(/[a-zA-Z]+/g);
}

console.log(onlyCharacters('Jane628Dane891'));  // This will print the result to the console
//["Jane", "Dane"]
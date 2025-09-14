const fruits: string[] = ['Apple', 'Banana', 'Orange'];

// Join elements with comma (default)
const joinedString1 = fruits.join();
console.log(joinedString1); // Output: "Apple,Banana,Orange"

// Join elements with custom separator
const joinedString2 = fruits.join(' | ');
console.log(joinedString2); // Output: "Apple | Banana | Orange"

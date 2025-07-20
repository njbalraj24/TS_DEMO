function removeFalsyValues(arr: any[]): any[] {
    return arr.filter(Boolean);
}

// Example usage
const mixedArray = [0, 1, false, 2, '', 3, null, undefined, NaN, 4, 'hello'];

const cleanedArray = removeFalsyValues(mixedArray);

console.log(cleanedArray); // [1, 2, 3, 4, "hello"]

/* 
filter(Boolean)
Array.prototype.filter() keeps elements that return truthy when passed to the callback.
Boolean is a built-in function that converts any value to its boolean form:

Truthy: values like 1, 'text', {}, []
Falsy: false, 0, '', null, undefined, NaN

So filter(Boolean) automatically removes all falsy values.
*/
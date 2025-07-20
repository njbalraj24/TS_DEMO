function countWordsInString(str: string): number
{
    let trimmed = str.trim();

    if(trimmed === "") return 0;

    return trimmed.split(/\s+/).length;
}
console.log(countWordsInString("   Hello world! This is TypeScript.   ")); //5

/* 
Explanation:

trim() removes extra whitespace from start and end.

if (trimmed === "") return 0; Checks if the trimmed string is empty.
This prevents calling .split() on an empty string, which would return [""] (1 element).
If the input is just spaces, this condition ensures the word count is 0.

split(/\s+/) splits string using one or more spaces (regular expression).
Handles multiple spaces between words too.
*/
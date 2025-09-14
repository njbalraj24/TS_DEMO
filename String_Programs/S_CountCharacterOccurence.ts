function countCharacterOccurrence(str: string, char: string): number {
  const totalCount = str.length;

  const countAfterReplace = str.replaceAll(char, '').length;

  const count = totalCount - countAfterReplace;

  return count;
}

console.log(countCharacterOccurrence('Java Programming Java oops','a'))

// Modified Version:

function countCharOccur(str: string, char: string): number {
  if (char.length !== 1) {
    throw new Error("Please provide a single character.");
  }
  
  return str.split(char).length - 1;
}

console.log(countCharOccur('TypeScript is a Superbb language', 'a')); // → 3

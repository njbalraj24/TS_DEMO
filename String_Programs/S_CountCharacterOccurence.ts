function countCharacterOccurrence(str: string, char: string): number {
  const totalCount = str.length;

  const countAfterReplace = str.replaceAll(char, '').length;

  const count = totalCount - countAfterReplace;

  return count;
}

console.log(countCharacterOccurrence('Java Programming Java oops','a'))
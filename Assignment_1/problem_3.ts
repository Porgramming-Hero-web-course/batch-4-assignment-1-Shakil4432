const countWordOccurrences = (stringArray: string, word: string): number => {
  let wordCount = 0;
  let splitArray: string[] = stringArray.split(" ");
  for (let i = 0; i < splitArray.length; i++) {
    console.log(splitArray[i]);
    if (splitArray[i].toLowerCase() === word.toLowerCase()) {
      wordCount = wordCount + 1;
    }
  }

  return wordCount;
};

console.log(
  countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript")
);

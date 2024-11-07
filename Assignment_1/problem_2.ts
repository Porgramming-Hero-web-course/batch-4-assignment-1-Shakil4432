const removeDuplicates = (number: number[]): number[] => {
  const uniqueNumber: number[] = [];
  for (let i = 0; i < number.length; i++) {
    if (!uniqueNumber.includes(number[i])) {
      uniqueNumber.push(number[i]);
    }
  }

  return uniqueNumber;
};

console.log(removeDuplicates([10, 10, 20, 50, 50, 20, 30, 20, 30]));

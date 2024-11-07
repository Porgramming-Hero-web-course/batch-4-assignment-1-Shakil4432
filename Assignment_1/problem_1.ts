let sum: number = 0;
const sumArray = (number: number[]): number => {
  for (let i = 0; i < number.length; i++) {
    sum += number[i];
  }

  return sum;
};

console.log(sumArray([30, 40, 50]));

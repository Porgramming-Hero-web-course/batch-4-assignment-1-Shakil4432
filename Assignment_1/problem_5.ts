type GetProperty = <X, Y extends keyof X>(obj: X, key: Y) => X[Y];

const getProperty: GetProperty = (obj, key) => {
  return obj[key];
};

const person = getProperty({ name: "Shakil", age: 25, salary: 46 }, "age");
console.log(person);

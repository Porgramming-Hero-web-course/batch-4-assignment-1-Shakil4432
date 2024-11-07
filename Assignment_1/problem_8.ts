type ValidateKeys = <T extends object>(obj: T, keys: (keyof T)[]) => boolean;

const validateKeys: ValidateKeys = (obj, keys) => {
  for (let i = 0; i < keys.length; i++) {
    if (!(keys[i] in obj)) {
      return false;
    }
  }

  return true;
};

console.log(
  validateKeys({ name: "Shakil", age: 24, email: "shakil3354@gmail.com" }, [
    "name",
    "age",
    "email",
  ])
);

Union Type:
Union type is a type used to hold different types of value in a variable.

For Example:
When we declare a variable that can be either a string or a number, we use a union type.

let value : string | number;

number = 2937474;
number = "353433"

significance:

We can handle this by restricting the union type to specific types, ensuring better control over the allowed values.

Intersection:
An intersection type is a combination of multiple types to form one type.

For Example:
We use intersection when we need to create an object that meets one or more conditions.

interface Name {
name:string;
}

interface Salary{
salary:number;
}

type Employee = Name & Salary;

const employee:Employee = {
name:"Shakil";
salary:45000;
}

significance:

Intersection type helps to combine one or more types.
Intersection type is commonly used in object oriented programming(OOP)

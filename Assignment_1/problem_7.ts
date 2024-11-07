class Car {
  constructor(public make: string, public model: string, public year: number) {}
  getCarAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.year;
  }
}

const car = new Car("Toyota", "Camry", 2010);
const carAge = car.getCarAge();
console.log(carAge);

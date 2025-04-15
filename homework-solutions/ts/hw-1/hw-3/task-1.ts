// 1. Создайте интерфейс IVehicle:
//   Методы:
//     - getDetails(): string — возвращает информацию о транспортном средстве.
//     - start(): string — возвращает строку "The vehicle is starting".

interface IVehicle {
  getDetails(): string;
  start(): string;
}

// 2. Создайте абстрактный класс Vehicle, который имплементирует IVehicle:
//   Реализуйте конструктор с полями:
//     - make (строка)
//     - model (строка)
//   Добавьте методы:
//     - start, возвращающего строку: "The vehicle {make} {model} is starting.".
//     - Абстрактный метод getDetails, который нужно реализовать в классах-наследниках.

abstract class Vehicle implements IVehicle {
  constructor(
    public make: string,
    public model: string,
  ) {
    this.make = make;
    this.model = model;
  }

  start(): string {
    return `The vehicle ${this.make} ${this.model} is starting.`;
  }

  abstract getDetails(): string;
}

// 3. Создайте класс Car, который наследует Vehicle:
//     - Добавляет поле year (число).
//     - Реализует метода getDetails, возвращающего строку: "{make} {model}, {year}".
// 4. Создайте объект класса Car и проверьте работоспособность

class Car extends Vehicle {
  public year: number;

  constructor(make: string, model: string, year: number) {
    super(make, model);
    this.year = year;
  }

  getDetails(): string {
    return `${this.make} ${this.model} ${this.year}`;
  }
}

const Mers = new Car('Mers', '56abc', 2017);
console.log(Mers.start());
console.log(Mers.getDetails());

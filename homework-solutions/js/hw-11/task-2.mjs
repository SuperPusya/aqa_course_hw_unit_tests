class Employee {
  #salary;

  constructor(firstName, lastName, profession, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.profession = profession;
    this.salary = salary;
  }

  get salary() {
    return this.#salary;
  }

  set salary(value) {
    if (typeof value !== 'number' || isNaN(value) || value <= 0 || value >= 10000) {
      throw new Error('Salary must be a number between 0 and 10000');
    }
    this.#salary = value;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    if (typeof value !== 'string' || value.length < 2 || value.length > 50 || !this.isLatinLetters(value, false)) {
      throw new Error('firstName must be a string of 2 to 50 Latin letters');
    }
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    if (typeof value !== 'string' || value.length < 2 || value.length > 50 || !this.isLatinLetters(value, false)) {
      throw new Error('lastName must be a string of 2 to 50 Latin letters');
    }
    this._lastName = value;
  }

  get profession() {
    return this._profession;
  }

  set profession(value) {
    if (typeof value !== 'string' || value.trim() === '' || !this.isLatinLetters(value, true)) {
      throw new Error('profession must be a non-empty string of Latin letters and spaces');
    }
    this._profession = value;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  isLatinLetters(str, allowSpaces = false) {
    for (let i = 0; i < str.length; i++) {
      const charCode = str.charCodeAt(i);
      if (
        !(charCode >= 65 && charCode <= 90) &&
        !(charCode >= 97 && charCode <= 122) &&
        !(allowSpaces && charCode === 32)
      ) {
        return false;
      }
    }
    return true;
  }
}

class Company {
  #employees;

  constructor(title, phone, address) {
    this.title = title;
    this.phone = phone;
    this.address = address;
    this.#employees = [];
  }

  get title() {
    return this._title;
  }

  set title(value) {
    if (typeof value !== 'string' || value.trim() === '') {
      throw new Error('title must be a non-empty string');
    }
    this._title = value;
  }

  get phone() {
    return this._phone;
  }

  set phone(value) {
    this._phone = value;
  }

  get address() {
    return this._address;
  }

  set address(value) {
    if (typeof value !== 'string' || value.trim() === '') {
      throw new Error('address must be a non-empty string');
    }
    this._address = value;
  }

  addEmployee(employee) {
    if (!(employee instanceof Employee)) {
      throw new Error('employee must be an instance of Employee');
    }
    this.#employees.push(employee);
  }

  getEmployees() {
    return this.#employees;
  }

  getInfo() {
    return `Компания: ${this.title}\nАдрес: ${this.address}\nКоличество сотрудников: ${this.#employees.length}`;
  }

  findEmployeeByName(firstName) {
    const employee = this.#employees.find((emp) => emp.firstName === firstName);
    if (!employee) {
      throw new Error(`Employee with firstName "${firstName}" not found`);
    }
    return employee;
  }

  removeEmployee(firstName) {
    const index = this.#getEmployeeIndex(firstName);
    if (index === -1) {
      throw new Error(`Employee with firstName "${firstName}" not found`);
    }
    this.#employees.splice(index, 1);
  }

  #getEmployeeIndex(firstName) {
    return this.#employees.findIndex((emp) => emp.firstName === firstName);
  }

  getTotalSalary() {
    return this.#employees.reduce((total, emp) => total + emp.salary, 0);
  }
}

const emp1 = new Employee('John', 'Doe', 'Software Developer', 3000);
const emp2 = new Employee('Jane', 'Smith', 'Project Manager', 5000);
const emp3 = new Employee('Mark', 'Brown', 'UI Designer', 4000);

const company = new Company('Tech Corp', 123456, 'Main Street');
company.addEmployee(emp1);
company.addEmployee(emp2);
company.addEmployee(emp3);

console.log(company.getTotalSalary());
console.log(company.findEmployeeByName('Jane'));
company.removeEmployee('John');
console.log(company.getEmployees());

export { Employee, Company };

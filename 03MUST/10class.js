class User {
    constructor(name){
        this.name = name;
    }
    sayHello(){
        return `Hello, my name is ${this.name}`;
    }
}

let user = new User('John');

console.log(user.sayHello());


class Employee extends User {
    constructor(name, salary){
        super(name);
        this.salary = salary;
    }
    raiseSalary(){
        this.salary += 1000;
        return this.salary;
    }
}

let employee = new Employee('John', 2000);
console.log(employee);
employee.raiseSalary();
console.log(employee);
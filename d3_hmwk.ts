// 1. Given the data below, define a type alias for representing users.

type People = {
    name: string,
    age: number,
    company?: string
}

let users = [  
    {
        name:'Shoha Tsuchida',
        age:99,
        company:'Coding Temple'
    },  
    {
        name:'Dylan Katina',
        age:99
    }
];

// 2. Define a type for representing the days of week. Valid values are “Monday”, “Tuesday”, etc.

type Week = {
    days: string[]
}

const weekdays: Week = {
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',]
}
const weekend: Week = {
    days: ['Satruday', 'Sunday']
}


// 3. Given the Person class below, create a getter for getting the full name of a person.

class Person {
    constructor(
        public firstName:string, 
        public lastName:string) {}

        printInfo = ():number | string => {
            return `${this.firstName}-${this.lastName}`
        }
        
    }
    
    
    
    // 4. Create a new class called "Employee" that extends "Person" and adds a new property called salary. 
    
class Employee extends Person {
    // salary: number;
        
    constructor(
        public firstName: string, 
        public lastName: string, 
        protected _salary: number) {
                
        super(firstName, lastName);
        this._salary = _salary;
                
        
    }

    printInfo = ():number | string => {
        return `${this._salary}-${this.firstName}-${this.lastName}`
    }
}
        
let employee2 = new Employee('John','Doe', 5000);
console.log(employee2.printInfo())

// 5. Given the data below, define an interface for representing employees:
// HINT: You'll need 2 interfaces.
interface employeeInfo {

}



let employee = {
    name:'Christian Askew',
    salary:1_000_000,
    address:{
        street:'Thieves st',
        city:'Seattle',
        zipCode: 98101
    }
};
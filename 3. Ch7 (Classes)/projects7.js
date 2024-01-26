

// // // //                 /*  READY FOR REVIEW */



// // // // // // // //CHAPTER PROJECTS
// // // // // // // //EMPLOYEE TRACKING APP
// class Employee {
// constructor(firstname, lastname, yearsEmployed) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.yearsEmployed = yearsEmployed;
// }
// }

// const p1 = new Employee("Bhabha", "September", "15");
// const p2 = new Employee("Tracy", "September", "30");
// const p3 = new Employee("Akhona", "September", "2");
// const employees = [p1, p2, p3];

// Employee.prototype.employeeDetails = function() {
//     return this.firstname + " " + this.lastname + " has been under our employment for " + this.yearsEmployed + " years. ";
// }


// employees.forEach((p) => {
//     console.log(p.employeeDetails());
// });





// // // // // // //MENU ITEMS PRICE CALCULATOR
class Menu {
    #special1 = 10;  // "#" creates private field declarations
    #special2 = 5; 
    constructor(qty1, qty2) {
        this.qty1 = qty1;
        this.qty2 = qty2;
    }
    calcTot() {
        return (this.#special1 * this.qty1) + (this.#special2 * this.qty2);
    }
    get total() {
        return this.calcTot();
    }
}

const order1 = new Menu(2, 0);
const order2 = new Menu(0, 2);
const order3 = new Menu(10, 500);

console.log("Order 1 = R" + order1.total);
console.log("Order 2 = R" + order2.total);
console.log("Order 3 = R" + order3.total);







// // // // // //SELF CHECK QUIZ
// // // // // //1. class

// // // // // //2. 
// // // // // class Person {
// // // // // constructor(firstname, lastname) {
// // // // //     this.firstname = firstname;
// // // // //     this.lastname = lastname;
// // // // // }
// // // // // }



// // // // //3. Inheritance

// // // // //4. 
// // // // /*
// // // // CONSTRUCTOR METHOD:
// // // // ->Gets executed automatically when new object is created
// // // // ->Is added at the beginning
// // // // ->Used to initialize object properties
// // // // ->Cannot be used when you have multiple values


// // // // //5. Answer = B
// // // // function Person(first,last) {
// // // // this.first = first;
// // // // this.last = last;
// // // // }
// // // // Person.prototype.getName = function getName() {
// // // // return this.first + " " + this.last;                // What should go here: A, B, or C?
// // // // };                                          
// // // // const friend1 = new Person("Laurence", "Svekis");
// // // // console.log(friend1.getName());

// // // // */
// // // //  // // // // // // // //CLASSES & OBJECTS
// // // //  // // // // // // // let dog = { 
// // // //  // // // // // // // dogName: "JavaScript",
// // // //  // // // // // // // weight: 2.4,
// // // //  // // // // // // // color: "brown",
// // // //  // // // // // // // breed: "chihuahua"
// // // //  // // // // // // // };

// // // //  // // // // // // // class ClassName {
// // // //  // // // // // // //     constructor(prop1, prop2) {
// // // //  // // // // // // //     this.prop1 = prop1; //Property of class "ClassName"
// // // //  // // // // // // //     this.prop2 = prop2;  //Property of class "ClassName"
// // // //  // // // // // // // }
// // // //  // // // // // // // }
// // // //  // // // // // // // let obj = new ClassName("arg1", "arg2");  //Object variable calls new instance of class "ClassName"
// // // //  // // // // // // // console.log(obj);


// // // //  // // // // // // // function Dog(dogName, weight, color, breed) {
// // // //  // // // // // // //     this.dogName = dogName;
// // // //  // // // // // // //     this.weight = weight;
// // // //  // // // // // // //     this.color = color;
// // // //  // // // // // // //     this.breed = breed;
// // // //  // // // // // // //     }
// // // //  // // // // // // //     let dog = new Dog("Jacky", 30, "brown", "labrador");
// // // //  // // // // // // //     console.log(dog);

// // // //  // // // // // //     class Dog {
// // // //  // // // // // //         constructor(dogName, weight, color, breed) {
// // // //  // // // // // //         this.dogName = dogName;
// // // //  // // // // // //         this.weight = weight;
// // // //  // // // // // //         this.color = color;
// // // //  // // // // // //         this.breed = breed;
// // // //  // // // // // //         }
// // // //  // // // // // //         }
// // // //  // // // // // //         let dog = new Dog("JavaScript", 2.4, "brown", "chihuahua");
// // // //  // // // // // //         console.log(dog);

// // // //  // // // // // //         console.log(dog.dogName, "is a", dog.breed, "and weighs", dog.weight, "kg.");



// // // //  // // // // // //CLASSES
// // // //  // // // // // //a) CONSTRUCTOR
// // // //  // // // // // // class Person {
// // // //  // // // // // //     constructor(firstname, lastname) {
// // // //  // // // // // //     this.firstname = firstname;
// // // //  // // // // // //     this.lastname = lastname;
// // // //  // // // // // //     }
// // // //  // // // // // //     }
// // // //  // // // // // //     let p1 = new Person("Maaike", "van Putten");

// // // //  // // // // // //     console.log("Hi", p1.firstname);


// // // //  // // // // // //     let p = new Person("Bhabha");  //Can create class without ALL properties (Remainders are logged "Undefined")
// // // //  // // // // // //     console.log("Hi", p.firstname);

// // // //  // // // // //     class Person {
// // // //  // // // // //         constructor(firstname, lastname = "Doe") {   //Can specify default property values 
// // // //  // // // // //         this.firstname = firstname;
// // // //  // // // // //         this.lastname = lastname;
// // // //  // // // // //         }
// // // //  // // // // //     }
// // // //  // // // // //     let p2 = new Person("Tracy");
// // // //  // // // // //     console.log("Ola" + p2);



// // // //  // // // // /*  PRACTICE EXERCISE 7.1 */
// // // //  // // // // class Person {
// // // //  // // // //     constructor(firstname, lastname) {
// // // //  // // // //     this.firstname = firstname;
// // // //  // // // //     this.lastname = lastname;
// // // //  // // // //     }
// // // //  // // // // }
// // // //  // // // // let myFriend1 = new Person("Anita", "Swanepoel");
// // // //  // // // // let myFriend2 = new Person("John", "Davids");
// // // //  // // // // console.log(myFriend1);
// // // //  // // // // console.log(myFriend2);



// // // //  // // // //METHODS
// // // //  // // // class Person {
// // // //  // // //     constructor(firstname, lastname) {
// // // //  // // //     this.firstname = firstname;
// // // //  // // //     this.lastname = lastname;
// // // //  // // //     }
// // // //  // // //     greet() {
// // // //  // // //     console.log("Hi there! I'm " + this.firstname);
// // // //  // // //     }
// // // //  // // //     }

// // // //  // // // let p1 = new Person("Maaike", "van Putten");
// // // //  // // // p1.greet();



// // // //  // class Person {
// // // //  //     constructor(firstname, lastname) {
// // // //  //     this.firstname = firstname;
// // // //  //     this.lastname = lastname;
// // // //  //     }
// // // //  //     greet() {
// // // //  //     console.log("Hi there!");
// // // //  //     }
// // // //  //     compliment(name, object) {
// // // //  //     return "That's a wonderful " + object + ", " + name;
// // // //  //     }
// // // //  //     }
// // // //  // let p = new Person("Bhabha", "September");
// // // //  // console.log(p);

// // // //  // let compliment = p.compliment("Maggy", "hat");
// // // //  // console.log(p + compliment);



// // // //  // // class Dog {
// // // //  // //     constructor(dogName, weight, color, breed) {
// // // //  // //     this.dogName = dogName;
// // // //  // //     this.weight = weight;
// // // //  // //     this.color = color;
// // // //  // //     this.breed = breed;
// // // //  // //     }
// // // //  // //     displayAnimal() {
// // // //  // //         console.log("This dog matches your description: " + this.dogName);
// // // //  // //     }
// // // //  // //     }

// // // //  // //     let dog = new Dog("JavaScript", 2.4, "brown", "chihuahua");
// // // //  // //     dog.displayAnimal();

// // // //  // //     console.log(dog.dogName + " is a " + dog.breed + " and weighs " + dog.weight + "kg.");



// // // //  // // /*  PRACTICE EXERCISE 7.2 */
// // // //  // // class Person {
// // // //  // //     constructor(firstname, lastname) {
// // // //  // //         this.firstname = firstname;
// // // //  // //         this.lastname = lastname;
// // // //  // //     }
// // // //  // //     fullname() {
// // // //  // //         return this.firstname + " " + this.lastname;
// // // //  // //     }
// // // //  // // }
// // // //  // // let friend1 = new Person("Nonsi", "Mbense");
// // // //  // // let friend2 = new Person("Geney", "Gunston");
// // // //  // // console.log("Captain: " + friend1.fullname());
// // // //  // // console.log("Vice-captain: " + friend2.fullname());



// // // //  // //PROPERTIES
// // // //  // // class Person {
// // // //  // //     constructor(firstname, lastname) {
// // // //  // //     this.firstname = firstname;
// // // //  // //     this.lastname = lastname;
// // // //  // //     }
// // // //  // //     }
// // // //  // //     let p = new Person("Maaike", "van Putten");
// // // //  // // console.log("Hi", p.firstname);   //e.g. Properties can be accessed from outside the constructor



// // // //  // class Person {  // "#" symbol below prevents access from outside of Class
// // // //  //     #firstname;
// // // //  //     #lastname;
// // // //  //     constructor(firstname, lastname) {
// // // //  //         this.#firstname = firstname;
// // // //  //         this.#lastname = lastname;
// // // //  //         }
        
// // // //  //         }
// // // //  //         let p = new Person("Maria", "Saga");
// // // //  //         console.log(p.firstname);  //LOGS: Undefined



// // // //  //         class Person {  // "#" symbol below prevents access from outside of Class
// // // //  //             #firstname;
// // // //  //             #lastname;
// // // //  //             constructor(firstname, lastname) {
// // // //  //                 if(firstname.startsWith("M")){
// // // //  //                     this.#firstname = firstname;
// // // //  //                     } else {
// // // //  //                     this.#firstname = "M" + firstname;
// // // //  //                     }
// // // //  //                 this.#lastname = lastname;
// // // //  //                 }
                
// // // //  //                 }
       
// // // //  //             let p = new Person("kay", "Moon");
// // // //  //             console.log(p);





// // // // // // // // // // // //GETTERS & SETTERS
// // // // // // // // // // // class Person {
// // // // // // // // // // //     #firstname;
// // // // // // // // // // //     #lastname;
// // // // // // // // // // //     constructor(firstname, lastname) {
// // // // // // // // // // //     this.#firstname = firstname;
// // // // // // // // // // //     this.#lastname = lastname;
// // // // // // // // // // //     }
// // // // // // // // // // //     get firstname() {
// // // // // // // // // // //     return this.#firstname;
// // // // // // // // // // //     }
// // // // // // // // // // //     set firstname(firstname) {
// // // // // // // // // // //         if(firstname.startsWith("M")){
// // // // // // // // // // //         this.#firstname = firstname;
// // // // // // // // // // //         } else {
// // // // // // // // // // //         this.#firstname = "M" + firstname;
// // // // // // // // // // //         }

// // // // // // // // // // //         }
// // // // // // // // // // //     get lastname() {
// // // // // // // // // // //     return this.#lastname;
// // // // // // // // // // //     }
// // // // // // // // // // //     set lastname(lastname) {
// // // // // // // // // // //     this.#lastname = lastname;
// // // // // // // // // // //     }
// // // // // // // // // // //     }

// // // // // // // // // // // let p = new Person("Maria", "Saga");
// // // // // // // // // // // console.log("Getter: " + p.firstname);  //Gets first name

// // // // // // // // // // // p.firstname = "Adnane";  //Sets firstname
// // // // // // // // // // // console.log("Setter: " + p.firstname);





// // // // // // // // // // //INHERITANCE
// // // // // // // // // // class Vehicle {
// // // // // // // // // //     constructor(color, currentSpeed, maxSpeed) {
// // // // // // // // // //     this.color = color;
// // // // // // // // // //     this.currentSpeed = currentSpeed;
// // // // // // // // // // this.maxSpeed = maxSpeed;
// // // // // // // // // // }
// // // // // // // // // // move() {
// // // // // // // // // // console.log("moving at", this.currentSpeed);
// // // // // // // // // // }
// // // // // // // // // // accelerate(amount) {
// // // // // // // // // // this.currentSpeed += amount;
// // // // // // // // // // }
// // // // // // // // // // }

// // // // // // // // // // class Motorcycle extends Vehicle {  //Specifying that a certain class is the child of another class
// // // // // // // // // //     constructor(color, currentSpeed, maxSpeed, fuel) {
// // // // // // // // // //     super(color, currentSpeed, maxSpeed);  //'Super' calls constructor from parent class (Sets parent-class fields & avails methods to child-class)
// // // // // // // // // //     this.fuel = fuel;
// // // // // // // // // //     }
// // // // // // // // // //     doWheelie() {
// // // // // // // // // //     console.log("Driving on one wheel!");
// // // // // // // // // //     }
// // // // // // // // // //     }

// // // // // // // // // // let motor = new Motorcycle("Black", 0, 250, "gasoline");
// // // // // // // // // // console.log("Color of Motorcycle: " + motor.color);
// // // // // // // // // // motor.accelerate(50);
// // // // // // // // // // motor.move();





// // // // // // // // // //PROTOTYPES
// // // // // // // // // //SYNTAX = ClassName.prototype


// // // // // // // // // class Person {
// // // // // // // // //     constructor(firstname, lastname) {
// // // // // // // // //     this.firstname = firstname;
// // // // // // // // //     this.lastname = lastname;
// // // // // // // // //     }
// // // // // // // // //     greet() {
// // // // // // // // //     console.log("Hi there!");
// // // // // // // // //     }
// // // // // // // // //     }


// // // // // // // // //     Person.prototype.introduce = function () {  //Adding function to class using prototype...
// // // // // // // // //         console.log("Hi, I'm " + this.firstname);  //...Therefore can add Properties or Methods to object
// // // // // // // // //         };

// // // // // // // // //         Person.prototype.favoriteColor = "green";  //Adding a new property to a class 

// // // // // // // // //         let p = new Person("Maria", "Saga");
// // // // // // // // // console.log(p.favoriteColor);
// // // // // // // // // p.introduce();


// // // // // // // // /*  PRACTICE 7.3 */
// // // class Animal {
// // //     constructor(animalName, species, animalSound) {
// // //         this.animalName = animalName;
// // //         this.species = species;
// // //         this.animalSound = animalSound;
// // //     }
// // //     speak() {
// // //         console.log(this.animalName + " is a " + this.species + " and she says: " + this.animalSound);
// // //     }
// // // }
// // // Animal.prototype.eat = function () {
// // //     return this.animalName + " is eating."; 
// // // }
// // // let cat = new Animal("Katalina", "cat", "meow");
// // // let fox = new Animal("Saskia", "fox", "?_?");
// // // let dog = new Animal("Pipa", "dog", "Mucho gusto!");
// // // cat.speak();
// // // fox.speak();
// // // dog.speak();
// // // console.log(cat.eat());
// // // console.log(fox.eat());
// // // console.log(dog.eat());
// // // console.log(cat);
// // // console.log(fox);
// // // console.log(dog);





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
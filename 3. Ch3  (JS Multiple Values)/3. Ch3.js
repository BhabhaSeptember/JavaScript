//  // // /* WORKING WITH ARRAYS */


//  // // // /* CONSTANT ARRAY */
//  // // // const arr = ["hi there"];
//  // // // arr[0] = "new value";
//  // // // console.log(arr[0]);
//  // // // arr = ["nope, now you are overwriting the array"]; //outouts: "TypeError - Assignment to constant variable"


//  // // /* ACCESSING ELEMENTS WITHIN ARRAYS 
//  // // SYNTAX : */
//  // // let cars = ["Toyota", "Renault", "Volkswagen"];
//  // // console.log("Position 1: " + cars[0]);
//  // // console.log("Negative Index: " + cars[-1]); //outputs undefined because index position has no  corresponding value in array list 


//  // // /* OVERWRITING ELEMENTS */
//  // // cars[0] = "Isuzu";
//  // // console.log("Replacing 1st Position: " + cars[0]);
//  // // console.log("Updated Car List: " + cars);

//  // // console.log("Using non-existent index number: " + cars[5]); 



//  // /* BUILT-IN ARRAY 'LENGTH' METHOD */
//  // let numbers = [12, 24, 36];
//  // numbers[5] = 48;
//  // console.log("Non-existent index position: " + numbers.length); //OUTPUT = numbers [ 12, 24, 36, <2 empty items>, 48 ]   i.e. length = 6



//   // // // // /* PRACTICE EXERCISE 3.1. */
//   // // // // /*
//   // // // // 1.todo:Create shopping list array (3 items);
//   // // // // 2.todo:Check list length in console;
//   // // // // 3.todo:Update "Bread" to "Bananas"; 
//   // // // // 4.todo:Output entire list to console;
//   // // // //  */
//  // const shoppingList = ["Milk", "Bread", "Apples"]; //1.
//  // console.log("Initial Shopping List: " + shoppingList);
//  // console.log("Length Of Shopping List: " + shoppingList.length); //2.
//  // shoppingList[1] = "Bananas"; //3.
//  // console.log("Updated Shopping List: " + shoppingList); //4.



//   // // // /* ARRAY METHODS: Adding & Replacing Elements */
//   // // // let favoriteFruits = ["grapefruit", "orange", "lemon"];
//   // // // favoriteFruits.push("tangerine"); //a)Adds value to the end of the array
//   // // // console.log("Updated fruit list: " + favoriteFruits);

//   // // // let lengthOfFavoriteFruits = favoriteFruits.push("lime"); //The value 5 gets stored in the lengthOfFavoriteFruits variable
//   // // // console.log(favoriteFruits);


//   // // let arrOfShapes = ["circle", "triangle", "rectangle", "pentagon"];
//   // // arrOfShapes.splice(2, 0, "square", "trapezoid");   //b) Add elements at a certain index?
//   // // //LINE 67 above: 2 = index to start inserting; 0 = number of elements we want to delete starting from previously defined starting index
//   // // console.log(arrOfShapes);

//   // // arrOfShapes.splice(2, 2, "square", "trapezoid");
//   // // console.log(arrOfShapes); //OUTPUT= [ 'circle', 'triangle', 'square', 'trapezoid' ]


//   // // /*  Deleting more values than what are actually in the array  */
//   // // arrOfShapes.splice(2, 12, "square", "trapezoid");
//   // // console.log(arrOfShapes);


// // // // /* Adding an array within an array */
// // // let arr5 = [1, 2, 3];
// // // let arr6 = [4, 5, 6];
// // // let arr7 = arr5.concat(arr6);
// // // console.log(arr7);


// // // /* Add values to concatenated array values */
// // // let arr8 = arr7.concat(7, 8, 9);
// // // console.log("Original array: " + arr8);




// // // /* DELETING ELEMENTS */
// // // arr8.pop(); //1.Removes LAST element in array
// // // console.log("Pop method: " + arr8);

// // // arr8.shift(); //2.Deletes FIRST element
// // // console.log("Shift method: " + arr8);

// // // arr8.splice(1, 3); //3.Specify index from where to start deleting && the number of elements to be removed
// // // console.log("Splice method: " + arr8);

// // // delete arr8[0]; //change value of certain position of array to 'undefined'
// // // console.log("Delete method: " + arr8);



// // // /* FINDING ELEMENTS */
// // arr8 = [ 2, 6, 7, 8 ];
// // let findValue = arr8.find(function(e) { return e === 6}); //looks for value in array that is number 6
// // let findValue2 = arr8.find(e => e === 10); //looks for value in array that is number 10
// // console.log(findValue, findValue2);

// // let findIndex = arr8.indexOf(6); //find position of an element in an array
// // let findIndex2 = arr8.indexOf(10);//returns '-1' because '10' != array
// // console.log(findIndex, findIndex2);


//  // // // let findIndex3 = arr8.indexOf(6, 2);//finding next occurrence of specified number ('6'=element who's position we're looking for, '2'=specifies from which position to start searching for next occurrence)

//  // // //above returns '-1' because number 6 does not begin @ index2


//  // // let animals = ["dog", "horse", "cat", "platypus", "dog"];

//  // // let lastDog = animals.lastIndexOf("dog");//finds last occurrence of animal === 4



//  // /* SORTING */

//  // let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];

//  // names.sort(); //sorts elements in array alphabetically

//  // let ages = [18, 72, 33, 56, 40];

//  // ages.sort(); //sorts elements in ascending numerical values



//  // /* REVERSING */

//  // let nameList = [ 'Alicia', 'Bert', 'Fatiha', 'James', 'Maria' ];

//  // nameList.reverse(); //First becomes last &&& Last becomes first


//  // // /* Practice exercise 3.2 */
//  // /*
//  // 1. Create an empty array to use as a shopping list.
//  // 2. Add Milk, Bread, and Apples to your list.
//  // 3. Update "Bread" with Bananas and Eggs.
//  // 4. Remove the last item from the array and output it into the console.
//  // 5. Sort the list alphabetically.
//  // 6. Find and output the index value of Milk.
//  // 7. After Bananas, add Carrots and Lettuce.
//  // 8. Create a new list containing Juice and Pop.
//  // 9. Combine both lists, adding the new list twice to the end of the first list.
//  // 10. Get the last index value of Pop and output it to the console.
//  // 11. Your final list should look like this:
//  // ["Bananas", "Carrots", "Lettuce", "Eggs", "Milk", "Juice",
//  // "Pop", "Juice", "Pop"]
//  // */
//  // const shoppingList = []; //1.
//  // shoppingList.push("Milk", " Bread", " Apples."); //2.
//  // console.log("Shopping List 1: " + shoppingList);

//  // shoppingList.splice(1, 1, " Bananas", " Eggs") //3.
//  // console.log("ShopList2 (Bread === Bananas + Eggs): " + shoppingList);

//  // const removeLast = shoppingList.pop(); //4.
//  // console.log(removeLast);

//  // shoppingList.sort(); //5.
//  // console.log("Index Value Of Milk: " + shoppingList.indexOf("Milk")); //6.

//  // shoppingList.splice(1, 0, "Carrots", "Lettuce"); //7.
//  // const shoppingList2 = ["Juice", "Pop"];
//  // const finalShoppingList = shoppingList.concat(shoppingList2, shoppingList2);
//  // console.log("Last Index Of 'POP': " + finalShoppingList.lastIndexOf("Pop"));
//  // console.log("Final Shopping List: " + finalShoppingList);



//  // // // // /* MULTIDIMENSIONAL ARRAYS */
//  // // // // let someValues1 = [1, 2, 3];
//  // // // // let someValues2 = [4, 5, 6];
//  // // // // let someValues3 = [7, 8, 9];
//  // // // // let arrOfArrays = [someValues1, someValues2, someValues3]; //2-Dimensional array
//  // // // // console.log("An array of arrays: " + arrOfArrays);

//   // // let value1 = arrOfArrays[0][1]; //finding value in an array of arrays
//   // // console.log("Value within array of arrays: " + value1);

//   // // arrOfArraysOfArrays = [arrOfArrays, arrOfArrays, arrOfArrays];//
//   // // console.log("Array of arrays of arrays" + arrOfArraysOfArrays);

//   // // let middleValue = arrOfArraysOfArrays[1][1][1];
//   // // console.log("Finding value in multidimensional array: " + middleValue);


//   // // /* PRACTICE EXERCISE 3.3 */
//  // // /*
//  // // 1. Create an array containing three values: 1, 2, and 3.
//  // // 2. Nest the original array into a new array three times.
//  // // 3. Output the value 2 from one of the arrays into the console. 
//  // // */
//  // // // let theArray = [1, 2, 3]; //1.
//  // // // console.log("Initial Array:" + theArray)
//  // // // let newArray = [theArray, theArray, theArray]; //2.
//  // // // console.log("New Array = (The Array x 3): " + newArray);
//  // // // console.log("Outputting 'Value 2': " + newArray[0][1]); //3.



//  //// /* JS OBJECTS */
//  // // //Arrays are indexed objects vs Objects with custom descriptive name
//  // // let arr = [0, 1, 2];
//  // // console.log(typeof arr);

//  // // let dog = { 
//  // // dogName: "JavaScript",
//  // // weight: 2.4,
//  // // color: "brown",
//  // // breed: "chihuahua",
//  // // age: 3,
//  // // burglarBiter: true
//  // // };

//  // // let dogColor1 = dog["color"]; //finding value from an object
//  // // console.log("Color of dog: " + dogColor1);

//  // // let dogColor2 = dog.color; //dot notation (same as above)


//  // /* UPDATING OBJECTS */
//  // dog["color"] = "blue"; //METHOD 1
//  // dog.weight = 2.3; //METHOD 2
//  // console.log("Updated dog characteristics: " + dog);


//  // dog["age"] = "three"; //changed data type of entry from number to string


//  // /* 
//  // Practice exercise 3.4 [Pg63]
//  // 1. Create a new myCar object for a car. Add some properties, including, but not
//  // limited to, make and model, and values for a typical car or your car. Feel free
//  // to use booleans, strings, or numbers.
//  // 2. Create a variable that can hold the string value color. This variable
//  // containing a string value color can now be used to reference the property
//  // name within myCar. Then, use the variable within the square bracket notation
//  // to assign a new value to the color property in myCar.
//  // 3. Use that same variable and assign a new property string value to it, such as
//  // forSale. Use the bracket notation once again to assign a new value to the
//  // forSale property to indicate whether the car is available for purchase.
//  // 4. Output make and model into the console.
//  // 5. Output the value of forSale into the console.
//  // */


//  // const theCar = { //1.
//  //     make : "Float Mobile",
//  //     model : "Chic7000",
//  //     year : "Latest",
//  //     color : "aqua",
//  //     insurance :a true,
//  //     paymentPlan : "Cash"
//  // }
//  // let theCarsPropertyValue = "color" //2.
//  // theCar[theCarsPropertyValue] = "red";

//  // theCarsPropertyValue = "paymentPlan"; //3.
//  // theCar[theCarsPropertyValue] = "Monthly Installments";

//  // console.log("The Car's Make: " + theCar.make + " and Model: " + theCar.model); //4.

//  // console.log("Is the car insured?: " + theCar.insurance);



//  /* Working with objects and arrays */
//  /* Objects in objects */
//  let company = { 
//  companyName: "Healthy Candy",
 // activity: "food manufacturing",

 // address: {
 // street: "2nd street",
 // number: "123",
 // zipcode: "33116",
 // city: "Miami",
 // state: "Florida"
 // },

 // yearOfEstablishment: 2021
 // };

 // console.log ("Company information: " + company);

 // //TWO methods below to retrieve information from object within an object
 // company.address.zipcode = "33117";  
 // company["address"]["number"] = "100";



 // // /* Arrays in objects */
 // // company = { 
 // // companyName: "Healthy Candy",
 // // activities: ["food manufacturing", "improving kids' health", "manufacturing toys"],

 // address: {
 // street: "2nd street",
 // number: "123",
 // zipcode: "33116",
 // city: "Miami",
 // state: "Florida"
 // },

 // yearOfEstablishment: 2021
 // };

 // let company = { 
 // companyName: "Healthy Candy",
 // activities: ["food manufacturing", "improving kids' health", "manufacturing toys"],
 // address: {
 // street: "2nd street",
 // number: "123",
 // zipcode: "33116",
 // city: "Miami",
 // state: "Florida"
 // },
 // yearOfEstablishment: 2021
 // };

 // let activity = company.activities[1];
 // console.log(activity);


 // /* Objects in Arrays */
 // let addresses = [{
 //     street: "2nd street",
 //     number: "123",
 //     zipcode: "33116",
 //     city: "Miami",
 //     state: "Florida"
 //     },
 //     {
 //     street: "1st West avenue",
 //     number: "5",
 //     zipcode: "75001",
 //     city: "Addison",
 //     state: "Texas"
 //     }];
 //     console.log("Company Adresses: " + addresses);

 //     let streetName = addresses[0].street;
 //     console.log("Head Office Street Name: " + streetName);


// // // /* Objects in arrays in Objects */
// // // let company = { 
// // // companyName: "Healthy Candy",
// // // activities: [ "food manufacturing", "improving kids' health", "manufacturing toys"],
// // // address: [{
// // // street: "2nd street",
// // // number: "123",
// // // zipcode: "33116",
// // // city: "Miami",
// // // state: "Florida"
// // // },
// // // {
// // // street: "1st West avenue",
// // // number: "5",
// // // zipcode: "75001",
// // // city: "Addison",
// // // state: "Texas"
// // // }],
// // // yearOfEstablishment: 2021
// // // };
// // // console.log("Company Information: " + company);

// // // let streetName = company.address[0].street;
// // // console.log(streetName);

// // // let newBranch = company.address[1].city;
// // // console.log("New Branch Location: " + newBranch);


// // /* PRACTICE EXERCISE 3.5 */
// // /* 1. */ const myPeople = {
// //     friends: []
// // };

// // /* 2. */ const myFriend1 = {
// //     firstName : "Joseph",
// //     lastName : "Mafungo",
// //     theID : "friend1"
// // };
// // const myFriend2 = {
// //     firstName : "Marina",
// //     lastName : "Du Plessis",
// //     theID : "friend2"
// // };
// // const myFriend3 = {
// //     firstName : "Jose",
// //     lastName : "Ndlovu",
// //     theID : "friend3"
// // };

// // /* 3. */ myPeople.friends.push(myFriend1, myFriend2, myFriend3);

// // /* 4. */ console.log("My friends details: " + myPeople);



// /* CHAPTER PROJECTS */
// /* Manipulating an Array */
// // const theList = ['Laurence' ,' Svekis' ,true ,35 ,null ,undefined ,{test: 'one', score: 55} ,['one', 'two']];
// // console.log("1: " + theList);

// // theList.pop(); //removes last item
// // theList.shift(); //removes first item
// // theList.unshift("FIRST"); //adds to start of array
// // theList[3] = "hello world";
// // theList[2] = "Middle";
// // theList.push("LAST"); //adds to end of array
// // console.log("2: " + theList);



// //COMPANY PRODUCT CATALOG
// const inventory = [];

// const item1 = {
//     name: "Dolores Dining Set",
//     material: "MDF & Natural Wood",
//     color: "Light grey", 
//     quantity: 1
// };
// const item2 = {
//     name: "Vancouver Acacia Wood Coffee Table",
//     material: "Solid Acacia wood and Acacia wood veneers", 
//     color: "Natural with a wire-brushed finish", 
//     quantity: 1 
// };
// const item3 = {
//     name: "Smeg kettle",
//     material: "Stainless steel", 
//     color: "aqua", 
//     quantity: 3 
// };
// inventory.push(item1, item2, item3);
// console.log(inventory);

// console.log(inventory[2].quantity);
// console.log(inventory[0].material);
// console.log(inventory[1].name);

// console.log("Item3: " + item3);


// // // // // /* IF and IF ELSE statements */

// // // // // let rain = true;
// // // // // if(rain){
// // // // // console.log("** Taking my umbrella when I need to go outside **");
// // // // // } else {
// // // // // console.log("** I can leave my umbrella at home **");
// // // // // }

// // // // // let rain2 = false;
// // // // // if(rain2){
// // // // //     console.log("** Taking my umbrella when I need to go outside **");
// // // // //     } else {
// // // // //     console.log("** I can leave my umbrella at home **");
// // // // //     }

// // // // // let age = prompt("How old are you in years?");
// // // // //     if(age < 18) {
// // // // //         console.log("We're very sorry, but you can't get in under 18");
// // // // //         } else {
// // // // //         console.log("Welcome!");
// // // // //         }



// /* PRACTICE EXERCISE 4.1. */
// //    const applicationApproved = true;
// //    console.log("1) " + applicationApproved);
// //    if(applicationApproved) {
// //     console.log("2) Congratulations your application is successful!!! Check your emails to accept.");
// //    } else {
// //     console.log("3) We regret to inform you that your application is unsuccessful. Please try again in the next application round.");
// //    }

   
// // // //  /* ELSE IF STATEMENTS */
// // // // // let age = prompt("What is your age?");

// // // // // if(age < 3){
// // // // //     console.log("Access is free under three.");
// // // // //     } else if(age < 12) {
// // // // //     console.log("With the child discount, the fee is 5 dollars");
// // // // //     } else if(age < 65) {
// // // // //     console.log("A regular ticket costs 10 dollars.");
// // // // //     } else if(age >= 65) {
// // // // //     console.log("A VIP ticket is 7 dollars.");
// // // // //     }

// // // // // let age = prompt("How old are you?")
// // // // // let access = age < 18 ? "Denied [-_-] " : "Granted {^_^} ";
// // // // // console.log("Access: " + access)



// // // // // /* PRACTICE EXERCISE 4.2 */
// // // // // let age = prompt("Please enter your age in years?");
// // // // // age = Number(age); //converting prompt response to a number;
// // // // // let message;
// // // // // if (age >= 21) {
// // // // //     message = "Entry and Purchase of alcohol granted!";
// // // // // } else if (age >= 19) {
// // // // //     message = "Entry granted. Purchase of alcohol DENIED!";
// // // // // } else {
// // // // //     message = "MINOR ALERT!!! Entry Denied!!!";
// // // // // }
// // // // // console.log(message);


// // // // /* Conditional ternary operators */
// // // // /* TEMPLATE = operand1 ? operand2 : operand3; 

// // // // operand1 = expression to be evaluated
// // // // operand2 = executed if value of operand1 is true 
// // // // operand3 = executed if value of operand1 is false
// // // // */


// // // // // let access = age < 18 ? "denied" : "allowed"; // for short code otherwise use IF ELSE statements

// // // // // age < 18 ? console.log("denied") : console.log("allowed");



// // // // // // /* PRACTICE EXERCISE 4.3 */
// // // // // // let validID = confirm("Do you have a valid RSA ID?");
// // // // // // let access = validID ? "Granted {^_^}!!!" : "DENIED [-_-]"; //this is a boolean so you don't need to put (validID === true) JS recognises that we're working with a boolean operator
// // // // // // console.log("Admissison status: " + access);


// // // // /* SWITCH STATEMENTS - extension of IF ELSE when you need to evaluate atleast 4/5 values */
// // // // /* SYNTAX */
// // // // // switch(expression) {
// // // // //     case value1:
// // // // //     // code to be executed
// // // // //     break;
// // // // //     case value2:
// // // // //     // code to be executed
// // // // //     break;
// // // // //     case value-n:
// // // // //     // code to be executed
// // // // //     break;
// // // // //     }

// // // // // let activity = "Get up";
// // // // //     switch(activity) {
// // // // //         case "Get up":
// // // // //         console.log("It is 6:30AM");
// // // // //         break;
// // // // //         case "Breakfast":
// // // // //         console.log("It is 7:00AM");
// // // // //         break;
// // // // //         case "Drive to work":
// // // // //         console.log("It is 8:00AM");
// // // // //         break;
// // // // //         case "Lunch":
// // // // //         console.log("It is 12:00PM");
// // // // //         break;
// // // // //         case "Drive home":
// // // // //         console.log("It is 5:00PM");
// // // // //         break;
// // // // //         case "Dinner":
// // // // //         console.log("It is 6:30PM");
// // // // //         break;
// // // // //         default:
// // // // //         console.log("I cannot determine the current time.");
// // // // //         break;
// // // // //         } 
 


// // // // /* PRACTICE EXERCISE 4.4 */
// // // // // let randomNumber = Math.floor(Math.random() * 5); //todo: add code that increases this number as you add more results

// // // // //todo: Create prompt to get string value from useer that you can report back in the final output
// // // // //todo: Create (number) responses using switch statement, each assigned to different value from random number generator
// // // // //todo: create variable to hold the end response which must be a sentebce printed for user (can assign different string values for each case --> assigning new values depending on the results from the random value)
// // // // //todo: Output users original question plus the randomly selected case response, to the console after the user enters their question


// // // // // let randomNumber = Math.floor(Math.random() * 6); 
// // // // // let stringValueInput = prompt("Ask me something");
// // // // // let outputValue;
// // // // // switch (randomNumber) {
// // // // //     case 0: 
// // // // //     outputValue = "It will work out";
// // // // //     break;
// // // // //     case 1:
// // // // //         outputValue = "Maybe, maybe not";
// // // // //         break;
// // // // //         case 2: 
// // // // //         outputValue = "Probably not";
// // // // //         break;
// // // // //         case 3: 
// // // // //         outputValue = "Highly likely";
// // // // //         break;
// // // // //         default:
// // // // //             outputValue = "I don't know about that";
// // // // // }
// // // // // let response = "You asked me: " + "'" + stringValueInput + "'" + ". I think that " + "'" + outputValue  + "'" ;
// // // // // console.log(response);



// // // // // /* COMBINING CASES */
// // // // // let grade = prompt("What grade did you score? A, B, C, D, E, or F...").toUpperCase();
// // // // // switch (grade) {
// // // // //   case "F":
// // // // //     case "E":
// // // // //   case "D":
// // // // //     alert("You have failed! Try again later");
// // // // //     break;
// // // // //   case "C":
// // // // //   case "B":
// // // // //     alert("Well done, you have passed");
// // // // //     break;
// // // // //   case "A": 
// // // // //   alert("Excellent performance. We are proud of you!");
// // // // //   break;
// // // // // }



// // // // /* PRACTICE EXERCISE 4.5 */
// // // // let prize = prompt("Select a number between 0 -10: ");
// // // // prize = Number(prize);
// // // // let outputMessage = "My Selection: ";
// // // // switch(prize) {
// // // //     case 0:
// // // //         outputMessage += "Candy Floss";
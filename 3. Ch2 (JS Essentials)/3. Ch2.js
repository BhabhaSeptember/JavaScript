// // // // // // // // // // // // // // // //VARIABLES
// // // // // // // // // // // // // // // firstname = "Maaike";
// // // // // // // // // // // // // // // x = 2;
// // // // // // // // // // // // // // // console.log("1. " + firstname);
// // // // // // // // // // // // // // // console.log("1. " + x);

// // // // // // // // // // // // // // // //ASSIGNING NEW VALUES 
// // // // // // // // // // // // // // // firstname = "Edward";
// // // // // // // // // // // // // // // x = 7;
// // // // // // // // // // // // // // // console.log("2. " + firstname);
// // // // // // // // // // // // // // // console.log("2. " + x);


// // // // // // // // // // // // // // //DECLARING VARIABLES
// // // // // // // // // // // // // // // let firstname = "Maria";
// // // // // // // // // // // // // // // firstname = "Jacky";


// // // // // // // // // // // // // // //LET vs VAR vs CONST
// // // // // // // // // // // // // // /*
// // // // // // // // // // // // // // LET & VAR : Can assign new value to variable later in program
// // // // // // // // // // // // // // CONST : Value is assigned ONCE (reassigning results in ERROR)

// // // // // // // // // // // // // // VAR= Global scope
// // // // // // // // // // // // // // LET= Block scope
// // // // // // // // // // // // // // */
// // // // // // // // // // // // // // let nr1 = 12; 
// // // // // // // // // // // // // // var nr2 = 8;
// // // // // // // // // // // // // // const PI = 3.14159;




// // // // // // // // // // // // // //NAMING VARIABLES
// // // // // // // // // // // // // /*
// // // // // // // // // // // // // - Must be --> descriptive
// // // // // // // // // // // // // - Single word --> Camel case (starting with lowercase)
// // // // // // // // // // // // // - NO spaces --> Use underscore instead
// // // // // // // // // // // // // */



// // // // // // // // // // // // // //PRIMITIVE DATA TYPES
// // // // // // // // // // // // // //1. STRING (TEXT)
// // // // // // // // // // // // // // let example1 = "Double quotes";
// // // // // // // // // // // // // // let example2 = "Single quotes";
// // // // // // // // // // // // // // let funActivity = "Let's learn JavaScript";

// // // // // // // // // // // // // // let language = "JavaScript";
// // // // // // // // // // // // // // let message = `Let's learn ${language}`; //an point to variables and-->value will be substituted into line.
// // // // // // // // // // // // // // console.log(message);


// // // // // // // // // // // // // // let str = "Hello, what's your name? Is it \"Mike\"?"; // "/" = escape character
// // // // // // // // // // // // // // console.log(str);
// // // // // // // // // // // // // // let str2 = 'Hello, what\'s your name? Is it "Mike"?';
// // // // // // // // // // // // // // console.log(str2);


// // // // // // // // // // // // // // let str3 = "New \nline.";  //Can create line break
// // // // // // // // // // // // // // let str4 = "I'm containing a backslash: \\!";
// // // // // // // // // // // // // // console.log(str3);
// // // // // // // // // // // // // // console.log(str4);



// // // // // // // // // // // // //2. NUMBER
// // // // // // // // // // // // // let intNr = 1;
// // // // // // // // // // // // // let intNr3 = -111;
// // // // // // // // // // // // // let decNr = 1.5;
// // // // // // // // // // // // // let expNr = 1.4e15;
// // // // // // // // // // // // // let octNr = 0o10; //decimal version would be 8
// // // // // // // // // // // // // let hexNr = 0x3E8; //decimal version would be 1000
// // // // // // // // // // // // // let binNr = 0b101; //decimal version would be 5
// // // // // // // // // // // // // console.log("intNr: " + intNr)
// // // // // // // // // // // // // console.log("intNr3: " + intNr3)
// // // // // // // // // // // // // console.log("decNr: " + decNr)
// // // // // // // // // // // // // console.log("expNr: " + expNr)
// // // // // // // // // // // // console.log("octNr: " + octNr)
// // // // // // // // // // // // console.log("hexNr: " + hexNr)
// // // // // // // // // // // // console.log("binNr: " + binNr)




// // // // // // // // // // // //3. BIGINT
// // // // // // // // // // // /*
// // // // // // // // // // // NOTE: Limits of the 'number' data type are between 2e53-1 and -(2e53-1)
// // // // // // // // // // // */
// // // // // // // // // // // // let bigNr = 90071992547409920n;
// // // // // // // // // // // // console.log(bigNr);
// // // // // // // // // // // // let intNr = 1;
// // // // // // // // // // // // let result = bigNr + intNr;
// // // // // // // // // // // // console.log(result);  //TYPE ERROR (Can ONLY use 'BigInts' on 'BigInts')


// // // // // // // // // // // //4. BOOLEAN (Store: True/False value || Indicate: On/Off || Yes/No )
// // // // // // // // // // // // let bool1 = false;
// // // // // // // // // // // // let bool2 = true;

// // // // // // // // // // // // let objectIsDeleted = false;
// // // // // // // // // // // // let lightIsOn = true;



// // // // // // // // // // // //5. SYMBOL
// // // // // // // // // // // // let str1 = "JavaScript is fun!";
// // // // // // // // // // // // let str2 = "JavaScript is fun!";
// // // // // // // // // // // // console.log("These two strings are the same:", str1 === str2); //True

// // // // // // // // // // // // let sym1 = Symbol("JavaScript is fun!");
// // // // // // // // // // // // let sym2 = Symbol("JavaScript is fun!");
// // // // // // // // // // // // console.log("These two Symbols are the same:", sym1 === sym2); //False



// // // // // // // // // // // //6. UNDEFINED
// // // // // // // // // // // // let unassigned;
// // // // // // // // // // // // console.log(unassigned);




// // // // // // // // // // // //7. NULL
// // // // // // // // // // // // let empty = null;


// // // // // // // // // // // // let terribleThingToDo = undefined;
// // // // // // // // // // // // let lastName;
// // // // // // // // // // // // console.log("Same 'undefined': ", lastName === terribleThingToDo);
// // // // // // // // // // // // let betterOption = null;
// // // // // // // // // // // // console.log("Same 'null': ", lastName === betterOption);




// // // // // // // // // // // //ANALYZING & MODIFYING DATA TYPES
// // // // // // // // // // // //WORKING OUT TYPE OF VARIABLE
// // // // // // // // // // // // testVariable = 1;
// // // // // // // // // // // // variableTypeTest1 = typeof testVariable;
// // // // // // // // // // // // variableTypeTest2 = typeof(testVariable);
// // // // // // // // // // // // console.log(variableTypeTest1);
// // // // // // // // // // // // console.log(variableTypeTest2);

// // // // // // // // // // // let str = "Hello";
// // // // // // // // // // // let nr = 7;
// // // // // // // // // // // let bigNr = 12345678901234n;
// // // // // // // // // // // let bool = true;
// // // // // // // // // // // let sym = Symbol("unique");
// // // // // // // // // // // let undef = undefined;
// // // // // // // // // // // let unknown = null;
// // // // // // // // // // // console.log("str: " + typeof str);
// // // // // // // // // // // console.log("nr: " + typeof nr);
// // // // // // // // // // // console.log("bigNr: " + typeof bigNr);
// // // // // // // // // // // console.log("bool: " + typeof bool);
// // // // // // // // // // // console.log("sym: " + typeof sym);
// // // // // // // // // // // console.log("undef: " + typeof undef);
// // // // // // // // // // // console.log("unknown: " + typeof unknown);



// // // // // // // // // // //CONVERTING DATA TYPES
// // // // // // // // // // // let nr1 = 2;
// // // // // // // // // // // let nr2 = "2";
// // // // // // // // // // // console.log(nr1 * nr2); //LOGS '4' --> (2*2)


// // // // // // // // // // // let nr1 = 2;
// // // // // // // // // // // let nr2 = "2";
// // // // // // // // // // // // console.log(nr1 + nr2); //LOGS '22'


// // // // // // // // // // // /* NOTES:
// // // // // // // // // // // 1. String()-->Puts everything inside quotes
// // // // // // // // // // // 2. Number()-->If cannot convert to number, value is changed to 'NaN = Not a Number'
// // // // // // // // // // // 3. Boolean()-->Will be TRUE for everything EXCEPT (null, undefined, 0, NaN & empty string)
// // // // // // // // // // // */
// // // // // // // // // // //EXAMPLES:
// // // // // // // // // // // let nrToStr = 6;
// // // // // // // // // // // nrToStr = String(nrToStr);
// // // // // // // // // // // console.log(nrToStr, typeof nrToStr);

// // // // // // // // // // // let strToNr = "12";
// // // // // // // // // // // strToNr = Number(strToNr);
// // // // // // // // // // // console.log(strToNr, typeof strToNr);

// // // // // // // // // // // let strToBool = "any string will return true";
// // // // // // // // // // // strToBool = Boolean(strToBool);
// // // // // // // // // // // // console.log(strToBool, typeof strToBool);

// // // // // // // // // // // let nullToNr = null;
// // // // // // // // // // // nullToNr = Number(nullToNr);
// // // // // // // // // // // // console.log("null", nullToNr, typeof nullToNr); //LOGS '0' & 'number'

// // // // // // // // // // // // let strToNr = "";
// // // // // // // // // // // // strToNr = Number(strToNr);
// // // // // // // // // // // // console.log("empty string", strToNr, typeof strToNr); //LOGS '0' & 'number'

// // // // // // // // // // // // let strToNr2 = "hello";
// // // // // // // // // // // // strToNr2 = Number(strToNr2);
// // // // // // // // // // // // console.log(strToNr2, typeof strToNr2);


// // // // // // // // // // // let strToBool2 = "false";
// // // // // // // // // // // strToBool2 = Boolean(strToBool2);
// // // // // // // // // // // console.log(strToBool2, typeof strToBool2);

// // // // // // // // // // // let strToBool = "";
// // // // // // // // // // // strToBool = Boolean(strToBool);  //ANY string converted to Boolean will ALWAYS retun 'TRUE'
// // // // // // // // // // // console.log(strToBool, typeof strToBool); //Exception to above: Empty string, Null, Undefined, 0(?)


// // // // // // // // // // // let nr1 = 2;
// // // // // // // // // // // let nr2 = "2";
// // // // // // // // // // // console.log(nr1 + Number(nr2));





// // // // // // // // // // //PRACTICE EXERCISE 2.1
// // // // // // // // // // let str1 = 'Laurence'; //String
// // // // // // // // // // let str2 = "Svekis"; //String
// // // // // // // // // // let val1 = undefined; //Object
// // // // // // // // // // let val2 = null; //Number
// // // // // // // // // // let myNum = 1000; //Number

// // // // // // // // // // console.log("str1: " + str1 + " = " + typeof(str1));
// // // // // // // // // // console.log("str2: " + str2 + " = " + typeof(str2));
// // // // // // // // // // console.log("val1: " + val1 + " = " + typeof(val1));
// // // // // // // // // // console.log("val2: " + val2 + " = " + typeof(val2));
// // // // // // // // // // console.log("myNum: " + myNum + " = " + typeof(myNum));



// // // // // // // // // //OPERATORS
// // // // // // // // // //ARITHMETIC OPERATORS
// // // // // // // // // //1. ADDITION
// // // // // // // // // let nr1 = 12;
// // // // // // // // // let nr2 = 14;
// // // // // // // // // let result1 = nr1 + nr2;
// // // // // // // // // console.log("12 + 14 = " + result1)

// // // // // // // // // let str1 = "Hello ";
// // // // // // // // // let str2 = "addition";
// // // // // // // // // let result2 = str1 + str2;
// // // // // // // // // console.log("Concatenation: " + result2);



// // // // // // // // //PRACTICE EXERCISE 2.2
// // // // // // // // let myName = "Tracy";
// // // // // // // // let myAge = 27;
// // // // // // // // let jsSkill = true;
// // // // // // // // console.log("Hello, my name is: " + myName + ". I am " + myAge + " years old. Can I code JS?: " + jsSkill + "!!!");




// // // // // // // //2.SUBTRACTION
// // // // // // // let nr1 = 20;
// // // // // // // let nr2 = 4;
// // // // // // // let str1 = "Hi";
// // // // // // // let nr3 = 3;
// // // // // // // let result1 = nr1 - nr2;
// // // // // // // let result2 = str1 - nr3; //NaN
// // // // // // // console.log("Result1: (20 - 4) = " + result1, "\nResult2: (\"Hi\" - 3) " + result2);



// // // // // // //MULTIPLICATION
// // // // // // let nr1 = 15;
// // // // // // let nr2 = 10;
// // // // // // let str1 = "Hi";
// // // // // // let nr3 = 3;
// // // // // // let result1 = nr1 * nr2;
// // // // // // let result2 = str1 * nr3;
// // // // // // console.log("Result1: (15 * 10) = " + result1, "\nResult2: (\"Hi\" * 3) " + result2);



// // // // // //DIVISION
// // // // // let nr1 = 30;
// // // // // let nr2 = 5;
// // // // // let result1 = nr1 / nr2;
// // // // // console.log("Result1: (30/5) = " + result1);




// // // // //EXPONENTIATION
// // // // // let nr1 = 2;
// // // // // let nr2 = 3;
// // // // // let result1 = nr1 ** nr2;
// // // // // console.log("Result1: (2e3) = " + result1);



// // // // //MODULUS
// // // // let nr1 = 10;
// // // // let nr2 = 3;
// // // // let result1 = nr1 % nr2;
// // // // console.log(`${nr1} % ${nr2} = ${result1}`);


// // // // let nr3 = 8;
// // // // let nr4 = 2;
// // // // let result2 = nr3 % nr4;
// // // // console.log(`${nr3} % ${nr4} = ${result2}`);

// // // // let nr5 = 15;
// // // // let nr6 = 4;
// // // // let result3 = nr5 % nr6;
// // // // console.log(`${nr5} % ${nr6} = ${result3}`);



// // // //UNARY OPEATORS: INCREMENT & DECREMENT
// // // // let nr1 = 4;
// // // // nr1++;
// // // // console.log(nr1);

// // // // let nr2 = 4;
// // // // nr2--;
// // // // console.log(nr2);



// // // //PREFIX & POSTFIX OPERATORS
// // // // let nr = 2;
// // // // console.log("Postfix: " + nr++);
// // // // console.log("Postfix: " + nr++);
// // // // console.log("Postfix: " + nr);

// // // // let nr2 = 2;
// // // // console.log("Prefix: " + ++nr2);


// // // // let nr1 = 4;
// // // // let nr2 = 5;
// // // // let nr3 = 2;
// // // // console.log(nr1++ + ++nr2 * nr3++);



// // // //COMBINING THE OPERATORS
// // // /*
// // // OPERATOR PRECEDENCE:
// // // 1. Grouping
// // // 2. Exponentiation
// // // 3. Prefix Increment & Decrement ( -- , ++ )
// // // 4. Mult, Div & Mod ( * , /, % )
// // // 5. Add, Subt ( + , - )
// // // */




// // // //PRACTICE EXERCISE 2.3
// // // let a = prompt("Choose a length in numbers for Side-a: ");
// // // let b = prompt("Choose b length in numbers for Side-b: ");
// // // let c = Math.floor(((a*a) + (b*b))**0.5);
// // // console.log("Result: " + c);



// // //ASSIGNMENT OPERATORS
// // let x = 2;
// // x += 2;
// // console.log("1. " + x); //adds above two lines

// // x -= 2;
// // console.log("2. " + x);

// // x *= 6;
// // console.log("3. " + x);

// // x /= 3;
// // console.log("4. " + x);

// // x **= 2;
// // console.log("5. " + x);

// // x %= 3;
// // console.log("6. " + x);



// //PRACTICE EXERCISE 2.4
// // let a = 10;
// // let b = 5;
// // let c = 2;

// // let op1 = a + b;
// // let op2 = a / c;
// // let op3 = 
// // console.log(op1 + op2)



// //COMPARISON OPERATORS
// //EQUAL
// // let x = 5;
// // let y = "5";
// // console.log(x == y); //Checks equal Value only NOT Data Type (Loose Equality)
// // //ABOVE LOGS: True

// // console.log(x === y); //Checks both Value AND Data Type (Strict Equality)



// //NOT EQUAL (Loose vs Strict non-equality)
// // let x = 5;
// // let y = "5";
// // console.log(x != y); 
// // console.log(x !== y);



// // //GREATER & SMALLER THAN 
// // let x = 5;
// // let y = 6;
// // console.log(y > x);
// // console.log(x > y);
// // console.log(y >= y);

// // console.log(y < x);
// // console.log(x < y);
// // console.log(y <= y);




// //LOGIC OPERATORS
// /* USES:
// - Check 2 conditions in one
// - Negate a condition
// -(And, Or, Not)
// */

// //AND
// // let x = 1;
// // let y = 2;
// // let z = 3;
// // console.log(x < y && y < z);
// // console.log(x > y && y < z);


// //OR
// // let x = 1;
// // let y = 2;
// // let z = 3;
// // console.log(x > y || y < z);
// // console.log(x > y || y > z);



// //NOT
// // let x = false;
// // console.log(!x);

// // let x = 1;
// // let y = 2;
// // console.log(!(x < y));



//SELF-CHECK QUIZ
//1. String
// const c = "5";

//2. Number
// const c = 91;

//3. Line 2
// let empty1 = undefined; //Line 1
// let empty2 = null; //Line 2

//4. world 
// let a = "Hello";
// a = "world";
// console.log(a);

//5. Hello world!
// let a = "world";
// let b = `Hello ${a}!`;
// console.log(b);

//6. Whatever the user enters in
// let a = "Hello";
// a = prompt("world"); //world will show in the pop-up but there will also be an input field which is logged onto the console
// console.log(a);

//7. 71
// let a = 5;
// let b = 70;
// let c = "5";
// b++;
// console.log(b);

//8. 4
// let result = 3 + 4 * 2 / 8;

//9. Total = 16 ; Total2 = 536
// let firstNum = 5;
// let secondNum = 10;
// firstNum++;
// secondNum--;
// let total = ++firstNum + secondNum;
// console.log(total);
// let total2 = 500 + 100 / 5 + total--;
// console.log(total2);

//10. 
/*
const a = 5;
const b = 10;
console.log(a > 0 && b > 0);
console.log(a == 5 && b == 4);
console.log(true ||false);
console.log(a == 3 || b == 10);
console.log(a == 3 || b == 7);
- True
- False
- True
- True
- False
*/




                                        /* READY FOR REVIEW */


// //CHAPTER PROJECT
// //MILES-TO-KILOMETERS
// let kms = prompt("Enter distance in kms below to begin conversion: ");
// let miles = Math.floor(kms * 202.2142);
// console.log("The distance of " + kms + "km is equal to " + miles + " miles.");


// //BMI CALCULATOR
let heightInches = prompt("Type your height in inches: ");
let weightPounds = prompt("Type your weight in pounds: ");
// console.log("Height in Inches = " + heightInches);
// console.log("Weight in Pounds = " + weightPounds);

let heightCm = heightInches * 2.54 
let weightKgs = weightPounds / 2.2046;
// console.log("Height in Cm's = " + heightCm);
// console.log("Weight in Kilograms = " + weightKgs);

let bmi = weightKgs / (heightCm/100 * heightCm/100);
console.log(bmi);
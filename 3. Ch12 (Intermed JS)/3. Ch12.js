// // //REGULAR EXPRESSIONS
// // //Note: Ways to describe text patterns
// // //Uses = -Look for errrors in a large file/ retrieve a browser agent
// // // - Form validation (specify valid patterns for field entries e.g. email & tel)
// // // - Find strings or replace strings

// // //EXAMPLE 1
// // //Note: match() function returns result as substring
// // // let text = "I love JavaScript!";
// // // console.log(text.match(/javascript/)); //no match because of case sensitivity

// // // console.log(text.match(/javascript/i)); // 'i' makes it case insensitive

// // //SPECIFYING MULTIPLE OPTIONS FOR WORDS
// // //EXAMPLE 1
// // // let text = "I love JavaScript!";
// // // console.log(text.match(/javascript|nodejs|react/i)); //matches first encounter

// // // let text = "I love React and JavaScript!";
// // // console.log(text.match(/javascript|nodejs|react/gi)); //global modifier finds all matches

// // //CHARACTER OPTIONS
// // //EXAMPLE 1
// // // let text = "d";
// // // console.log(text.match(/[abc]/)); //no match

// // // console.log(text.match(/[abcd]/));
// // // console.log(text.match(/[a-d]/)); //alternative syntax

// // //EXAMPLE 2
// // // let text = "t";
// // // console.log(text.match(/[a-zA-Z]/));

// // // console.log(text.match(/[a-z]/i));

// // // console.log(text.match(/[a-zA-Z0-9]/)); //include numbers

// // //EXAMPLE 3
// // // let text = "äé!";
// // // console.log(text.match(/[a-zA-Z0-9]/)); //no match for these special characters

// // // let text = "Just some text.";
// // // console.log(text.match(/./g)); //dot functions can match any character

// // // let text = "Just some text.";
// // // console.log(text.match(/\./g)); //backslash to escape special meaning vice versa

// // //EXAMPLE 4
// // // let text = "I'm 29 years old.";
// // // console.log(text.match(/\d/g)); //special meaning: '\d' matches any digit

// // // let text = "Coding is a lot of fun!";
// // // console.log(text.match(/\s/g)); // special meaning: '\s' matches white spaces

// // // let text = "In the end or at the beginning?";
// // // console.log(text.match(/\bin/gi)); //special meaning: '\b' matches the beginning of a word

// // // let nr = 357;
// // // console.log(nr.match(/3/g));  //TypeError (nr.match is not a function)

// // //GROUPS
// // //EXAMPLE 1
// // // let text = "I love JavaScript!";
// // // console.log(text.match(/(love|dislike)\s(javascript|spiders)/gi));

// // // let text = "I love JavaScript!";
// // // console.log(text.match(/[a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9]/g));

// // // let text = "You are doing great!";
// // // console.log(text.match(/n?g/gi)); //'g' may or may not have a preceding 'n'

// // // let text = "123123123";
// // // console.log(text.match(/(123)+/)); //'+' allows repetition

// // // let text = "abcabcabc";
// // // console.log(text.match(/(abc){1,2}/)); //{min, max} specify repetitions

// // // let text = "I love JavaScript!";
// // // console.log(text.match(/(?<language>javascript)/i)); //naming the group

// // //PRACTICAL REGEX
// // //SEARCHING & REPLACING STRINGS
// // //EXAMPLE 1
// // // let text = "That's not the case.";
// // // console.log(text.search(/Case/i)); //returns 15 = starting index position

// // // let text = "Coding is fun. Coding opens up a lot of opportunities.";
// // // console.log(text.replace("Coding", "JavaScript")); //replaces first encounter

// // // let text = "Coding is fun. Coding opens up a lot of opportunities.";
// // // console.log(text.replace(/Coding/g, "JavaScript")); //all instances replaced

// // //PRACTICE EXERCISE 12.1 (SEE HTML)
// // // const output = document.getElementById("output");
// // // const searchValue = document.getElementById("sText");
// // // const replaceValue = document.getElementById("rText");
// // // document.querySelector("button").addEventListener("click", lookUp);
// // // function lookUp() {
// // //   const s = output.textContent;
// // //   const rt = replaceValue.value;
// // //   const re = new RegExp(searchValue.value, "gi");
// // //   if (s.match(re)) {
// // //     let newValue = s.replace(re, rt);
// // //     output.textContent = newValue;
// // //   }
// // // }

// // //EMAIL VALIDATION
// // //EXAMPLE 1
// // // let emailPattern = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/g;
// // // let validEmail = "septemberbhabha@gmail.com";
// // // let invalidEmail = "sept@.com";
// // // console.log(validEmail.match(emailPattern));
// // // console.log(invalidEmail.match(emailPattern));

// // //PRACTICE EXERCISE 12.2 (SEE HTML) [[[[[[[[[[[[[DEMO]]]]]]]]]]]]]]]]]]
// // // const output = document.querySelector(".output");
// // // const emailVal = document.querySelector("input");
// // // const btn = document.querySelector("button");
// // // const emailExp = /([A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[A-Za-z0-9]+)\w+/;
// // // btn.addEventListener("click", (e) => {
// // //   const input = emailVal.value;
// // //   let response = "";
// // //   const result = emailExp.test(input);

// // //   if (!result) {
// // //     response = "Invalid Email";
// // //     output.style.color = "red";
// // //   } else {
// // //     response = "Valid Email";
// // //     output.style.color = "green";
// // //   }
// // //   emailVal.value = "";
// // //   output.textContent = response;
// // // });

// // //FUNCTIONS & ARGUMENTS
// // //EXAMPLE 1
// // //Note: parameters get added to custom object called 'arguments' = array-like
// // // function test(a, b, c) {
// // //     console.log("first:", a, arguments[0]);
// // //     console.log("second:", b, arguments[1]);
// // //     console.log("third:", c, arguments[2]);
// // //    }
// // // test("fun", "js", "secrets");

// // //EXAMPLE 2
// // //Note: Updating parameter, also changes argument accordingly vice versa
// // // function test(a, b, c) {
// // //     a = "nice";
// // //     arguments[1] = "JavaScript";
// // //     console.log("first:", a, arguments[0]);
// // //     console.log("second:", b, arguments[1]);
// // //     console.log("third:", c, arguments[2]);
// // //    }
// // //    test("fun", "js", "secrets");

// // //PRACTICE EXERCISE 12.3
// // // function showNames() {
// // //   let lastOne = "";
// // //   for (let i = 0; i < arguments.length; i++) {
// // //     lastOne = arguments[i];
// // //   }
// // //   return lastOne;
// // // }
// // // console.log(showNames("JavaScript", "Laurence", "Mike", "Larry"));

// // //JAVASCRIPT HOISTING
// // //Note: three diff variables = [const, let, var]
// // // Recommendaed to use 'let' instead of 'var'
// // //Hoisting - moves declaration of variables to top of scope they're defined in
// // //JS moves 'var' declarations to top of file before processing NOT initializations
// // //EXAMPLE
// // // var x;
// // // x = 5;
// // // console.log(x); //Logs 5

// // //----below also works---
// // // x = 5;
// // // console.log(x);
// // // var x;

// // //----------below is undefined-------
// // // console.log(x);
// // // x = 5; (initialization)
// // // var x; (declaration)

// // // ------vs------
// // // let xLet;
// // // xLet= 5;
// // // console.log("xlet");

// // //-----below does not work-----
// // // xLet = 5;
// // // console.log("xLet");
// // // let xLet; //Returns reference error

// // //USING STRICT MODE
// // //EXAMPLE
// // // function sayHi() {
// // //     greeting = "Hello!"; //variable not declared
// // //     console.log(greeting);
// // //    }
// // //    sayHi();  //JS declares 'greeting' variable for us

// // // "use strict";
// // // function sayHi() {
// // //   greeting = "Hello!";
// // //   console.log(greeting);
// // // }
// // // sayHi();  //returns ReferenceError because greeting is not defined

// // //DEBUGGING           [[[[[[[[[[[[[[DEMO]]]]]]]]]]]]]]
// // //Note: Use breakpoints to help spot code errors
// // //PRACTICE EXERCISE 12.4
// // // let val = 5;
// // // val += adder();
// // // val += adder();
// // // val += adder();
// // // console.log(val);
// // // function adder() {
// // //   let counter = val;
// // //   for (let i = 0; i < val; i++) {
// // //     counter++;
// // //   }
// // //   return counter;
// // // }

// // //ERROR HANDLING
// // //EXAMPLE
// // // try {
// // //     somethingVeryDangerous();
// // //    } catch (e) { //error ends up in catch block
// // //     if (e instanceof TypeError) {  //checking error class with operator 'instanceof'
// // //     // deal with TypeError exceptions
// // //     } else if (e instanceof RangeError) {
// // //     // deal with RangeError exceptions
// // //     } else if (e instanceof EvalError) {
// // //     // deal with EvalError exceptions
// // //     } else {
// // //     //deal with all other exceptions
// // //     throw e; //rethrow
// // //     }
// // //    }

// // //EXAMPLE 2
// // // try {
// // //     trySomething();
// // //    } catch (e) {
// // //     console.log("Oh oh");
// // //    } finally {   //gets executed regardless of thrown error
// // //     console.log("Error or no error, I will be logged!");
// // //    }

// // //EXAMPLE 3
// // // function somethingVeryDangerous() {
// // //     throw RangeError();
// // //    }

// // //PRACTICE EXERCISE 12.5
// // // function test(val) {
// // //   try {
// // //     if (isNaN(val)) {
// // //       throw "Not a number";
// // //     } else {
// // //       console.log("Got number");
// // //     }
// // //   } catch (e) {
// // //     console.error(e);
// // //   } finally {
// // //     console.log("Done " + val);
// // //   }
// // // }
// // // test("a");
// // // test(100);

// // //USING COOKIES
// // //Note: small data files stored on computer & used by websites
// // //stores things about the user of the website
// // //contain key-value pairs separated by semi-colons
// // // document.cookie = "name=Maaike;favoriteColor=black"; //created cookie

// // //reading from cookie:
// // // let cookie = decodeURIComponent(document.cookie);
// // // let cookieList = cookie.split(";");
// // // for (let i = 0; i < cookieList.length; i++) {
// // //  let c = cookieList[i];
// // //  if (c.charAt(0) == " ") {
// // //  c = c.trim();
// // //  }
// // //  if (c.startsWith("name")) {
// // //  alert(c.substring(5, c.length));
// // //  }
// // // }

// // // function setCookie(e) {
// // //  document.cookie = "name=" + e.value + ";";
// // // }
// // // function sayHi(key) {
// // // let name = getCookie(key);
// // // document.getElementById("hi").innerHTML = "Hi " + name;
// // // }
// // // function getCookie(key) {
// // // let cookie = decodeURIComponent(document.cookie);
// // // let cookieList = cookie.split(";");
// // // for (let i = 0; i < cookieList.length; i++) {
// // // let c = cookieList[i];
// // // if (c.charAt(0) == " ") {
// // // c = c.trim();
// // // }
// // // if (c.startsWith(key)) {
// // // console.log("hi" + c);
// // // return c.substring(key.length + 1, c.length);
// // // }
// // // }
// // // }

// // //PRACTICE EXERCISE 12.6
// // // console.log(document.cookie);
// // //  console.log(rCookie("test1"));
// // //  console.log(rCookie("test"));
// // //  cCookie("test1", "new Cookie", 30);
// // //  dCookie("test2");
// // //  function cCookie(cName, value, days) {
// // //  if (days) {
// // //  const d = new Date();
// // //  d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
// // //  let e = "; expires=" + d.toUTCString();
// // //  document.cookie = cName + "=" + value + e + "; path=/";
// // //  }
// // //  }
// // //  function rCookie(cName) {
// // //  let cookieValue = false;
// // //  let arr = document.cookie.split("; ");
// // //  arr.forEach(str => {
// // //  const cookie = str.split("=");
// // //  if (cookie[0] == cName) {
// // //  cookieValue = cookie[1];
// // //  }
// // //  });
// // //  return cookieValue;
// // //  }
// // //  function dCookie(cName) {
// // //  cCookie(cName, "", -1);
// // //  }

// // //LOCAL STORAGE
// // //Note: Saves key-value pairs in web browser to be used again in new session
// // //Stored information can be retrieved after refreshing page or closing browser
// // //Advantage = not passed around with every HTTP request like cookies.

// // //EXAMPLE 1 (SEE HTML)
// // // let message = "Hello storage!";
// // // localStorage.setItem("example", message);
// // // if (localStorage.getItem("example")) {
// // //   document.getElementById("stored").innerHTML = localStorage.getItem("example");
// // // }

// // //EXAMPLE 2
// // // window.localStorage.key(0); //retrieve key by index

// // // window.localStorage.getItem(window.localStorage.key(0));

// // // window.localStorage.removeItem("name"); //remove key-value pairs

// // // window.localStorage.clear(); //clears local storage

// // //PRACTICE EXERCISE 12.7 (SEE HTML)
// // // const userTask = document.querySelector(".main input");
// // // const addBtn = document.querySelector(".main button");
// // // const output = document.querySelector(".output");
// // // const tasks = JSON.parse(localStorage.getItem("tasklist")) || [];
// // // addBtn.addEventListener("click", createListItem);
// // // if (tasks.length > 0) {
// // //   tasks.forEach((task) => {
// // //     genItem(task.val, task.checked);
// // //   });
// // // }
// // // function saveTasks() {
// // //   localStorage.setItem("tasklist", JSON.stringify(tasks));
// // // }
// // // function buildTasks() {
// // //   tasks.length = 0;
// // //   const curList = output.querySelectorAll("li");
// // //   curList.forEach((el) => {
// // //     const tempTask = {
// // //       val: el.textContent,
// // //       checked: false,
// // //     };
// // //     if (el.classList.contains("ready")) {
// // //       tempTask.checked = true;
// // //     }
// // //     tasks.push(tempTask);
// // //   });
// // //   saveTasks();
// // // }
// // // function genItem(val, complete) {
// // //   const li = document.createElement("li");
// // //   const temp = document.createTextNode(val);
// // //   li.appendChild(temp);
// // //   output.append(li);
// // //   userTask.value = "";
// // //   if (complete) {
// // //     li.classList.add("ready");
// // //   }
// // //   li.addEventListener("click", (e) => {
// // //     li.classList.toggle("ready");
// // //     buildTasks();
// // //   });
// // //   return val;
// // // }
// // // function createListItem() {
// // //   const val = userTask.value;
// // //   if (val.length > 0) {
// // //     const myObj = {
// // //       val: genItem(val, false),
// // //       checked: false,
// // //     };
// // //     tasks.push(myObj);
// // //     saveTasks();
// // //   }
// // // }

// // //JSON
// // //Note: Represent data using format similar to JS objects
// // //Used to communicate with API's

// // //EXAMPLE 1
// // // {
// // // "name" : "Malika",
// // // "age" : 50,
// // // "profession" : "programmer",
// // // "languages" : ["JavaScript", "C#", "Python"],
// // // "address" : {
// // // "street" : "Some street",
// // // "number" : 123,
// // // "zipcode" : "3850AA",
// // // "city" : "Utrecht",
// // // "country" : "The Netherlands"
// // // }
// // // }

// // //EXAMPLE 2
// // // {
// // // "companies": [
// // //     {
// // //     "name": "JavaScript Code Dojo",
// // //     "addresses": [
// // //     {
// // //     "street": "123 Main street",
// // //     "zipcode": 12345,
// // //     "city" : "Scott"
// // //     },
// // //     {
// // //     "street": "123 Side street",
// // //     "zipcode": 35401,
// // //     "city" : "Tuscaloosa"
// // //     }
// // //     ]
// // //     },
// // //     {
// // //     "name": "Python Code Dojo",
// // //     "addresses": [
// // //     {
// // //     "street": "123 Party street",
// // //     "zipcode": 68863,
// // //     "city" : "Nebraska"
// // //     },
// // //     {
// // //     "street": "123 Monty street",
// // //     "zipcode": 33306,
// // //     "city" : "Florida"
// // //     }
// // //     ]
// // //     }
// // //     ]
// // //    }

// // //PRACTICE EXERCISE 12.8
// // // let myList = [
// // //   {
// // //     name: "Learn JavaScript",
// // //     status: true,
// // //   },
// // //   {
// // //     name: "Try JSON",
// // //     status: false,
// // //   },
// // // ];
// // // reloader();
// // // function reloader() {
// // //   myList.forEach((el) => {
// // //     console.log(`${el.name} = ${el.status}`);
// // //   });
// // // }

// // //PARSING JSON
// // //Note: Converting string to JSON
// // //EXAMPLE 1
// // // let str = '{"name": "Maaike", "age": 30}';
// // // let obj = JSON.parse(str);
// // // console.log(obj.name, "is", obj.age);

// // // //EXAMPLE 2
// // // //Converting object to string
// // // let dog = {
// // //   name: "wiesje",
// // //   breed: "dachshund",
// // // };
// // // let strdog = JSON.stringify(dog);
// // // console.log(typeof strdog);
// // // console.log(strdog);

// // //PRACTICE EXERCISE 12.9
// // // let myList = [
// // //   {
// // //     name: "Learn JavaScript",
// // //     status: true,
// // //   },
// // //   {
// // //     name: "Try JSON",
// // //     status: false,
// // //   },
// // // ];
// // // const newStr = JSON.stringify(myList);
// // // const newObj = JSON.parse(newStr);
// // // newObj.forEach((el) => {
// // //   console.log(el);
// // // });

// // //-------------------------------------------------------------------------





// // //CHAPTER PROJECTS
// // // 1. EMAIL EXTRACTOR
// // // const firstArea = document.querySelector("textarea[name='txtarea']");
// // // const secArea = document.querySelector("textarea[name='txtarea2']");
// // // const btn = document.querySelector("button");

// // // btn.addEventListener("click", lookUp);

// // // function lookUp() {
// // //   const inputEmail = firstArea.value;
// // //   const validEmail = inputEmail.match(
// // //     /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi
// // //   );
// // //   const emailList = [];
// // //   for (let x = 0; x < validEmail.length; x++) {
// // //     if (emailList.indexOf(validEmail[x]) === -1) {
// // //       emailList.push(validEmail[x]);
// // //     }
// // //   }
// // //   secArea.value = emailList.join(",");
// // // }






// // // //2. FORM VALIDATOR
// // const myForm = document.querySelector("form");
// // const inputs = document.querySelectorAll("input");
// // const errors = document.querySelectorAll(".error");
// // const required = ["email", "userName", "password"];

// // myForm.addEventListener("submit", validation);

// // function validation(e) {
// //   let data = {};
// //   e.preventDefault();

// //   errors.forEach(function (item) {
// //     item.classList.add("hide");
// //   });

// //   let error = false;

// //   inputs.forEach(function (el) {
// //     let tempName = el.getAttribute("name");
// //     if (tempName != null) {
// //       el.style.borderColor = "#97d328";
// //       if (el.value.length === 0 && required.includes(tempName)) {
// //         addError(el, "Required Field", tempName);
// //         error = true;
// //       }

// //       if (tempName === "email") {
// //         let exp = /([A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[A-Za-z0-9]+)\w+/;
// //         let result = exp.test(el.value);
// //         if (!result) {
// //           addError(el, "Invalid Email", tempName);
// //           error = true;
// //         }
// //       }

// //       if (tempName === "password") {
// //         let exp = /[A-Za-z0-9]+$/;
// //         let result = exp.test(el.value);
// //         if (!result) {
// //           addError(el, "Only numbers and Letters", tempName);
// //           error = true;
// //         }
// //         if (!(el.value.length > 6 && el.value.length < 15)) {
// //           addError(el, "Needs to be between 7-14 " + "characters", tempName);
// //           error = true;
// //         }
// //       }
// //       data[tempName] = el.value;
// //     }
// //   });
// //   if (!error) {
// //     myForm.submit();
// //   }
// // }

// // function addError(el, mes, fieldName) {
// //   let temp = el.nextElementSibling;
// //   temp.classList.remove("hide");
// //   temp.textContent = fieldName.toUpperCase() + " " + mes;
// //   el.style.borderColor = "red";
// //   el.focus();
// // }





// // // //3. SIMPLE MATH QUIZ
// const app = (function () {
  
//   const val1 = document.querySelector(".val1");
//   const val2 = document.querySelector(".val2");
//   const output = document.querySelector(".output");
//   const answer = document.querySelector("input");
//   const game = {};

//   function init() {
//     document.querySelector("button").addEventListener("click", checker);
//     loadQuestion();
//   }

//   function ranValue(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   }

//   function loadQuestion() {
//     game.val1 = ranValue(1, 100);
//     game.val2 = ranValue(1, 100);
//     game.answer = game.val1 + game.val2;
//     val1.textContent = game.val1;
//     val2.textContent = game.val2;
//   }

//   function checker() {
//     let mark = answer.value == game.answer ? "green" : "red";
//     output.innerHTML += 
//     `<div style="color:${mark}"> 
//     ${game.val1} + ${game.val2} = ${game.answer} (${answer.value})
//      </div>`;
//     answer.value = "";
//     loadQuestion();
//   }
//   return {
//     init: init,
//   };
// })();
// document.addEventListener("DOMContentLoaded", app.init);

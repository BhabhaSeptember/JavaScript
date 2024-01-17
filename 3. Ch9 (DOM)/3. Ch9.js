 //DOM is a child object of BOM
 
 // //BOM(BROWSER OBJECT MODEL) aka Window Browser Object
// The element that allows for JS code to communicate with browser
//Window object contains all properties to represent the window of browser e.g.
//-size of window
//-history of previously visited pages
//Window object has global variables & functions


 // //EXAMPLE 1: (Type both examples below in browser console)
 // // console.dir(window) //Shows list of ALL properties of object

 // // //EXAMPLE 2: (Getting length of 'history' object from BOM )
 // // window.history.length;





 // /*  PRACTICE EXERCISE 9.1  */
 // console.log("Inner Height = " + innerHeight + " || Inner Width = " + innerWidth)











 //WINDOW HISTORY OBJECT (GLOBAL VARIABLE) 
 //EXAMPLE 1:
 // // console.dir(window.history); //Option A syntax
 // // console.dir(history);  //Option B syntax

 // // //EXAMPLE 2: (To go back to a previous page- built-in function called "go")
 // // window.history.go(-1);











 // //WINDOW NAVIGATOR OBJECT (GLOBAL VARIABLE)
 //Contains information about browser we are currently using e.g:
 //-the browser
 //-version
 //-operating system the browser is running on

 // //EXAMPLE 1:
 // console.dir(window.navigator);
 // console.dir(navigator);






 // //WINDOW LOCATION OBJECT
 //Contains URL of current web page

 // //EXAMPLE 1:
 // console.dir(window.location); OR
 //console.dir(location);

 //EXAMPLE 2: (finding info from an object within the location object)
 // console.log(location.ancestorOrigins.length); 
 // //Code above shows how many browsers can support our page


 // /*  PRACTICE EXERCISE 9.2  */ // console.log("Protocol = " + window.location.protocol + " || href prop = " + window.location.href ); // console.dir(window);










 // //THE DOM  (Document Object Model)
 // //Displays structure of HTML document as a logical tree
 // /*
 // i.e. HTML-->1.Head, 2.Body--> (1.1.title); (2.1.h1, 2.2.div)--> (2.2.1.p, 2.2.2.a)
 // */




 // //ADDITIONAL DOM PROPERTIES (child object of BOM)
 //Below shows HTML elements & JS code etc...
 // //EXAMPLE 1: (Type below code in browser console)
 // console.dir(document);








// //SELECTING PAGE ELEMENTS  ( querySelector()  or querySelectorAll()  )
//i.e. Selecting page elements to use within JS code in order to work with them
//Can select the elements by tagname, ID or class


// //EXAMPLE 1: 
// Returns first element within the document that matches the specified selector
// //REFER TO 3.CH9.html for related HTML code
// const ele1 = document.querySelector("h1");
// console.dir(ele1);  //Returns properties of that element


// //EXAMPLE 2:
//Returns static nodelist or 
//list of documents elements that match specified group of selectors
const eles = document.querySelectorAll(".output");
console.log(eles); 






/*  PRACTICE EXERCISE 9.3  */
//Refer to (3. Ch9.html  Example 4)

    // const output = document.querySelector('.output');  //1. Selecting page element as JS object
    // output.textContext = "The Crotchet Hub";  //2. Updating text context property 
    // console.log(output);
    // output.classList.add("red"); //3.
    // output.id = "tester";
    // output.style.backgroundColor = "red";
    // console.log(   "1. URL (" + document.URL + ")"   ); 
    // output.textContext = document.URL;
    // console.log(    "2. Updated Output Text Context (" + output.textContext + ")"    );



































// //CHAPTER PROJECT
// //MANIPULATING HTML ELEMENTS WITH JS
// const output = document.querySelector(".output");
// const mainList = output.querySelector("ul");  //becomes 'ul' tag
// mainList.id = "mainList";  //'ul' tag assigned ID of 'mainList'
// console.log(mainList);

// const divTagNames = document.querySelectorAll("div"); //searching tagName of each div

// for (let i = 0; i < divTagNames; i++) {
//     console.log(   "Tag Names = (" + divTagNames[i].tagName + ")"  );
//     divTagNames[i].id = "ID = " + (i + 1);
//     if (i % 2) {
//         divTagNames[i].style.color = "red"; //Even numbers
//     } else {
//         divTagNames[i].style.color = "blue"; //Odd numbers
//     }
// }




//SELF-CHECK QUIZ
//1. See textbook forinstructions
//2. 
// document.body.textContext = "The Crotchet Hub"
// //3.
// for (const property in document){
//     console.log(`${property}: ${document[property]}`);
// }


// //4.
// for (const property in window) {
//     console.log(`${property}: ${document[window]}`);
// }


//5. Please see 3. Ch9.html Example 



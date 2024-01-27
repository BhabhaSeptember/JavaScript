// // // // // // // // // // // //TRAVERSING THE DOM
// // // // // // // // // // // // // //EXAMPLE 1: (Check html for code || JS to be inserted in browser console)
// // // // // // // // // // // // // console.dir(document.body); //Prints directory

// // // // // // // // // // // // // //Code below finds 'treasure' using children
// // // // // // // // // // // // // console.dir(document.body.children.forest.children.tree2.children.shrubbery.children.treasure);

// // // // // // // // // // // // //Finding 'treasure' using childNodes (type in browser console)
// // // // // // // // // // // // // console.dir(document.body.childNodes[9].childNodes[3].childNodes[1].childNodes[1]);

// // // // // // // // // // // // //Combination using both childNodes & children (type in browser console)
// // // // // // // // // // // // // console.dir(document.body.childNodes[9].childNodes[3].childNodes[1].children.treasure);

// // // // // // // // // // // // //Moving up the DOM
// // // // // // // // // // // // // document.body.children.forest.children.tree2.parentElement;

// // // // // // // // // // // // //Move sideways in the DOM i.e. among children of some parent object
// // // // // // // // // // // // //Examples:
// // // // // // // // // // // // document.body.children.forest.children.tree2;

// // // // // // // // // // // // //Moves to tree1
// // // // // // // // // // // // document.body.children.forest.children.tree2.previousElementSibling;

// // // // // // // // // // // // //Moves back to tree2
// // // // // // // // // // // // //NOTE: Can use 'nextSibling'--> returns next node of any type
// // // // // // // // // // // // document.body.children.forest.children.tree1.nextElementSibling;

// // // // // // // // // // // /*   PRACTICE EXERCISE 10.1   */
// // // // // // // // // // // //1.
// // // // // // // // // // // // console.dir(document.body);

// // // // // // // // // // // //2. Finding 'ul' & 'Purple' by traversing DOM
// // // // // // // // // // // // console.dir(document.body.children[2].childNodes[1].childNodes[1]); //ul

// // // // // // // // // // // // console.dir(document.body.children[2].children[4].childNodes[0]); //Purple

// // // // // // // // // // // //3.
// // // // // // // // // // // console.dir(document.body.children[2].children[0].childNodes[1].children[0].childNodes[0]);

// // // // // // // // // // // console.dir(document.body.children[2].children[0].childNodes[1].children[0].nextElementSibling.childNodes[0]);

// // // // // // // // // // //SELECTING ELEMENTS AS OBJECTS
// // // // // // // // // // //EXAMPLE 1:
// // // // // // // // // // document.body.children.greeting;   //Prints "Hi!" on webpage doc

// // // // // // // // // // //CHANGING  'innerTEXT'  vs  'innerHTML'  vs  'textContent'
// // // // // // // // // // document.body.children.greeting.innerText = "Bye!";  //Prints "Bye!" on webpage doc
// // // // // // // // // // document.body.children.greeting.innerHTML = "<h1> Bye! </h1>"; //recognizes tags
// // // // // // // // // // document.body.children.greeting.textContent = "<h1> Bye! </h1>"; //Does not recognize html tags

// // // // // // // // // //ACCESSING ELEMENTS IN THE DOM
// // // // // // // // // //ACCESSING ELEMENTS BY ID
// // // // // // // // // //EXAMPLE 1:
// // // // // // // // // console.log(document.getElementById("two"));

// // // // // // // // //ACCESSING ELEMENTS BY TAG NAME
// // // // // // // // //EXAMPLE 1:
// // // // // // // // // let list = document.getElementsByTagName("div");
// // // // // // // // // console.log(list);

// // // // // // // // //EXAMPLE 2: (using item())
// // // // // // // // // console.log(list.item(0));
// // // // // // // // // console.log(list.item(1));
// // // // // // // // // console.log(list.item(2));

// // // // // // // // //EXAMPLE 3: (using namedItem())
// // // // // // // // // console.log(list.namedItem("one"));

// // // // // // // // //EXAMPLE 4:
// // // // // // // // // let list = document.getElementsByTagName("h1");
// // // // // // // // // console.log(list);

// // // // // // // // /*   PRACTICE EXERCISE 10.3   */
// // // // // // // // let elements = document.getElementsByTagName("div");
// // // // // // // // console.log(elements);

// // // // // // // // console.log(elements.item(1)); //OR...
// // // // // // // // console.log(elements[1]);

// // // // // // // //ACCESSING ELEMENTS BY CLASS NAME
// // // // // // // // let elements = document.getElementsByClassName("example");
// // // // // // // // console.log(elements);

// // // // // // // /*  PRACTICE EXERCISE 10.4  */
// // // // // // // // let elements = document.getElementsByClassName("cardio");
// // // // // // // // console.log(elements);

// // // // // // // // console.log(elements[0]);
// // // // // // // // console.log(elements.item(1));

// // // // // // // /*  PRACTICE EXERCISE 10.5  */
// let element = document.querySelector(".cardio");
// console.log(element);

// // // // // // // // /*  PRACTICE EXERCISE 10.6  */
// let element2 = document.querySelectorAll(".cardio");
// console.log(element2);
// //Looping through every element One-at-a-time through array
// element2.forEach(e => console.log(e.textContent));

// // // // // // //ELEMENT CLICK HANDLER
// // // // // //EXAMPLE 3 JS (PLEASE SEE HTML)
// // // // // document.getElementById("one").onclick = function () {
// // // // //     alert("Auch! Stop!");
// // // // //     }

// // // // //THIS & THE DOM
// // // // //EXAMPLE 1:
// // // // // function reveal(el) {
// // // // //   console.log(el);
// // // // // }

// // // // // //EXAMPLE 2:
// // // // // function reveal(el) {
// // // // //   console.log(el.parentElement); //LOGS 'body' object
// // // // // }

// // // // // /*     PRACTICE EXERCISE 10.7      */
// // // // // function reveal(el) {
// // // // //     console.dir(el.textContent);
// // // // // }

// // // // // //MANIPULATING ELEMENT STYLE
// // // // // // EXAMPLE 1:
// // // // // function toggleDisplay() {
// // // // //   let p = document.getElementById("magic");
// // // // //   if (p.style.display === "none") {
// // // // //     p.style.display = "block";
// // // // //   } else {
// // // // //     p.style.display = "none";
// // // // //   }
// // // // // }

// // // // // //EXAMPLE 2: (see 'style' tag in head above)
// // // // // function rainbowify() {
// // // // //   let divs = document.getElementsByTagName("div");
// // // // //   for (let i = 0; i < divs.length; i++) {
// // // // //     divs[i].style.backgroundColor = divs[i].id;
// // // // //   }
// // // // // }

// // // // //CHANGING CLASSES OF AN ELEMENT
// // // // //ADDING CLASSES TO ELEMENTS
// // // // // function disappear() {
// // // // //   document.getElementById("shape").classList.add("hide");
// // // // // }

// // // // // function change() {
// // // // //   document.getElementById("shape").classList.remove("blue");
// // // // // }

// // // // // //TOGGLING CLASSES
// // // // // //EXAMPLE 1:
// // // // // function changeVisibility(){
// // // // //     document.getElementById("shape").classList.toggle("hide");
// // // // //     }

// // // // // //MANIPULATING ATTRIBUTES
// // // // // function changeAttr() {
// // // // //   let el = document.getElementById("shape");
// // // // //   el.setAttribute("style", "background-color: red; border: 1px solid black");
// // // // //   el.setAttribute("id", "new");
// // // // //   el.setAttribute("class", "circle");
// // // // // }




// // // // // /*    PRACTICE EXERCISE 10.8     */
// // // // // const message = document.querySelector("#message");
// // // // // const myArray = [
// // // // //   "TJ",
// // // // //   "Lettie",
// // // // //   "Hadiyo",
// // // // //   "Dorette",
// // // // //   "Bhabha",
// // // // //   "Natasha",
// // // // //   "Thabiso",
// // // // // ];

// // // // // build();
// // // // // //addClicks();

// // // // // function build() {
// // // // //   let html = "<h1> Bootcamp 2023 - Group C </h1> <table>";
// // // // //   myArray.forEach((item, index) => {
// // // // //     html += `<tr class = "box" data-row = "${index + 1}" data-name = "${item}" onclick = "getData(this)" > <td> ${item} </td>`;
// // // // //     html += `<td> ${index + 1} </td> </tr>`;
// // // // //   });
// // // // //   html += "</table>";
// // // // //   document.getElementById("output").innerHTML = html;
// // // // // }

// // // // // function getData(el) {
// // // // //   let temp = el.getAttribute("data-row");
// // // // //   let tempName = el.getAttribute("data-name");
// // // // //   message.innerHTML = `${tempName} is in row #${temp}`;
// // // // // }




// // // // //ELEMENT LISTENERS ON ELEMENTS
// // // // //SYNTAX
// // // // // addEventListener("event", function);

// // // // //EXAMPLE 1:
// window.onload = function() {
//     document.getElementById("square").addEventListener("click", changeColor);
//     }
//     function changeColor(){
//     let red = Math.floor(Math.random() * 256);
//     let green = Math.floor(Math.random() * 256);
//     let blue = Math.floor(Math.random() * 256);
//     this.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;  //USES hexadecimal number for colors
//     }





// // // /*      PRACTICE EXERCISE 10.9    */
// // // // let buttons = document.querySelectorAll("button");
// // // // buttons.forEach( (button) => {
// // // //    function output() {
// // // //     console.log(this.textContent);
// // // //    }
// // // //    button.addEventListener("click", output);
// // // // });





// // // // //CREATING NEW ELEMENTS
// // // // function addRandomNumber(){
// // // //     let el = document.createElement("p");
// // // //     el.innerText = Math.floor(Math.random() * 100);
// // // //     document.body.appendChild(el);
// // // //     }





// // //     /* PRACTICE EXERCISE 10.10 */
// // // document.getElementById("addNew").onclick = function () {
// // //     addOne();
// // // }

// // // function addOne() {
// // //     var a = document.getElementById("addItem").value;
// // //     var li = document.createElement("li");
// // //     li.appendChild(document.createTextNode(a));
// // //     document.getElementById("sList").appendChild(li);
// // // }













// SELF-CHECK QUIZ
// //1. Hello <br> World
// var output = document.getElementById('output');
// output.innerText = "Hello <br> World";  //'innerText' changes text but cannot recognize HTML tags

// //2. Hello <br> World
// document.getElementById('output').innerHTML = "Hello <br> World";  //Remember: 'innerHTML' reads HTML inserted in quotes

//3. Hello World
// <input type="text" id="val" value="JavaScript"></input>


// //4. Click Three LOGS 'three' || Click  One LOGS 'one' 'two' 'three' 
// function output(val) {
// console.log(val);
// }


//5. btn.removeEventListener("click", myFun);
// const btn = document.querySelector(".btn");
// btn.addEventListener("click", myFun);
// function myFun() {
// console.log("clicked");
// }

// btn.removeEventListener("click", myFun);
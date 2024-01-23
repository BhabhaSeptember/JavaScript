//LOCAL FILE READER (SEE HTML)
// let message = document.getElementById("message");
// if (window.FileReader) {
//   message.innerText = "Good to go!";
// } else {
//   message.innerText = "No FileReader :( ";
// }

//UPLOADING FILES (SEE HTML)
// EXAMPLE 1 (SINGLE FILE)
// let message = document.getElementById("message");
// function uploadFile(files) {
//   console.log(files[0]);
//   message.innerText = files[0].name;
// }

// EXAMPLE 2 (MULTIPLE FILES)
// let message = document.getElementById("message");
// function uploadFile(files) {
//   for (let i = 0; i < files.length; i++) {
//         message.innerHTML += files[i].name + "<br>";
//   }
// }

// //READING FILES
// let message = document.getElementById("message");
// function uploadAndReadFile(files) {
//   let fr = new FileReader();
//   fr.onload = function (e) {  //sends event data
//     message.innerHTML = e.target.result;
//   };
//   fr.readAsText(files[0]); //reading data using readAs() method on FileReader object
// }

//PRACTICE EXERCISE 14.1 (SEE HTML & CSS)
// const output = document.querySelector(".output");
// const myInput = document.querySelector("input");

// myInput.addEventListener("change", uploadAndReadFile);

// function uploadAndReadFile(e) {
//   const files = e.target.files;
//   for (let i = 0; i < files.length; i++) {
//     const file = files[i];
//     const img = document.createElement("img");
//     img.classList.add("thumb");
//     img.file = file; //image file set as file within loop, selected from user input field
//     output.appendChild(img);
//     const reader = new FileReader();

//     reader.onload = (function (myImg) {
//       return function (e) {
//         myImg.src = e.target.result; //anon func gets source of img as target el result
//       };
//     })(img); //created img object passed in as argument to anon func
//     reader.readAsDataURL(file);
//   }
// }

// GETTING POSITION DATA WITH GEOLOCATION
//EXAMPLE 1
//Below inspects 'navigator.geolocation' in browser console
// window.onload = init;
// function init() {
//   console.dir(navigator.geolocation);
// }

//EXAMPLE 2
//Retrieve current position of user
// window.onload = init;
// function init() {
//   navigator.geolocation.getCurrentPosition(showGeoPosition);
// }
// function showGeoPosition(data) {
//       console.dir(data);
// }

//HTML5 CANVAS (SEE HTML)
// let canvas = document.getElementById("c1");
// let ctx = canvas.getContext("2d"); //reading & storing canvas context
// canvas.width = 500; //px (adds html attributes)
// canvas.height = 500; //px
// ctx.fillStyle = "red";
// ctx.fillRect(250, 250, 100, 100);  //(x-coordin, y-coordin, width, height)

//PRACTICE EXERCISE 14.2 (SEE HTML & CSS)
// const canvas = document.querySelector("#canvas");
// const ctx = canvas.getContext("2d");
// ctx.fillStyle = "red";
// ctx.fillRect(100, 100, 500, 300); //filled shape
// ctx.strokeRect(90, 90, 520, 320); // outline
// ctx.clearRect(150, 150, 400, 200); //transparent

//DYNAMIC CANVAS
//ADDING LINE & CIRCLES TO THE CANVAS
//EXAMPLE 1: LINE
// let canvas = document.getElementById("canvas1");
// let ctx = canvas.getContext("2d");
// canvas.width = 100;
// canvas.height = 100;
// ctx.lineWidth = 2;
// ctx.moveTo(0, 20); //first focus (x=0, y=20)
// ctx.lineTo(50, 100); //second point
// ctx.stroke(); //does the drawing

// //EXAMPLE 2: CIRCLE
// let canvas2 = document.getElementById("canvas2");
//  let ctx2 = canvas2.getContext("2d");
//  canvas2.width = 150;
//  canvas2.height = 200;
//  ctx2.beginPath();
//  ctx2.arc(75, 100, 50, 0, Math.PI * 2); //(start x, y, radius ,start angle -radians, end angle)
//  ctx2.stroke();

//PRACTICE EXERCISE 14.3 (SEE HTML & CSS)
// let canvas = document.getElementById("canvas");
// let ctx = canvas.getContext("2d");
// ctx.beginPath();
// ctx.fillStyle = "grey";
// ctx.arc(300, 130, 100, 0, Math.PI * 2);
// ctx.fill();

// ctx.beginPath();
// ctx.fillStyle = "green";
// ctx.arc(250, 120, 20, 0, Math.PI * 2); //left eye
// ctx.moveTo(370, 120);
// ctx.arc(350, 120, 20, 0, Math.PI * 2); //right eye
// ctx.moveTo(240, 160);
// ctx.arc(300, 160, 60, 0, Math.PI ); //mouth
// ctx.fill();

// ctx.moveTo(300, 130);
// ctx.lineTo(300, 150); //nose
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(300, 230);
// ctx.lineTo(300, 270);
// ctx.lineTo(400, 270);
// ctx.lineTo(200, 270);
// ctx.lineTo(300, 270);
// ctx.lineTo(300, 350);
// ctx.lineTo(400, 500);
// ctx.moveTo(300, 350);
// ctx.lineTo(200, 500);
// ctx.stroke();
// ctx.beginPath();
// ctx.fillStyle = "brown";
// ctx.moveTo(200, 50);
// ctx.lineTo(400, 50);
// ctx.lineTo(300, 20);
// ctx.lineTo(200, 50);
// ctx.fill();
// ctx.stroke();

//ADDING TEXT TO CANVAS
// let canvas = document.getElementById("canvas1");
//  let ctx = canvas.getContext("2d");
//  canvas.width = 200;
//  canvas.height = 200;
//  ctx.font = "24px Arial";
//  let txt = "A canvas!";
// ctx.fillText(txt, 10, 35);  //(text, x position, y position)
//  ctx.textAlign = "center";

//PRACTICE EXERCISE 14.4
// const canvas = document.querySelector("#canvas");
// const ctx = canvas.getContext("2d");
// const str = "Hello World";
// ctx.font = "italic 50px Comic";
// ctx.fillStyle = "blue";
// ctx.textAlign = 'left';
// ctx.fillText(str, 100, 100);

// ctx.font = "bold 20px Arial";
// ctx.fillStyle = "red";
// for (let x = 1; x < 11; x++) {
//   ctx.fillText("counter:" + x, 50, 200 + 40 * x);
// }

//ADDING & UPLOADING IMAGES TO THE CANVAS
//EXAMPLE 1
// //Below ensures img is loaded before getting it from DOM or else canvas will remain empty
// window.onload = function () {
//   let canvas = document.getElementById("c1");
//   let ctx = canvas.getContext("2d");
//   canvas.height = 500;
//   canvas.width = 1000;
//   let myImage = document.getElementById("flower");
//   ctx.drawImage(myImage, 10, 10);  // (img, x position, y position)
// };

// //EXAMPLE 2
// //USING ONE CANVAS INSIDE ANOTHER CANVAS
// let canvas1 = document.getElementById("canvas1");
// let ctx1 = canvas1.getContext("2d");
// ctx1.strokeRect(5, 5, 150, 100);  //(x, y, width, height)

// // let canvas2 = document.getElementById("canvas2");
// let ctx2 = canvas2.getContext("2d");
// ctx2.beginPath();
// ctx2.arc(60, 60, 20, 0, 2 * Math.PI); // (x, y, radius, start angle, end angle)
// ctx2.stroke();

// // let canvas3 = document.getElementById("canvas3");
// let ctx3 = canvas3.getContext("2d");
// ctx3.drawImage(canvas1, 10, 10);  // (img, x, y)
// ctx3.drawImage(canvas2, 10, 10);

// //EXAMPLE 3
// //UPLOADING IMAGES TO CANVAS
// let canvas = document.getElementById("canvas");
// let ctx = canvas.getContext("2d");
// let imgLoader = document.getElementById("imgLoader");
// imgLoader.addEventListener("change", uploadImage, false);

// function uploadImage() {
//   let fr = new FileReader();
//   fr.readAsDataURL(event.target.files[0]);  //adding uploaded file then triggers onload event

//   fr.onload = function (e) { //creates new img to be added to canvas later
//     let img = new Image();
//     img.src = event.target.result; //result of fileReader action

//     img.onload = function () { //once img has loaded
//       canvas.width = img.width;
//       canvas.height = img.height;
//       ctx.drawImage(img, 0, 0);
//     };
//     console.log(fr);
//   };
// }

//PRACTICE EXERCISE 14.5
// const canvas = document.querySelector("#canvas");
// const ctx = canvas.getContext("2d");
// const imgLoader = document.querySelector("#imgLoader");

// imgLoader.addEventListener("change", handleUpload);

// function handleUpload(e) {
//   console.log(e);
//   const reader = new FileReader();
//   reader.onload = function (e) {
//     console.log(e);
//     const img = new Image();
//     img.onload = function () {
//       canvas.width = img.width / 2;
//       canvas.height = img.height / 2;
//       ctx.drawImage(img, 0, 0, img.width / 2, img.height / 2);
//     };
//     img.src = e.target.result; //result from input value
//   };
//   reader.readAsDataURL(e.target.files[0]);
// }

//ADDING ANIMATIONS TO THE CANVAS
// window.onload = init;

// let canvas = document.getElementById("canvas");
// let ctx = canvas.getContext("2d");
// canvas.height = 500;
// canvas.width = 500;

// let pos = {
//   x: 0,
//   y: 50,
// };

// function init() {
//   draw();
// }
// function draw() {
//   //clears entire canvas including previously drawn square to create illusion of animation
//   // ctx.clearRect(0, 0, canvas.width, canvas.height);
//   pos.x = pos.x + 5; //creates new starting x position after every 50ms
//   if (pos.x > canvas.width) {
//     pos.x = 0;
//   }
//   if (pos.y > canvas.height) {
//     pos.y = 0;
//   }
//   ctx.fillRect(pos.x, pos.y, 100, 100); //draws square of 100x100
//   window.setTimeout(draw, 50);  //draws new square every 50ms
// }

//PRACTICE EXERCISE 14.6
// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");

// const ballSize = 10; //radius

// let x = canvas.width / 2; //x position
// let y = canvas.height / 2; //y position

// let dirX = 1;
// let dirY = 1;

// function drawBall() {
//   ctx.beginPath();
//   ctx.arc(x, y, ballSize, 0, Math.PI * 2);
//   ctx.fillStyle = "red";
//   ctx.fill();
//   ctx.closePath();
// }
// function moveBall() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   drawBall();
//   if (x > canvas.width - ballSize || x < ballSize) {
//     dirX *= -1;
//   }
//   if (y > canvas.height - ballSize || y < ballSize) {
//     dirY *= -1;
//   }
//   x += dirX;
//   y += dirY;
// }
// setInterval(moveBall, 10); //10ms

//DRAWING ON CANVAS WITH A MOUSE
// window.onload = init;

// let bgC = document.getElementById("bgColor");
// // let bgColor = "pink";

// bgC.addEventListener("change", function () {
//   bgColor = event.target.value;  //change color according to color picker selection
// });

// let pos = {
//   x: 0,
//   y: 0,
// };
// let canvas = document.getElementById("canvas");
// let ctx = canvas.getContext("2d");
// canvas.width = 700;
// canvas.height = 700;

// function setPosition(e) {
//   pos.x = e.pageX; //page property to get current position of mouse
//   pos.y = e.pageY;
// }

// function init() {
//   canvas.addEventListener("mousemove", draw);
//   canvas.addEventListener("mousemove", setPosition); //change current position on canvas
//   canvas.addEventListener("mouseenter", setPosition);
// }

// function draw(e) {
//   if (e.buttons !== 1) return; //returns from method if mouse is not clicked
//   ctx.beginPath();
//   ctx.moveTo(pos.x, pos.y);
//   setPosition(e); //setting new coordinates to draw below line
//   ctx.lineTo(pos.x, pos.y);
//   ctx.lineWidth = 10;
//   ctx.lineCap = "round"; //creates smooth lines
//   ctx.stroke();

// }

//SAVING DYNAMIC IMAGES
//Note: Converting canvas to an image then saving it
//Change canvas to dataURL
//Make URL source for img
//Save button updates img with generated URL from canvas

//EXAMPLE
// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");
// canvas.width = 200;
// canvas.height = 200;
// const penColor = document.getElementById("squareColor");
// penColor.addEventListener("change", function () {
//   color = event.target.value;
//   draw(color);
// });
// document.getElementById("save").addEventListener("click", function () {
//   let dataURL = canvas.toDataURL();
//   document.getElementById("holder").src = dataURL;
// });
// function draw(color) {
//   ctx.fillStyle = color;
//   ctx.fillRect(70, 70, 100, 100);
// }

//MEDIA ON PAGE (SEE HTML)

// ------------------------------------------------------------------------------------------

//CHAPTER PROJECTS
//1. MATRIX EFFECT
// const canvas = document.createElement("canvas");
// const ctx = canvas.getContext("2d");
// canvas.setAttribute("width", "500");
// canvas.setAttribute("height", "400");
// document.body.prepend(canvas);

// const colVal = [];
// for (let x = 0; x < 50; x++) { // # of value 0 items to be added to array (10px between each column)
//   colVal.push(0);
// }

// function matrix() {
//   ctx.fillStyle = "rgba(0,0,0,.05)"; //opacity produces fading effect when layered ontop of existing elements
//   ctx.fillRect(0, 0, canvas.width, canvas.height);

//   ctx.fillStyle = "green"; //canvas font color

//   colVal.map((posY, index) => { //array holds vertical color position for output text
//     let output = Math.random() < 0.5 ? 0 : 1;
//     let posX = index * 10 + 10; //setting separated columns for each new character
//     //below fills canvas
//     ctx.fillText(output, posX, posY); //zero's in array are starting vertical position for content

//     //below: larger numbers fall further down y-axis
//     //random number creates staggered effect
//     if (posY > 100 + Math.random() * 300) {
//       colVal[index] = 0;
//     } else {
//       //below moves letter down 10px on canvas within next draw round
//       colVal[index] = posY + 10;
//     }
//   });
// }
// setInterval(matrix, 50); //matrix to run at 50ms intervals

//2. COUNTDOWN CLOCK
// const endDate = document.querySelector("input");
// const clock = document.querySelector(".clock");
// let timeInterval;
// let timeStop = true;

// //below: check if item for countdown already set,
// const savedValue = localStorage.getItem("countdown") || false;
// // if there is saved item --> use that value
// if (savedValue) {
//   startClock(savedValue);
//   let inputValue = new Date(savedValue);
//   endDate.valueAsDate = inputValue; //input field date value set to local storage saved val
// }

// endDate.addEventListener("change", function (e) { //if input field is changed
//   e.preventDefault();
//   clearInterval(timeInterval);
//   const temp = new Date(endDate.value);
//   localStorage.setItem("countdown", temp); //set new endDate value in local storage
//   startClock(temp); //start clock function from new endDate value
//   timeStop = true;
// });

// function startClock(d) { //function starts clock that is used to start counter
//   //below function updates counter
//   function updateCounter() {
//     let tl = timeLeft(d);
//     if (tl.total <= 0) {
//       timeStop = false; //stops the timer
//     }
//     for (let pro in tl) {
//       let el = clock.querySelector("." + pro);
//       if (el) {
//         el.innerHTML = tl[pro];
//       }
//     }
//   }
//   //below: if timeStop is true we continue updating counter every second otherwise we stop
//   updateCounter();
//   if (timeStop) {  //timeStop = true i.e. continue counting down
//     timeInterval = setInterval(updateCounter, 1000);
//   } else {
//     clearInterval(timeInterval);
//   }
// }

// function timeLeft(d) {
//   let currentDate = new Date();
//   let t = Date.parse(d) - Date.parse(currentDate);
//   let seconds = Math.floor((t / 1000) % 60);
//   let minutes = Math.floor((t / 1000 / 60) % 60);
//   let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
//   let days = Math.floor(t / (1000 * 60 * 60 * 24));
//   return {
//     total: t,
//     days: days,
//     hours: hours,
//     minutes: minutes,
//     seconds: seconds,
//   };
// }

// //3. ONLINE PAINT APP
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const penColor = document.querySelector("#penColor");
const penWidth = document.querySelector("#penWidth");
const btnSave = document.querySelector(".save");
const btnClear = document.querySelector(".clear");
const output = document.querySelector(".output");

const mLoc = { //tracks location of pen
  draw: false,
  x: 0,
  y: 0,
  lastX: 0,
  lastY: 0,
};

canvas.style.border = "1px solid black";
btnSave.addEventListener("click", saveImg);
btnClear.addEventListener("click", clearCanvas);

canvas.addEventListener("mousemove", (e) => {
  mLoc.lastX = mLoc.x; //updates pen position to lastX position
  mLoc.lastY = mLoc.y;
  //console.log(e);
  mLoc.x = e.clientX; //sets location position to clientX
  mLoc.y = e.clientY;
  draw();
});

canvas.addEventListener("mousedown", (e) => {
  mLoc.draw = true;
});
canvas.addEventListener("mouseup", (e) => {
  mLoc.draw = false;
});
canvas.addEventListener("mouseout", (e) => {
  mLoc.draw = false;
});

function draw() {
  if (mLoc.draw) {
    ctx.beginPath();
    ctx.moveTo(mLoc.lastX, mLoc.lastY);
    ctx.lineTo(mLoc.x, mLoc.y);
    ctx.strokeStyle = penColor.value;
    ctx.lineWidth = penWidth.value;
    ctx.stroke();
    ctx.closePath();
  }
}

function saveImg() {
  const dataURL = canvas.toDataURL();
  console.log(dataURL);
  const img = document.createElement("img");
  output.prepend(img);
  img.setAttribute("src", dataURL);
  const link = document.createElement("a"); //to set download must create an anchor tag
  output.append(link);
  let fileName = Math.random().toString(16).substr(-8) + ".png";
  link.setAttribute("download", fileName); //hyperlink set to download attribute
  link.href = dataURL;
  link.click();
  output.removeChild(link);
}


function clearCanvas() {
  let temp = confirm("Are you sure you want to clear the canvas? Changes will not be saved.");
  if (temp) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}



//LOCAL FILE READER (SEE HTML)
// let message = document.getElementById("message");
// if (window.FileReader) {
//   message.innerText = "Good to go!";
// } else {
//   message.innerText = "No FileReader :(";
// }

//UPLOADING FILES (SEE HTML)
//EXAMPLE 1 (SINGLE FILE)
// let message = document.getElementById("message");
// function uploadFile(files) {
//   console.log(files[0]);
//   message.innerText = files[0].name;
// }

//EXAMPLE 2 (MULTIPLE FILES)
// let message = document.getElementById("message");
// function uploadFile(files) {
//   for (let i = 0; i < files.length; i++) {
//         message.innerHTML += files[i].name + "<br>";
//   }
// }

//REVISIT
// //READING FILES
// let message = document.getElementById("message");
// function uploadAndReadFile(files) {
//   let fr = new FileReader();
//   fr.onload = function (e) {
//     message.innerHTML = e.target.result;
//   };
//   fr.readAsText(files[0]);
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

//NB: REVISIT
//HTML5 CANVAS
// let canvas = document.getElementById("c1");
// let ctx = canvas.getContext("2d");
// canvas.width = 500; //px
// canvas.height = 500; //px
// ctx.fillStyle = "red";
// ctx.fillRect(250, 250, 100, 100);  //(x-coordin, y-coordin, width, height)

//PRACTICE EXERCISE 14.2
//ADDING LINE & CIRCLES TO THE CANVAS
//PRACTICE EXERCISE 14.3
//ADDING TEXT TO CANVAS
//PRACTICE EXERCISE 14.4
//ADDING & UPLOADING IMAGES TO THE CANVAS
//PRACTICE EXERCISE 14.5
//ADDING ANIMATIONS TO THE CANVAS
//PRACTICE EXERCISE 14.6

//DRAWING ON CANVAS WITH A MOUSE
window.onload = init;
let pos = {
  x: 0,
  y: 0,
};
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
canvas.width = 700;
canvas.height = 700;

function setPosition(e) {
    pos.x = e.pageX;
    pos.y = e.pageY;
   }

function init() {
  canvas.addEventListener("mousemove", draw);
  canvas.addEventListener("mousemove", setPosition);
  canvas.addEventListener("mouseenter", setPosition);
}

function draw(e) {
    if (e.buttons !== 1) return;
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
    setPosition(e);
    ctx.lineTo(pos.x, pos.y);
    ctx.lineWidth = 10;
    ctx.lineCap = "round";
    ctx.stroke();
   }


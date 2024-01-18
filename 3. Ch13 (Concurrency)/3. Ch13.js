//INTRO CONCURRENCY
//Note: Computer performs multiple tasks at the same time

//CALLBACKS
//Note: Function calling a function
//EXAMPLE 1
// function doSomething(callback) {
//     callback();
//    }
//    function sayHi() {
//     console.log("Hi!");
// }
// doSomething(sayHi);

//EXAMPLE 2
function judge(grade) {
  switch (true) {
    case grade === "A":
      console.log("You got an", grade, ": amazing!");
      break;
    case grade === "B":
      console.log("You got a", grade, ": well done!");
      break;
    case grade === "C":
      console.log("You got a", grade, ": alright.");
      break;
    case grade === "D":
      console.log("You got a", grade, ": hmmm...");
      break;
    default:
      console.log("An", grade, "! What?!");
  }
}
function getGrade(score, callback) {
  let grade;
  switch (true) {
    case score >= 80:
      grade = "A";
      break;
    case score >= 70:
      console.log(score);
      grade = "B";
      break;
    case score >= 60:
      grade = "C";
      break;
    case score >= 50:
      grade = "D";
      break;
    default:
      grade = "F";
  }
  callback(grade);
}
getGrade(85, judge);

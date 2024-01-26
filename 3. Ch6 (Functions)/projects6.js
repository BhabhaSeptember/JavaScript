
//                         /* READY FOR REVIEW  */


// // // // //CHAPTER PROJECTS
// // // // //1. CREATE RECURSIVE FUNCTION
// // const countUp = function countingUp(i) {
// //     console.log(i);
// //     if (i < 10) {
// //     return countingUp(i + 1);
// //     }
// //     return;
// //     }

// //     countUp(0);
// //      countUp(5);
// //      countUp(10);


    





// // // // //2. SET TIMEOUT ORDER
// //
// const one = () => console.log("1. One");
// const two = () => console.log("2. Two");
// one();
// two();
 
// // 
// const three = () => {
//   console.log("3. Three");
//   one();
//   two();
// }
// three();

// //  
// const four = ()=> {
//   console.log("4. Four");
//   one();
//   setTimeout(three, 10000);
  
// }
// four();




// // // //SELF-CHECK QUIZ
// // // //1. 10
// // // let val = 10;
// // // function tester(val){
// // // val += 10;
// // // if(val < 100){
// // // return tester(val);
// // // }
// // // return val;
// // // }
// // // tester(val);
// // // console.log(val);

// // //2. Hello
// // // let testFunction = function(){
// // //   console.log("Hello");
// // //   }();


// // //3. Welcome || Laurence || My name is Laurence
// // (function () {
// //   console.log("Welcome");  //LOGS: Welcome
// //   })();

// //   (function () {
// //   let firstName = "Laurence";
// //   })();

// //   let result = (function () {
// //   let firstName = "Laurence";
// //   return firstName;
// //   })();
// //   console.log(result);   //LOGS: Laurence

// //   (function (firstName) {
// //   console.log("My Name is " + firstName);
// //   })("Laurence");  //LOGS: My name is Laurence


// //4. 19
// // let test2 = (num) => num + 5;
// // console.log(test2(14));


// //5. 16
// // var addFive1 = function addFive1(num) {
// //   return num + 2;
// //   };
// //   let addFive2 = (num) => num + 2;
// //   console.log(addFive1(14));
// PROJECT
function store() {
  //stores items in the localStorage
  var brand = document.getElementById("carBrand").value;
  var price = document.getElementById("carPrice").value;
  var key = document.getElementById("key").value; //gets the key from the user

  const car = {
    brand: brand,
    price: price,
  };

  window.localStorage.setItem(key, JSON.stringify(car));
  //converting object to string
}


function retrieveRecords() {
  //retrieves items in the localStorage
  console.log("retrieve records");
  var key = document.getElementById("retrieveKey").value;
  var records = window.localStorage.getItem(key);
  var paragraph = document.createElement("p");
  var infor = document.createTextNode(records);
  paragraph.appendChild(infor);
  var element = document.getElementById("retrieve");
  element.appendChild(paragraph);
}


function removeItem() {
  //deletes item from localStorage
  var key = document.getElementById("removeKey").value;
  localStorage.removeItem(key);
  console.log("remove items");
}


function clearStorage() {
  //clears the entire localStorage
  localStorage.clear();
  console.log("clear records");
}


window.onload = function () {
  //ensures the page is loaded before functions are executed.
  document.getElementById("carForm").onsubmit = store;
  document.getElementById("clearButton").onclick = clearStorage;
  document.getElementById("removeButton").onclick = removeItem;
  document.getElementById("retrieveButton").onclick = retrieveRecords;
};


//--------------------------------------------------------------------

// // METHOD: key()
// //Retrieve value of second item in loca storage
// var answer = localStorage.key(1);
// console.log(answer);

// // METHOD: setItem()
// //"Tee" = the key; "Pee" = the value
// window.localStorage.setItem("Tee", "Pee");

// // METHOD: JSON.stringify()
// //Some objects must be stringifyed before they can be stored in the local storage
// const Car = {
//     brand: "Suzuki",
//     color: "white",
//     price: 10_000
// }
// window.localStorage.setItem('car', JSON.stringify(Car));
// // console.log(Car);

// // // METHOD: getItem();
// JSON.parse(window.localStorage.getItem('car'));

// METHOD: removeItem()
// window.localStorage.removeItem('brand');

//METHOD: clear()
//window.localStorage.clear();

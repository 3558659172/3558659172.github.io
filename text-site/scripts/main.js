// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";
// let myVariable = "Bob";
// myVariable = "Steve";
// const myConstant = 3.14159; 
// let iceCream = "chocolate";
// if (iceCream !== "chocolate") {
//   alert("我最喜欢巧克力冰淇淋了！");
// } else {
//   alert("但是巧克力才是我的最爱呀……");
// }
// document.querySelector("html").onclick = function () {
//   alert("别戳我，我怕疼。");
// }
const myImage = document.querySelector("img");
myImage.onclick = function () {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/yugutai.jpg") {
     myImage.setAttribute("src", "images/NGC3372_船底座.JPG");
  } else {  
     myImage.setAttribute("src", "images/yugutai.jpg")
  }
}
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  }
  else {
  localStorage.setItem("name", myName);
  myHeading.textContent = `Hello, ${myName}!`;
  }
}   
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Hello, ${storedName}!`;
}
myButton.onclick = function () {
  setUserName();
}
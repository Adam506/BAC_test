// const myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';
// alert("haloo");

// function multiply(num1,num2) {
//     let result = num1 * num2;
//     return result;
// }

// let result1 = multiply(4,5);

// console.log(result1);


let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src','images/firefox2.png');
      const myHeading = document.querySelector('h1');
myHeading.textContent = 'Chrome is cool';
    } else {
      myImage.setAttribute('src','images/firefox-icon.png');
      const myHeading = document.querySelector('h1');
      myHeading.textContent = 'Mozilla is cool';
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

document.onload = localStorage.clear();

function setUserName() {
  let myName = prompt("Please enter your name.");
  if (!myName) {
    myHeading.textContent = "Mozilla is cool, no user input!";
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = "Mozilla is cool, " + myName;
  }
}

// document.onload = localStorage.clear();

// function setUserName() {
//     let myName = prompt('Please enter your name.');
//     if(!myName) {
//       setUserName();
//     } else {
//       localStorage.setItem('name', myName);
//       myHeading.textContent = 'Mozilla is cool, ' + myName;
//     }
// }

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}


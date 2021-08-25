var randomNumber1 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);
var randomImage1 = "images/dice" + randomNumber1 + ".png";

document.querySelector(".img1").setAttribute("src", randomImage1);
document.querySelector(".img1").setAttribute("src", randomImage1);

// console logs
console.log(document.querySelector(".img1").getAttribute("src"));

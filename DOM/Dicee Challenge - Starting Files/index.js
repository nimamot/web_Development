var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

console.log(randomNumber1);
var randomImage1 = "images/dice" + randomNumber1 + ".png";
var randomImage2 = "images/dice" + randomNumber2 + ".png";


document.querySelector(".img1").setAttribute("src", randomImage1);
document.querySelector(".img2").setAttribute("src", randomImage2);

var winner;

if(randomNumber1 > randomNumber2){
  winner = "Player 1 Wins!";

}
else if(randomNumber2 > randomNumber1){
  winner = "Player 2 wins!";
}
else {
  winner = "Draw!";
}

document.querySelector("h1").innerHTML = winner;
// console logs
console.log(document.querySelector(".img1").getAttribute("src"));
console.log(winner);

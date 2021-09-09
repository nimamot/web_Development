
var button = document.querySelector(".button");

var answer1 = document.querySelector(".te_perdí");
var answer2 = document.querySelector(".aguanto");
var answer3 = document.querySelector(".orgullo");
var answer4 = document.querySelector(".impaciente");
var answer5 = document.querySelector(".consciente");
var answer6 = document.querySelector(".prohibido");
var answer7 = document.querySelector(".duele");
var answer8 = document.querySelector(".tirada");


var box1 = document.querySelector(".box1");
var box2 = document.querySelector(".box2");
var box3 = document.querySelector(".box3");
var box4 = document.querySelector(".box4");
var box5 = document.querySelector(".box5");
var box6 = document.querySelector(".box6");
var box7 = document.querySelector(".box7");
var box8 = document.querySelector(".box8");


button.onclick = function(){
  answer1.innerHTML = "(te perdí)";
  answer2.innerHTML = "(aguanto)";
  answer3.innerHTML = "(orgullo)";
  answer4.innerHTML = "(impaciente)";
  answer5.innerHTML = "(consciente)";
  answer6.innerHTML = "(prohibido)";
  answer7.innerHTML = "(duele)";
  // answer8.innerHTML = "(tirada)";

  // if Statement1
  if (box1.value == "te perdí"){
    box1.style.color = "green";
  }
  else{
    box1.style.color = "red";
  }

  // if statement 2
  if (box2.value == "aguanto"){
    box2.style.color = "green";
  }
  else{
    box2.style.color = "red";
  }
//
//   // if Statement3
  if (box3.value == "orgullo"){
    box3.style.color = "green";
  }
  else{
    box3.style.color = "red";
  }
//
  // if Statement4
  if (box4.value == "impaciente"){
    box4.style.color = "green";
  }
  else{
    box4.style.color = "red";
  }
//
//   // if Statement5
  if (box5.value == "consciente"){
    box5.style.color = "green";
  }
  else{
    box5.style.color = "red";
  }
//
//   // if Statement6
  if (box6.value == "prohibido"){
    box6.style.color = "green";
  }
  else{
    box6.style.color = "red";
  }
//
//   // if Statement7
  if (box7.value == "duele"){
    box7.style.color = "green";
  }
  else{
    box7.style.color = "red";
  }
//
//   // if Statement8
//   if (box8.value == "tirada"){
//     box8.style.color = "green";
//   }
//   else{
//     box8.style.color = "red";
//   }
//
//
}


var button = document.querySelector(".button");

var answer1 = document.querySelector(".cuidar");
var answer2 = document.querySelector(".guarda");
var answer3 = document.querySelector(".llorar");
var answer4 = document.querySelector(".marchó");
var answer5 = document.querySelector(".hondo");
var answer6 = document.querySelector(".avisó");
var answer7 = document.querySelector(".roto");
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
  answer1.innerHTML = "(cuidar)";
  answer2.innerHTML = "(guarda)";
  answer3.innerHTML = "(llorar)";
  answer4.innerHTML = "(marchó)";
  answer5.innerHTML = "(hondo)";
  answer6.innerHTML = "(avisó)";
  answer7.innerHTML = "(roto)";
  answer8.innerHTML = "(tirada)";

  // if Statement1
  if (box1.value == "cuidar"){
    box1.style.color = "green";
  }
  else{
    box1.style.color = "red";
  }

  // if statement 2
  if (box2.value == "guarda"){
    box2.style.color = "green";
  }
  else{
    box2.style.color = "red";
  }

  // if Statement3
  if (box3.value == "llorar"){
    box3.style.color = "green";
  }
  else{
    box3.style.color = "red";
  }

  // if Statement4
  if (box4.value == "marchó"){
    box4.style.color = "green";
  }
  else{
    box4.style.color = "red";
  }

  // if Statement5
  if (box5.value == "hondo"){
    box5.style.color = "green";
  }
  else{
    box5.style.color = "red";
  }

  // if Statement6
  if (box6.value == "avisó"){
    box6.style.color = "green";
  }
  else{
    box6.style.color = "red";
  }

  // if Statement7
  if (box7.value == "roto"){
    box7.style.color = "green";
  }
  else{
    box7.style.color = "red";
  }

  // if Statement8
  if (box8.value == "roto"){
    box8.style.color = "green";
  }
  else{
    box8.style.color = "red";
  }


}

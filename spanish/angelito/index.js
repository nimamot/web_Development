
var button = document.querySelector(".button");

var answer1 = document.querySelector(".cuidar");
var answer2 = document.querySelector(".guarda");
var answer3 = document.querySelector(".llorar");
var answer4 = document.querySelector(".marchó");

var box1 = document.querySelector(".box1");
var box2 = document.querySelector(".box2");
var box3 = document.querySelector(".box3");
var box4 = document.querySelector(".box4");


button.onclick = function(){
  answer1.innerHTML = "(cuidar)";
  answer2.innerHTML = "(guarda)";
  answer3.innerHTML = "(llorar)";
  answer4.innerHTML = "(marchó)";
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


}

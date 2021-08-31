
var button = document.querySelector(".button");

var answer1 = document.querySelector(".cuidar");
var answer2 = document.querySelector(".guarda");
var box1 = document.querySelector(".box1");
var box2 = document.querySelector(".box2");


button.onclick = function(){
  answer1.innerHTML = "(cuidar)";
  answer2.innerHTML = "(guarda)";


  if (box1.value == "cuidar"){
  box1.style.color = "green";
  }
  else{
    box1.style.color = "red";
  }

  if (box2.value == "guarda"){
  box2.style.color = "green";
  }
  else{
    box2.style.color = "red";
  }

}

guarda

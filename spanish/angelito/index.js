var answer = document.querySelector(".cuidar");
var button = document.querySelector(".button");
var box = document.querySelector(".box");
button.onclick = function(){
  answer.innerHTML = "/ cuidar";

  if (box.value == "cuidar"){
  box.style.color = "green";
  }
  else{
    box.style.color = "red";
  }


}

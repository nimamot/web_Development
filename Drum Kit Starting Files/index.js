// document.querySelector(".set").addEventListener("click", function (){
//   alert("I got clicked!");
// });

// document.querySelector("button").addEventListener("click", function (){
//   alert("I got clicked!");
// });


for(var i=0; i< document.querySelectorAll(".drum").length; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function (){

    var buttoninnerHTML = this.innerHTML;
    switch (buttoninnerHTML) {
      case "w":
          var audio = new Audio("sounds/tom-1.mp3");
          audio.play();
        break;
      default:

    }
  });
}

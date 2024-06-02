var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i<numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
   //console.log(this.innerHTML);
   //this.style.color = "white";
    var buttonInnerHTML = this.innerHTML;

   switch (buttonInnerHTML) {
     case "w":
       var crash = new Audio("sounds/crash.mp3");
       crash.play();
       break;

      case "a":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

      case "s":
       var snare = new Audio("sounds/snare.mp3");
       snare.play();
       break;

      case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

      case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

      case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

      case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

      
     default:console.log(buttonInnerHTML);
       
   }
  });
}


 //var audio = new Audio("sounds/tom-1.mp3");
 //audio.play();


 /*
function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function calculator(num1, num2, operator) {
  return operator(num1, num2);
}
*/
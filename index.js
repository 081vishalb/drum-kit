var noOfDrums = document.querySelectorAll(".drum").length;
for (i = 0; i < noOfDrums; i++) {

  //Detecting Button press.......

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
  });

}

//Detecting Keyboard press........

document.addEventListener("keydown", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "a":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();

      break;
    case "s":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();

      break;
    case "d":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();

      break;
    case "f":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();

      break;
    case "j":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();

      break;
    case "k":
      var kissBass = new Audio('sounds/kick-bass.mp3');
      kissBass.play();

      break;
    case "l":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();

      break;

    default:
      console.log(key);
  }

}

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}









// var audio = new Audio('sounds/tom-1.mp3');
// audio.play();
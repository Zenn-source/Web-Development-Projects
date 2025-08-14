const numberOfButtons = document.querySelectorAll(".drum").length;

document.addEventListener("keydown", (event) => {
  audioPlay(event.key);
  buttonAnimation(event.key);
});


for (let i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("keydown", function() {
    const buttonInnerHTML = this.innerHTML;
    audioPlay(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  })
}

function audioPlay(key) {
  switch (key) {
    case "w":
      let kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;
    case "a":
      let crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    case "s":
      let snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      let tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      let tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;
    case "k":
      let tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;
    case "l":
      let tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;

    default:
      break;
  }
}

function buttonAnimation(currentKey) {
  const activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(() => {
    activeButton.classList.remove("pressed");
  }, 100)
}


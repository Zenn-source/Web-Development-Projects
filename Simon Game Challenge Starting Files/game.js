const buttonColors = ['red', 'blue', 'green', 'yellow'];
let gamePattern = [];
let userClickedPattern = [];

function nextSequence() {
  const randomNumber = Math.floor(Math.random() * 4); 
  const randomChosenColor = buttonColors[randomNumber];

  gamePattern.push(randomChosenColor);
  
  $(`#${randomChosenColor}`).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);
}

function playSound(name) {
  const audio = new Audio(`./sounds/${name}.mp3`);
  audio.play();
}

$('.btn').click(function() {
  const userChosenColor = this.id;
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
});

function animatePress(currentColor) {
  $(`#${currentColor}`).addClass('pressed');

  setTimeout(() => {
    $(`#${currentColor}`).removeClass('pressed');
  }, 100 );
}

/* $(document).click(); */ //Last  line of code made


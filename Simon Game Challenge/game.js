const buttonColors = ['red', 'blue', 'green', 'yellow'];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;
let started = false;

function nextSequence() {
userClickedPattern = [];

  level++;
  $("#level-title").html(`Level ${level}`);
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

function animatePress(currentColor) {
  $(`#${currentColor}`).addClass('pressed');

  setTimeout(() => {
    $(`#${currentColor}`).removeClass('pressed');
  }, 100 );
}

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel] ){
    
    console.log('Success');
    
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(() => {
        nextSequence();
      }, 1000);
    } 
  } else {
    playSound('wrong');
    $('body').addClass('game-over');
    setTimeout(() => {
      $('body').removeClass('game-over')
    }, 200)
    $('#level-title').html('Game Over, Press Any Key to Restart.');
    startOver();
  }
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}


$(".btn").click(function () {
  const userChosenColor = this.id;
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userClickedPattern.length - 1);
});

$(document).keydown(() => {
  if (!started) {
    $("#level-title").html(`Level ${level}`);
    nextSequence();
    started = true;
  }
});


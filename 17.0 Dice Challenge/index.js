let randomNumber1 = Math.floor((Math.random() * 6) + 1);
let randomNumber2 = Math.floor((Math.random() * 6) + 1);
const container = document.querySelector('.container');

container.innerHTML = `
  <h1>${changeTitle()}</h1>
  <div class="dice">
    <p>Player 1</p>
    <img class="img1" src="./images/dice${randomNumber1}.png" />
  </div>

  <div class="dice">
    <p>Player 2</p>
    <img class="img2" src="./images/dice${randomNumber2}.png" />
  </div>
  `; 

function changeTitle() {
  if (randomNumber1 > randomNumber2) {
    return "Player 1 Wins!"
  } else if (randomNumber1 < randomNumber2) {
    return "Player 2 Wins!"
  } else {
    return "Draw!"
  }
}

console.log(randomNumber1, randomNumber2);
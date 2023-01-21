const rollBtn = document.getElementById("roll-btn");
const dice1 = document.getElementById("dice-1");
const dice2 = document.getElementById("dice-2");
const result = document.getElementById("result");

rollBtn.addEventListener("click", rollDice);

function rollDice() {
  const dice1Num = Math.floor(Math.random() * 6) + 1;
  const dice2Num = Math.floor(Math.random() * 6) + 1;

  dice1.innerText = dice1Num;
  dice2.innerText = dice2Num;

  if (dice1Num === dice2Num) {
    result.innerText = "Draw!";
  } else if (dice1Num > dice2Num) {
    result.innerText = "You Win!";
  } else {
    result.innerText = "You Lose!";
  }
}

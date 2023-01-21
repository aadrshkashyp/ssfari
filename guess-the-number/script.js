const guessBtn = document.getElementById("guess-btn");
const guessInput = document.getElementById("guess-input");
const result = document.getElementById("result");
const correctNumberDisplay = document.getElementById("correct-number");

let correctNumber;
let guessCount = 0;

function generateNumber() {
  correctNumber = Math.floor(Math.random() * 100) + 1;
}

guessBtn.addEventListener("click", () => {
  let userGuess = Number(guessInput.value);

  if (userGuess === correctNumber) {
    result.innerText = `Congratulations! You guessed the number in ${guessCount} tries.`;
    guessInput.value = "";
    generateNumber();
    correctNumberDisplay.innerText = "";
    guessCount = 0;
  } else if (userGuess > correctNumber) {
    result.innerText = "Your guess is too high. Try again.";
    guessCount++;
  } else if (userGuess < correctNumber) {
    result.innerText = "Your guess is too low. Try again.";
    guessCount++;
  }
  if (userGuess !== correctNumber && guessCount > 0) {
    correctNumberDisplay.innerText = `The correct number was ${correctNumber}.`;
    guessInput.value = "";
    generateNumber();
    guessCount = 0;
  }
});

generateNumber();

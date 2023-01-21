const numberBtns = document.querySelectorAll(".number-btn");
const operatorBtns = document.querySelectorAll(".operator-btn");
const equalBtn = document.getElementById("equal-btn");
const clearBtn = document.getElementById("clear-btn");
const display = document.getElementById("display");

let firstValue = "";
let operator = "";
let secondValue = "";

numberBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (operator === "") {
      firstValue += e.target.innerText;
      display.innerText = firstValue;
    } else {
      secondValue += e.target.innerText;
      display.innerText = `${firstValue} ${operator} ${secondValue}`;
    }
  });
});

operatorBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    operator = e.target.innerText;
    display.innerText = `${firstValue} ${operator}`;
  });
});

equalBtn.addEventListener("click", () => {
  let result;

  if (operator === "+") {
    result = parseFloat(firstValue) + parseFloat(secondValue);
  } else if (operator === "-") {
    result = parseFloat(firstValue) - parseFloat(secondValue);
  } else if (operator === "*") {
    result = parseFloat(firstValue) * parseFloat(secondValue);
  } else if (operator === "/") {
    result = parseFloat(firstValue) / parseFloat(secondValue);
  }

  display.innerText = result;
  firstValue = result;
  operator = "";
  secondValue = "";
});
clearBtn.addEventListener("click", () => {
  firstValue = "";
  operator = "";
  secondValue = "";
  display.innerText = "";
});

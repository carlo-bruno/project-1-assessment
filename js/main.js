console.log("Javascript linked");

// dom selectors

let numberSpan, plusBtn, minusBtn, inputEl;

// variables
let currentNumber = 0;

// function to get the number from the input
function getInput() {
  return parseInt(inputEl.value);
}

// function to add number
function addNumber(input) {
  currentNumber = currentNumber + input;
  updateNumber();
}

// function to subtract number
function subtractNumber(input) {
  currentNumber = currentNumber - input;
  updateNumber();
}

// function to update number shown

function updateNumber() {
  numberSpan.textContent = `${currentNumber}`;
  if (currentNumber < 0) {
    numberSpan.style.color = "red";
  } else {
    numberSpan.style.color = "black";
  }
}

// event listeners
document.addEventListener("DOMContentLoaded", function() {
  numberSpan = document.getElementById("number-span");
  plusBtn = document.getElementById("plus-button");
  minusBtn = document.getElementById("minus-button");
  inputEl = document.getElementsByTagName("input")[0];

  plusBtn.addEventListener("click", () => {
    addNumber(getInput());
  });
  minusBtn.addEventListener("click", () => {
    subtractNumber(getInput());
  });
});

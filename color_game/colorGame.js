const colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)"
];

const squares = document.querySelectorAll(".square");
const targetColorEl = document.getElementById("targetColor");
const messageEl = document.getElementById("message")
const targetColor = colors[0];
targetColorEl.textContent = targetColor;

for (let i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener("click", check);
}

function check(event) {
  console.log(event);
  if (this.style.backgroundColor === targetColor) {
    removeEventListener();
    changeAllColor(targetColor);
    messageEl.textContent = "Congratulation! You picked the correct one.";
  } else {
    messageEl.textContent = "Try Again"
    this.style.backgroundColor = "#232323";
  }
}

function removeEventListener() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].removeEventListener("click", check);
  }
}

function changeAllColor(color) {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

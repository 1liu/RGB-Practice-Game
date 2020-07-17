const novice = document.getElementById("novice");
const normal = document.getElementById("normal");
const expert = document.getElementById("expert");
const hell = document.getElementById("hell");

let colors = [];
let squares = [];
let targetColor = '';

const container = document.querySelector(".container");
const targetColorEl = document.getElementById("targetColor");
const messageEl = document.getElementById("message")

novice.addEventListener("click", () => start(3));
normal.addEventListener("click", () => start(6));
expert.addEventListener("click", () => start(9));
hell.addEventListener("click", () => start(12));

//default mode
start(3);

function start(numOfSquare) {
  resetGame();
  colors = generateColorArray(numOfSquare);
  targetColor = randomColor();
  console.log(targetColor);
  targetColorEl.textContent = targetColor;

  container.innerHTML = '';
  for (let i = 0; i < numOfSquare; i++) {
    square = document.createElement("div");
    square.className = "square";
    container.appendChild(square);
  }

  squares = document.querySelectorAll(".square");
  for (let i = 0; i < numOfSquare; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", check);
  }
}

function check(event) {
  if (this.style.backgroundColor === targetColor) {
    removeEventListener();
    changeAllColor(targetColor);
    messageEl.textContent = "Congratulation! You picked the correct one.";
  } else {
    messageEl.textContent = `This is ${this.style.backgroundColor}, try again`;
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

function randomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}

function generateColorArray(n) {
  let array = [];
  for (let i = 0; i < n; i++) {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    array.push(`rgb(${r}, ${g}, ${b})`);
  }
  return array;
}

function resetGame() {
  messageEl.textContent = "Let Start The Game";
}

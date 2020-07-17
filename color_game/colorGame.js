const numOfSquare = 6;
const colors = generateColorArray(numOfSquare);
const container = document.querySelector(".container");
const targetColorEl = document.getElementById("targetColor");
const messageEl = document.getElementById("message")
const targetColor = randomColor();
targetColorEl.textContent = targetColor;

for (let i = 0; i < numOfSquare; i++) {
  let square = document.createElement("div");
  square.className = "square";
  container.appendChild(square);
}

const squares = document.querySelectorAll(".square");
for (let i = 0; i < numOfSquare; i++) {
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
  console.log(array);
  return array;
}

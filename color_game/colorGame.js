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
const targetColor = colors[0];
targetColorEl.textContent = targetColor;

for (let i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener("click", check);
}

function check(event) {
  console.log(event);
  if (this.style.backgroundColor === targetColor) {
    alert("Congratulation! You picked the correct one.")
  } else {
    alert("Wrong Color, try agains.")
  }
}

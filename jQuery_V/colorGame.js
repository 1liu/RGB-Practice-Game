var colors = [];
var squares = [];
var targetColor = '';

$("#novice").on("click", function () { start(3) });
$("#novice").on("click", function () { start(6) });
$("#expert").on("click", function () { start(9) });
$("#hell").on("click", function () { start(12) });

//default mode
start(3);

function start(numOfSquare) {
  $("#message").text("Let Start The Game");
  colors = generateColorArray(numOfSquare);
  targetColor = colors[Math.floor(Math.random() * colors.length)];
  $("#targetColor").text(targetColor);
  $(".container").html("");
  $.each(colors, function (index, color) {
    $("<div>").addClass("square").css("background-color", color).click(check).appendTo(".container");
  })
}

function check(event) {
  if ($(this).css("background-color") === targetColor) {
    $(".square").off("click").css("background-color", targetColor);
    $("#message").text("Congratulation! You picked the correct one.");
  } else {
    $("#message").text(`This is ${this.style.backgroundColor}, try again`);
    $(this).css("background-color", '#232323')
  }
}

function generateColorArray(n) {
  var array = [];
  for (var i = 0; i < n; i++) {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    array.push(`rgb(${r}, ${g}, ${b})`);
  }
  return array;
}

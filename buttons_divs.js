var originalLeftText = document.getElementById("leftDiv").innerHTML;
var originalRightText = document.getElementById("rightDiv").innerHTML;
var updatedLeftText = "Left div updated — now with dynamic colors controlled by the button.";
var updatedRightText = "Right div updated — click again to toggle both text and colors.";

function changeColor() {
  var leftDiv = document.getElementById("leftDiv");
  var rightDiv = document.getElementById("rightDiv");

  // Toggle between two background color classes for each div
  var leftIsSea = leftDiv.className === "seaBg";
  var rightIsSunset = rightDiv.className === "sunsetBg";

  leftDiv.className = leftIsSea ? "forestBg" : "seaBg";
  rightDiv.className = rightIsSunset ? "berryBg" : "sunsetBg";
}

function changeText() {
  var leftDiv = document.getElementById("leftDiv");
  var rightDiv = document.getElementById("rightDiv");
  var showingOriginal = leftDiv.innerHTML === originalLeftText && rightDiv.innerHTML === originalRightText;

  if (showingOriginal) {
    leftDiv.innerHTML = updatedLeftText;
    rightDiv.innerHTML = updatedRightText;
  } else {
    leftDiv.innerHTML = originalLeftText;
    rightDiv.innerHTML = originalRightText;
  }
}

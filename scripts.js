let item1 = document.getElementById('item1');
let myColor = document.getElementById('myColor');
let myButton = document.getElementById('myButton');
let myHeading = document.getElementById('myHeading');

function changeColor() {
  return item1.style.background = myColor.value;
}

function print(message) {
  var outputDiv = document.getElementById('errorMessage');
  outputDiv.innerHTML = message;
}

function clearText() {
  document.getElementById('myColor').value = '';
}

myButton.addEventListener('click', changeColor);

myButton.addEventListener('click', clearText);

document.getElementById("myColor")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("myButton").click();
    }
});

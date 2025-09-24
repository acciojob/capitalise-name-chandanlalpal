//your JS code here. If required.
 let inputBox = document.getElementById("fname");

inputBox.onblur = function () {
  inputBox.value = inputBox.value.toUpperCase();
};
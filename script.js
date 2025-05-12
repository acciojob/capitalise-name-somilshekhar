//your JS code here. If required.
function convertToUppercase() {
  let input = document.getElementById("fname");
  input.value = input.value.toUpperCase();
}
document.getElementById("fname").addEventListener("blur", convertToUppercase);
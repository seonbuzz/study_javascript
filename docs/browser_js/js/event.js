function changeText() {
  let queryChangeText = document.querySelector("#changeText");
  queryChangeText.innerHTML = "Change On Me!";
}
let queryClickalert = document.querySelector("#clickalert");
//element.addEventListener(event, function, useCapture)
queryClickalert.addEventListener("click", clickAlert);
function clickAlert() {
  alert("click on Me!");
}

let queryButton = document.querySelector("#buttonChangeText");
queryButton.addEventListener("click", targetText);
function targetText() {
  let queryTargetText = document.querySelector("#targetText");
  queryTargetText.innerHTML = "Target Text!";
}

let queryNone = document.querySelector("#none");

queryNone.addEventListener("click", (event) => {
  displayNone(event);
});

function displayNone(event) {
  queryNone.style.display = "none";
}

let queryHidden = document.querySelector("#hidden");

queryHidden.addEventListener("click", (event) => {
  displayHidden(event);
});

function displayHidden(event) {
  queryHidden.style.visibility = "hidden";
}

let queryReset = document.querySelector("#reset");

queryReset.addEventListener("click", (event) => {
  displayReset(event);
});

function displayReset(event) {
  queryNone.style.display = "block";
  queryHidden.style.visibility = "visible";
}

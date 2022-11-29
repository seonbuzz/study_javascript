let querySingle = document.querySelector("#single");
querySingle.addEventListener("click", (event) => {
  singleEvent(event);
});
// 어디 엘리먼트에 대해 걸어야하지가 명확하면 그 엘리먼트의 유니크한 점이 뭔지 찾아야함

function singleEvent(event) {
  //forEach와 비슷함. Iterator
  //파라미터에 'event'가 들어옴. 이 파라미터는 addEventListener를 동작시켰을 때 얘가 걸려있는 엘리먼트에서 뱉어주는 여러가지 현상들, 변수들, 펑션들을 묶음으로 던져주는 것
  //콜백펑션에다가 파라미터로 지정하지 않았지만 자동으로 event가 날아감.
  console.log(event);
  querySingle.innerHTML = "Take One Event!";
}
//하나의 엘리먼트에 하나의 이벤트만 줄 수 있는게 아님! 여러가지 가능

let queryKeydown = document.querySelector("#keydown");

queryKeydown.addEventListener("keydown", (event) => {
  console.log(event);
  if (event.code == "Enter") {
    keydownDesc(queryKeydown.value);
  }
  console.log(event.target);
});

function keydownDesc(desc) {
  //   let desc = queryKeydown.value;
  let queryKeydownDesc = document.querySelector("#keydownDesc");
  queryKeydownDesc.innerHTML = desc;
}

let queryLoad = document.querySelector("#keydownDesc");
queryLoad.addEventListener("load", queryload());

function queryload() {
  queryLoad.innerHTML = "Done on Load";
}

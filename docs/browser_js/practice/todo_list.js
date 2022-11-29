//Item 추가
// <!--onkeypress="if(window.event.keyCode==13){button(event)} -->

let queryTask = document.querySelector("#id1");
let queryInputList = document.querySelector("#inputList");

let btn = document.querySelector("#btn");
btn.addEventListener("click", (event) => {
  add(event);
});

//Enter key
queryTask.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    add(event);
  }
});

function add(event) {
  if (queryTask.value == "") {
    alert("내용을 입력해주세요.");
  } else {
    let newItem = `
      <div class="add">
        <div>${queryTask.value}</div>
        <span>
        <i class="material-icons" id="heart">favorite_border</i>
        <i class="material-icons" id="delete">delete</i>
      </span>
    </div>`;
    queryInputList.insertAdjacentHTML("beforeend", newItem);
    queryTask.value = "";
  }
}

//토글링
//하트
queryInputList.addEventListener("click", (event) => {
  if (event.target.innerHTML == "favorite_border") {
    event.target.innerHTML = "favorite";
  } else if (event.target.innerHTML == "favorite") {
    event.target.innerHTML = "favorite_border";
  }
});

//삭제
queryInputList.addEventListener("click", (event) => {
  if (event.target.innerHTML == "delete") {
    event.target.parentElement.parentElement.remove();
  }
});

// queryId2.addEventListener("click", (event) => {
//   if (event.target.id != "" && event.target.id != "undefined") {
//     alert(`clicked ${event.target.id} : ${event.target.value}`);
//   }
//   }

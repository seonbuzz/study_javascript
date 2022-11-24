// div.inner 태그 내부에 <div>hello</div>를 추가
// 프로그래밍 방식 적용
let queryInner = document.querySelector("#container > .inner");

let element = document.createElement("div");
let helloText = document.createTextNode("hello");
element.appendChild(helloText);
queryInner.appendChild(element);

//innerHtml
let animal = { name: "dog", age: 10 };
let queryApp = document.querySelector("#app");

let item = "<div class='item'>" + animal["name"] + animal["age"] + "</div>";
item = `<div class="item">${animal["name"]} : ${animal["age"]} </div>`;

queryApp.innerHTML = item;

const productsData = [
  { title: "감자칩", weight: 300 },
  { title: "칙촉", weight: 100 },
  { title: "고구마칩", weight: 300 },
];

let queryData = document.querySelector("#list");

productsData.forEach((product) => {
  let item2 = `<div>title : ${product.title}, weight : ${product.weight}</div>`;
  queryData.innerHTML += item2;
});

//브라우저에서 보여지는 현상은 html(언제나 이게 포함)로 보여져야지 우리가 원하는 모양의 형틀로 display가 된다
//28번 라인에 div id="list"라고 적으면 결론적으로는 id=list가 4개로 생성이 되어지기 때문에 id가 유니크하지 않게됨.

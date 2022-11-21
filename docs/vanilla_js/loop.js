const animals = ["dog", "cat", "bird", "fish", "lizard"];

//Normal
for (let i = 1; i < animals.length; i++) {
  console.log(`${animals[i]}`);
}

//for iterable
//for문 내부에서 사용하려고 만들어지는 변수
//for(let 변수 이름 of animals){

for (let animal of animals) {
  console.log(`${animal}`);
}

/* for (let animal of animals_obj) {
  console.log(`${animal["name"]}, ${animal["species"]}`);
  console.log();
}*/

const cars = ["BMW", "Volvo", "mini"];
for (let car of cars) {
  console.log(`${car}`);
}
//car
cars.forEach((car) => {
  console.log(`${car}`);
});

//js에서는 function을 param으로 처리할 수 있구나..라고 생각해보자..

//js에만 있는 for문 방식
//forEach : 결론적으로 array에 있는 것. proto type.
const array1 = ["a", "b", "c"];

array1.forEach((element, i) => console.log(element)); // (element => console.log(element)); 이 부분이 function //

//Arrow Function
let arrowFunction = (element, index) => {
  //param이 하나일때는 괄호를 뺌..두 개 이상부터 꼭 괄호 넣어야함
  console.log(`${element}, ${index}`);
  //리턴하는게 만약 하나일때는 {}를 안써줌.(지금은 없지만..)
};
array1.forEach(arrowFunction);

//Normal Funcuntion
function normalFunciton(element) {
  console.log(element);
}
array1.forEach(arrowFunction);

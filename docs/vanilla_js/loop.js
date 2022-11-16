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

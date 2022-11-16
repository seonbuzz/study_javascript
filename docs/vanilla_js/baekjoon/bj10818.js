const fs = require("fs");

const filepath =
  process.platform == "linux"
    ? "/dev/stdin"
    : "docs/vanilla_js/baekjoon/input.txt";

let input = fs.readFileSync(filepath).toString().trim().split("\n");

// let num = input[0];

// let num2 = input[1].split(" ").map(Number);

// let count = { min: 1000000, max: -1000000 };

// for (number of num2) {
//   if (number < count.min) count.min = number;
//   if (number > count.max) count.max = number;
// }

// console.log(count.min);
// console.log(count.max);

let arr = input[1].split(" ").map(Number); // ==> arr= 두번째부터/공백 배열 만들고 각 배열을 String To Number로 Change
let arr_min = arr[0]; //==> arr_min(최소값은) arr 배열 첫번째
let arr_max = arr[0]; // ==> arr_max(최대값은) arr 배열 첫번째  //초기화

for (let i = 0; i < arr.length; i++) {
  // ==>i가 arr의 길이보다 커질 때 까지 i는 0부터 하나씩 증가함
  if (arr[i] < arr_min) {
    //==>만약 arr[i]보다 변수 arr_min이 더 클때
    arr_min = arr[i]; // ==> 변수 arr_min은 arr[i]랑 같다
  }
  if (arr[i] > arr_max) {
    // ==>만약 arr[i]가 변수 arr_min보다 더 클때
    arr_max = arr[i]; // ==>변수 arr_min은 arr[i]랑 같다
  }
}
let obj = { min: 0, max: 0 }; //변수 obj가 key=>min : value=>0 , key=>max :value=>0
obj["min"] = arr_min;
obj["max"] = arr_max;
console.log(`${obj["min"]} ${obj["max"]}`);

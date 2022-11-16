const fs = require("fs");

const filepath =
  process.platform == "linux"
    ? "/dev/stdin"
    : "docs/vanilla_js/baekjoon/input.txt";

let input = fs.readFileSync(filepath).toString().split("\n").map(Number);

let max = Math.max(...input); //max(...values:number[]) 더 큰 값을 반환
let num = input.indexOf(max); // .indexOf 인덱스의 위치를 확인을 하는 것

console.log(`${max}`);
console.log(`${num + 1}`); //순서 할당 -->  해당 값이 max ==> index+1

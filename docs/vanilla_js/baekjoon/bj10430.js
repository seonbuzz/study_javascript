const fs = require("fs");

const filepath =
  process.platform == "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";

// let readFileSync = fs.readFileSync(filepath);
// let toString = readFileSync.toString();
// let trim = toString.trim();
// let split = trim.split(" ");
// let inputs = splits.map(Number)==> 밑의 체인방식으로 변경

let inputs = fs.readFileSync(filepath).toString().trim().split(" ").map(Number);
// readFileSync = 자바의 scanner 역할

console.log((inputs[0] + inputs[1]) % inputs[2]);
console.log((inputs[0] % inputs[2]) + ((inputs[1] % inputs[2]) % inputs[2]));
console.log((inputs[0] * inputs[1]) % inputs[2]);
console.log(((inputs[0] % inputs[2]) * (inputs[1] % inputs[2])) % inputs[2]);

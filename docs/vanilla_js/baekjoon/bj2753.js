const fs = require("fs");

// const filepath =
//   process.platform == "linux" ? "/dev/stdin" : ;
let inputs = fs.readFileSync("/dev/stdin").toString().trim();

let leapyear = inputs;
if ((leapyear % 4 == 0 && leapyear % 100 != 0) || leapyear % 400 == 0) {
  console.log(`1`);
} else {
  console.log(`0`);
}

const fs = require("fs");

// const filepath =
//   process.platform == "linux" ? "/dev/stdin" : ;
let inputs = fs.readFileSync("/dev/stdin").toString().trim();

let score = inputs;
if (score >= 90) {
  System.out.println("A");
} else if (score >= 80) {
  System.out.println("B");
} else if (score >= 70) {
  System.out.println("C");
} else if (score >= 60) {
  System.out.println("D");
} else {
  System.out.println("F");
}

//if문 ()안에 들어가는건 언제나 결과값은 T or F
let num = 5;
if (20 > num || 20 < num) {
  console.log("print!");
}

if (20 < num) {
  console.log(`20<${num}`);
} else if (20 > num) {
  console.log(`20>${num}`);
} else {
  console.log(`done`);
}

//Ternay operator ( 삼항 연산자)
let condition = 20 < num ? `20<${num}` : `done`;

console.log();

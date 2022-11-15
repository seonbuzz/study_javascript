let let_first = 10;

//scope : 변수가 유용하게 사용될 수 있는 영역(java에서는 {}(커브 브라켓)과 비슷함 )

{
  console.log(`In let_first ${let_first}`);
  let let_Second = 20;
  //   console.log(`In let_second ${let_second}`);
}

console.log(`Out let_first ${let_first}`);
// console.log(`Out let_second ${let_second}`);  //Error

//{} : 내가 선언할 수 있는 내용의 한계점 그 밖에다가 놓으면 에러남

// check typeof : 어떤 타입인지 알려주는 거
console.log(`typeof let_first : ${typeof let_first}`);
let_first = "good";
console.log(`typeof let_first : ${typeof let_first}`);

console.log();

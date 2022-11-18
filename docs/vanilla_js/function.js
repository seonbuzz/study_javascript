/* function name(params1,params2,params3...) {
    code to be excuted
    return
          }*/

//for문은 하나의 값을 스코프 안에다가 넣어주는 것

// param : 2(1,3), return = 1(1+3)
function sum(item_first, item_second) {
  return item_first + item_second;
}
//선언한 그 자체 사용할 때 function이 한 개일수도 있지만 10개일수도 있다.
//그래서 난 이걸 쓸거야 ! 하고 호출해야함
{
  let sum_number = 1 + 3;
  sum_number = 3 + 5;
  sum_number = 6 + 8;
  let sum_function = sum(1, 2); // item_first = 1 , item_second = 2
  console.log();
}

//Normal Function
function sum(item_first, item_second) {
  return item_first + item_second;
}

//이름이 없는 function : anonymous Function(익명 함수), 잘 사용 안함.
//이름을 빼버리고 변수에다가 담음.
let calculateSum = function (item_first, item_second) {
  return item_first + item_second;
};
//사용방법 : 걍 넣으면 됨. 이름을 변수에다가 담았을 뿐이지 변수에 param 담는 거하고 똑같음. function의 기능을 그대로 가지고 있음. 변수 이름 + param
{
  console.log(`${calculateSum(5, 7)}`);
}

// Arrow Function(js에서 가장 많이 사용하는 방식)  화살같은 기호를 사용해서 Function을 만듦.
//js는 callback 기능을 많이 씀. 코드의 단순화를 위해 많이 씀..
// =>  : anonymous function에서 function을 대치함.
let calculateSumSecond = (item_first, item_second) => {
  return item_first + item_second;
};
{
  console.log(`${calculateSumSecond(7, 8)}`);
}

//rest parameters
//Normal function
// ... : 변수를 풀어헤치는것
//가변적으로 움직일 수 있는 data type : array
function printRestParam(...args) {
  let restParam = (arg) => {

    console.log(`arg : ${arg}`);
  };
  args.forEach(restParam); //forEach literal로 자꾸 풀어보자
}

{
  printRestParam(2, 4, 5);
  printRestParam(2, [4,3,2], 5, 6, 7);
}

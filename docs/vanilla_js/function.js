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

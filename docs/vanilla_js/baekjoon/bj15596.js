//※수업 문제 ! 백준에는 js 제출 불가

//문제 : 정수 n개가 주어졌을 때, n개의 합을 구하는 함수를 작성하라
//a : 합을 구해야 하는 정수 n개가 저장되어 있는 '배열'  (0 ≤ a[i] ≤ 1,000,000, 1 ≤ n ≤ 3,000,000)
//리턴값 : a에 포함되어 있는 정수 n개의 합

// param : a
function sum(a) {
  let sum = 0; //변수 sum을 0으로 선언
  for (let number of a) {
    // param a에 number 변수 선언
    sum += number; // sum = sum+number
  }
  return sum; //a에 포함되어있는 정수 n개의 값 ↓
}

{
  let arr = [1, 2, 3, 4, 5]; //n개가 저장되어 있는 '배열' 그냥 지정함,,
  console.log(sum(arr)); //sum(arr) 출력 !
}

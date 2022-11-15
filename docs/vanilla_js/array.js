let fruits = ["apple", "banana", "orange", "melon"];
let numbers = [1, 2, 3, 4, 5];
let fruits_init = new Array();
fruits_init = [];
//object == HashMap
let objects = { name: "Tom", age: 4 };

let mixins_first = [1, 2, 3, "apple", 4, "melon"];
let mixins_second = [1, 2, 3, "apple", { name: "Tom", age: 4 }];
let mixins_third = [1, 2, 3, "banana", objects];
let mixins_fourth = [fruits, numbers];

/*fruits_second = ["berry", "strawberry"]
(2) ['berry', 'strawberry']
fruits_second
(2) ['berry', 'strawberry']
fruits_concat = fruits.concat(fruits_second)
(6) ['apple', 'banana', 'orange', 'melon', 'berry', 'strawberry']
fruits_concat.indexOf("melon")
3*/
//.concat : 두 개를 붙여주는 역할
//.indexof : 인덱스의 위치를 확인을 하는 것. (내용은 아는데 인덱스의 위치가 어디있는지 모를 때)
//.join : []이 아닌 fruits_concat.join() 한 번의 스트링으로 바꿔줌
/*'apple,banana,orange,melon,berry,strawberry' =','가 구분되어지는 string
fruits_concat.join(' and ')
'apple and banana and orange and melon and berry and strawberry'*/

//split :String을 Array로 변환
//reverse : 위치가 reverse 되는 것

const mixins_array = [
  ["apple", "banana"],
  ["orange", "melon"],
  ["berry", "strawberry"],
];
//위 array의 하나의 묶음을 풀어헤쳐보자 !
let first = ["apple", "banana"];
let second = ["orange", "melon"];
let third = ["berry", "strawberry"];

let mixins_list = [first, second, third];
/*mixins_list[1][1]
'melon'*/

console.log();

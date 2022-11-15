let number_first = 3;
let string_second = "5";

console.log(number_first + string_second);
let concate_string = `${number_first}${string_second}`;
let string_a = "A";
console.log(number_first + string_a);

let animal = "tiger";
console.log(`${animal}`);

/* animal.substring(0, 3);
("tig");
animal.replace("ti", "TI"); //선언하지 않은 것
("TIger");
animal = animal.replace("ti", "TI"); // 선언을 하면 바뀜
("TIger");
animal.charAt(0);
("T");
animal.split('g') //split : 특정한 string을 array(배열)로 바꾸는 것
(2) ['TI', 'er']
0:'TI'
1:'er' */

let sentence = " 5 2 6 ";
let trims = sentence.trim(); //공백 제거
let splits = trims.split(" "); //공백으로 배열 만듦
let maps = splits.map(Number); //각 배열을 String To Number로 Change
console.log(maps[0] + maps[1] + maps[2]);

//trims 리턴이 있다는 걸 알고 변수 splits로 받음

let inputs = sentence.trim().split(" ").map(Number); // 연결되어서 사용하는 방식을 체인 function이라고 함.
console.log(inputs[0] + inputs[1] + inputs[2]); //합산함.

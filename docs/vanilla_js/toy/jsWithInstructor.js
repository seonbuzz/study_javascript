/* -문제의 단순화가 첫번째!
-요청자가 요청한 사항은 사람이 읽히기 쉽게 해달라는것
-컴퓨터가 알아들을 수 있는 순서로 쓰는게 첫번째 덕목
-코딩부터 하는 건 좋은 생각이 아님
-process부터 적기 
나처럼 하려면 process를 명확히 할것*/
const answers = [
  { questions_uid: "Q1", example_uid: "E1" },
  { questions_uid: "Q1", example_uid: "E2" },
  { questions_uid: "Q1", example_uid: "E3" },

  { questions_uid: "Q2", example_uid: "E1" },
  { questions_uid: "Q2", example_uid: "E2" },
  { questions_uid: "Q2", example_uid: "E3" },
  { questions_uid: "Q2", example_uid: "E4" },

  { questions_uid: "Q3", example_uid: "E1" },
  { questions_uid: "Q3", example_uid: "E2" },

  { questions_uid: "Q4", example_uid: "E1" },
  { questions_uid: "Q4", example_uid: "E2" },
  { questions_uid: "Q4", example_uid: "E3" },
  { questions_uid: "Q4", example_uid: "E4" },
  { questions_uid: "Q4", example_uid: "E5" },

  { questions_uid: "Q5", example_uid: "E1" },
  { questions_uid: "Q5", example_uid: "E2" },
  { questions_uid: "Q5", example_uid: "E3" },
];
let idx;
let compare;
for (idx = 0; idx < answers.length; idx++) {
  if (compare != answers[idx]["questions_uid"]) {
    console.log(`!= :${answers[idx]["questions_uid"]}`);
    console.log(`!= :${answers[idx]["example_uid"]}`);
  } else {
    console.log(`== : ${answers[idx]["example_uid"]}`);
  }
  compare = answers[idx]["questions_uid"];
}
console.log(` answers.length : ${answers.length}, idx : ${idx}`);

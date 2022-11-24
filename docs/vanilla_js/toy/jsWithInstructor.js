/* -문제의 단순화가 첫번째!
-요청자가 요청한 사항은 사람이 읽히기 쉽게 해달라는것
-컴퓨터가 알아들을 수 있는 순서로 쓰는게 첫번째 덕목
-코딩부터 하는 건 좋은 생각이 아님
-process부터 적기 
process를 명확히 할것*/

const questions_list = [
  {
    question: "해당 매장을 방문시 매장은 청결 하였습니까?",
    questions_uid: "Q1",
    order: 1,
  },
  {
    question: "주문시 직원은 고객님께 친절 하였습니까?",
    questions_uid: "Q2",
    order: 2,
  },
  {
    question: "주문하신 음료가 나오기까지 시간이 적당하였습니까?",
    questions_uid: "Q3",
    order: 3,
  },
  {
    question: "해당 매장을 다음에도 재방문 하실 의향이 있으십니까?",
    questions_uid: "Q5",
    order: 4,
  },
  {
    question: "직원이 제조한 음료에 대해 맛은 좋았습니까?",
    questions_uid: "Q4",
    order: 5,
  },
];

const answer_list = [
  { answer: "전혀 아니다", answer_uid: "E1", order: 1 },
  { answer: "아니다", answer_uid: "E2", order: 2 },
  { answer: "보통이다", answer_uid: "E3", order: 3 },
  { answer: "그렇다", answer_uid: "E4", order: 4 },
  { answer: "매우 그렇다", answer_uid: "E5", order: 5 },
];

const questions_answers = [
  { questions_uid: "Q1", answer_uid: "E1" },
  { questions_uid: "Q1", answer_uid: "E2" },
  { questions_uid: "Q1", answer_uid: "E3" },
  { questions_uid: "Q2", answer_uid: "E1" },
  { questions_uid: "Q2", answer_uid: "E2" },
  { questions_uid: "Q2", answer_uid: "E3" },
  { questions_uid: "Q2", answer_uid: "E4" },
  { questions_uid: "Q3", answer_uid: "E1" },
  { questions_uid: "Q3", answer_uid: "E2" },
  { questions_uid: "Q4", answer_uid: "E1" },
  { questions_uid: "Q4", answer_uid: "E2" },
  { questions_uid: "Q4", answer_uid: "E3" },
  { questions_uid: "Q4", answer_uid: "E4" },
  { questions_uid: "Q4", answer_uid: "E5" },
  { questions_uid: "Q5", answer_uid: "E1" },
  { questions_uid: "Q5", answer_uid: "E2" },
  { questions_uid: "Q5", answer_uid: "E3" },
];

//Object 방식의 묶음으로 처리 or 데이터 방식의 list 묶음으로 처리 결정

//예상 묶음 데이터
/*[
  [Q1, E1, E2, E3]  ->{questions_uid:Q1, answer_uids:[E1,E2], answer:}
[Q2, E1, E2, E3, E4] ->{questions_uid:Q2, answers_uids:[E1, E2, E3, E4]}
[Q3, E1, E2]->{questions_uid:Q3, answers_uids:[E1, E2]}
[Q4, E1, E2, E3, E4, E5]->{questions_uid:Q4, answers_uids:[E1, E2, E3, E4, E5]]}
[Q5, E1, E2, E3]->{questions_uid:Q5, answers_uids:[E1, E2, E3]}
];*/

//1차 방식 : [Q1, Q2, Q3, Q4, Q5]
//2차 방식 : Array in Array

let polls = []; //전체 묶음
let question_compare;
let questions = []; //내부 묶음
for (let idx = 0; idx < questions_answers.length; idx++) {
  if (question_compare != questions_answers[idx]["questions_uid"]) {
    if (questions.length > 0) {
      polls.push(questions);
      questions = [];
    }
    // console.log(`${questions_answers[idx]["questions_uid"]}`);
    // console.log(`${questions_answers[idx]["answer_uid"]}`);
    questions.push(questions_answers[idx]["questions_uid"]);
    questions.push(questions_answers[idx]["answer_uid"]);
  } else {
    // console.log(`${questions_answers[idx]["answer_uid"]}`);
    questions.push(questions_answers[idx]["answer_uid"]);
  }
  if (idx + 1 == questions_answers.length) {
    polls.push(questions);
  }
  question_compare = questions_answers[idx]["questions_uid"]; //이전 uid 입력
}

console.log(`${polls}`);

const fs = require("fs");

const filepath =
  process.platform == "linux"
    ? "/dev/stdin"
    : "docs/vanilla_js/toy/poll_input.txt";

let input = fs.readFileSync(filepath).toString().trim().split(" ").map(Number);

//questions - object in Array
const questions = [
  {
    questions_num: "Q1",
    question: "해당 매장을 방문시 매장은 청결 하였습니까?",
  },
  {
    questions_num: "Q2",
    question: "주문시 직원은 고객님께 친절 하였습니까?",
  },
  {
    questions_num: "Q3",
    question: "주문하신 음료가 나오기까지 시간이 적당하였습니까?",
  },
  {
    questions_num: "Q4",
    question: "해당 매장을 다음에도 재방문 하실 의향이 있으십니까?",
  },
  {
    questions_num: "Q5",
    question: "직원이 제조한 음료에 대해 맛은 좋았습니까?",
  },
];

// answer of questions - object in Array
const answers = [
  { answer_num: "A1", answer: "1.전혀 아니다" },
  { answer_num: "A2", answer: "2.아니다" },
  { answer_num: "A3", answer: "3.보통이다" },
  { answer_num: "A4", answer: "4.그렇다" },
  { answer_num: "A5", answer: "5.매우 그렇다" },
];

//input - 1번 Line에 적음.

// Function  forEach문 활용해보기 ...못활용함
//처리 - questions, answer of questions, input matching

//questions
function printQ(i) {
  console.log(`${questions[i].questions_num}.${questions[i].question}`);
}

//answer of questions 왜 이게 출력이 안되지??param이 안쓰였음-->다른 방법 시도 해결해보기
// function printA(i) {
//   if (questions.questions_num == "Q1") {
//     for (let i = 0; i < 3; i++) {
//       console.log(`${answers[i].answer}`);
//     }
//   } else if (questions.questions_num == "Q2") {
//     for (let i = 0; i < 4; i++) {
//       console.log(`${answers[i].answer}`);
//     }
//   } else if (questions.questions_num == "Q3") {
//     for (let i = 0; i < 2; i++) {
//       console.log(`${answers[i].answer}`);
//     }
//   } else if (questions.questions_num == "Q4") {
//     for (let i = 0; i < 5; i++) {
//       console.log(`${answers[i].answer}`);
//     }
//   } else if (questions.questions_num == "Q5") {
//     for (let i = 0; i < 3; i++) {
//       console.log(`${answers[i].answer}`);
//     }
//   }
// }
//
// function printA(i) {
//   if (questions.questions_num == "Q1") {
//     q_answer(0, 1, 2);
//   } else if (questions.questions_num == "Q2") {
//     q_answer(0, 1, 2);
//   } else if (questions.questions_num == "Q3") {
//     q_answer(0, 1, 2);
//   } else if (questions.questions_num == "Q4") {
//     q_answer(0, 1, 2);
//   } else if (questions.questions_num == "Q5") {
//     q_answer(0, 1, 2);
//   }
// }

// function q_answer(...args) {
//   let restParam = (arg) => console.log(`${answers.answer}`);
//   args.forEach(q_answer);
// }

// input matching
for (let i = 0; i < questions.length; i++) {
  printQ(i);
  printA(i);
  console.log(`답) ${input[i]}`);
}

// questions.forEach(() => console.log(answers));

// for (let key of questions) {
//   console.log(`${key} : ${question[key]}`);
// }

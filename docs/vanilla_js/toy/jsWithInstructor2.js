/* -문제의 단순화가 첫번째!
-요청자가 요청한 사항은 사람이 읽히기 쉽게 해달라는것
-컴퓨터가 알아들을 수 있는 순서로 쓰는게 첫번째 덕목
-코딩부터 하는 건 좋은 생각이 아님
-process부터 적기 
process를 명확히 할것*/

//3차 Object in Array 방식 !

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
//3차 방식 : Object in Array  <- 이렇게 하는 것을 추천[{questions_uid:Q1, answer_uids:[E1,E2]}]

//3차 방식 적용 방법

let polls = []; //전체 묶음
let question_compare;
let questions = {}; // 내부 묶음
let answer_uids = []; // 내부 설문 답변 묶음
for (let idx = 0; idx < questions_answers.length; idx++) {
  if (question_compare != questions_answers[idx]["questions_uid"]) {
    if (Object.keys(questions).length > 0) {
      questions["answer_uids"] = answer_uids;
      polls.push(questions);
      questions = {};
      answer_uids = [];
    }

    // console.log(`!= : ${questions_answers[idx]["questions_uid"]}`);
    // console.log(`!= : ${questions_answers[idx]["answer_uid"]}`);
    questions["questions_uid"] = questions_answers[idx]["questions_uid"];
    answer_uids.push(questions_answers[idx]["answer_uid"]);
  } else {
    // console.log(`== : ${questions_answers[idx]["answer_uid"]}`);
    answer_uids.push(questions_answers[idx]["answer_uid"]);
    if (idx + 1 >= questions_answers.length) {
      questions["answer_uids"] = answer_uids;
      polls.push(questions);
    }
  }
  question_compare = questions_answers[idx]["questions_uid"]; // 이전 uid 입력
}

// console.log(`${polls}`);

//Q5가 나오는 방법 두가지
//1. if문을 쓰고 안에 push 작성
//2. if문 안쓰고 마지막에 push만 작성

//출력 : key값은 쪼개지말기 ~ (ex: 'Q'+idx )
//polls[0]['questions_uid]
//polls[0]['answer_uid'][0]
//polls[0]['answer_uid'][1] ...

// 설문 문항을 가져오는 function
// Q1. 해당 매장을 방문시 매장은 청결 하였습니까?
// 1. E1
// 2. E2
// Q2. 주문시 직원은 고객님께 친절 하였습니까?
// ...

function getQuestionByUid(question_uid) {
  // questions_uid = 'Q1'
  let question_desc = "";
  for (question of questions_list) {
    if (question["questions_uid"] === question_uid) {
      question_desc = question["question"];
      break;
    }
  }
  return question_desc;
}

function getAnswerByUid(answer_uid) {
  let answer_desc = "";
  for (answer of answer_list) {
    if (answer["answer_uid"] === answer_uid) {
      //===는 data type도 비교 가능
      answer_desc = answer["answer"];
      break;
    }
  }
  return answer_desc;
}

for (poll of polls) {
  let question_desc = getQuestionByUid(poll["questions_uid"]);
  // console.log(`${poll["questions_uid"]}. ${question_desc}`); // == polls[idx]
  let answer_uids = poll["answer_uids"];
  answer_uids.forEach((answer_uid, index) => {
    // answers
    // console.log(`${index + 1}. ${getAnswerByUid(answer_uid)}`);
  });
}

// Event handlers
// Next 클릭 시 순서 있게 설문 표시

// 대상 변수는 polls
let queryNext = document.querySelector("#next");
queryNext.addEventListener("click", setPollContentNext);

let queryPrev = document.querySelector("#prev");
queryPrev.addEventListener("click", setPollContentPrev);

let index = 0;

//Next button desc
function setPollContentNext() {
  if (index > 4) {
    alert("설문 조사가 끝났습니다.");
  }

  let queryContent = document.querySelector("#poll-contents");
  // polls[0]["questions_uid"]; // 설문 문항
  // polls[0]["answer_uids"]; // 설문 답항 묶음

  //1.매장 상태가 좋은가요?
  //(1). 예
  //(2). 아니다
  // console.log(getQuestionByUid(polls[index]["questions_uid"]));
  let desc = `<div>${index + 1}.${getQuestionByUid(
    polls[index]["questions_uid"]
  )}<div>`;
  polls[index]["answer_uids"].forEach((answer_uid, index) => {
    //답항
    // console.log(`${index + 1}. ${getAnswerByUid(answer_uid)}`);
    desc =
      desc +
      `<label><div><input type="radio" value="answer_uid" name="answer" id=${
        polls[index]["questions_uid"]
      }></input>
      (${index + 1}). ${getAnswerByUid(answer_uid)}</label></div>`;
  });
  queryContent.innerHTML = desc;
  index++;
}

//Prev Button desc
function setPollContentPrev() {
  if (index === 1) {
    alert("이전 항목이 없습니다.");
  }
  let queryContent = document.querySelector("#poll-contents");
  let desc = `<div>${index - 1}.${getQuestionByUid(
    polls[index - 2]["questions_uid"]
  )}<div>`;
  polls[index - 2]["answer_uids"].forEach((answer_uid, index) => {
    desc =
      desc +
      `<label><div><input type="radio" value="answer_uid" name="answer" id=${
        polls[index]["questions_uid"]
      }></input>
      (${index + 1}). ${getAnswerByUid(answer_uid)}</label></div>`;
  });
  queryContent.innerHTML = desc;
  index--;
}

//Debuging 문제

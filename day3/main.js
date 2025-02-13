// 문제 1
// 유저가 입력하는 숫자가 0인지 음수인지 양수인지 판단하는 프로그램을 만드시오
const userInput = (userInputValue) => {
  if (userInputValue < 0) {
    console.log("음수");
  } else if (userInputValue === 0) {
    console.log("0");
  } else {
    console.log("양수");
  }
};

// 문제 2
// 나는 대학교 교수다. 레포트 점수에 따라 등급을 매기는 프로그램을 만드시오

// 90~100 : A
// 80~89 : B
// 70~79 : C
// 60~69 : D
// less than 59 : F
const totalResult = (result) => {
  if (result > 89) {
    console.log("A");
  } else if (result > 79 && result < 90) {
    console.log("B");
  } else if (result > 69 && result < 80) {
    console.log("C");
  } else if (result > 59 && result < 70) {
    console.log("D");
  } else {
    console.log("F");
  }
};

// 문제 3
// 한 지원자가 우리 회사에 지원을 했다. 지원자가 사용 가능한 스킬은 배열에 제공이 된다
let skills = ["HTML", "CSS", "Javascript"];
// Javascript와 React 둘 다 할 줄 안다면 “합격!” Javascript와 React 둘 중 하나만 할 줄 안다면 “예비”, 두 스킬이 없다면 “탈락” 을 보여주는 프로그램을 짜시오

// input : let skills = ["HTML","CSS","Javascript","React"]
// output: 합격

// input:let skills = ["HTML","CSS","Javascript"]
// output: 예비

// input:let skills = ["HTML","CSS"]
// output: 탈락

const test = () => {
  if (skills.includes("Javascript") && skills.includes("React")) {
    console.log("통과");
  } else if (skills.includes("Javascript") || skills.includes("React")) {
    console.log("예비");
  } else {
    console.log("탈락");
  }
};

test();

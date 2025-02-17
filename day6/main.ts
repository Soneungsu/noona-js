const startBtn = document.querySelector("#startBtn") as HTMLButtonElement;
const resetBtn = document.querySelector("#resetBtn")!;
const inputValue = document.querySelector("input")!;
const repository: Array<number> = [];

let resultArea = document.querySelector(".result")!;
let chanceArea = document.querySelector(".chance-area")!;
let chance: number = 3;
let computerRandom: number = 0;
let gameOver: boolean = false;

startBtn.addEventListener("click", play);
resetBtn.addEventListener("click", reset);

function pickRandonNum(): number {
  return (computerRandom = Math.floor(Math.random() * 100) + 1);
}
//웹페이지 첫 방문시 랜덤번호 실행
computerRandom = pickRandonNum();
console.log(computerRandom);
//

function play() {
  const userInput: number = Number(inputValue.value);
  if (isNaN(userInput)) {
    alert("숫자를 입력하세요");
    inputValue.value = "";
    return;
  }
  if (userInput <= 0 || userInput > 100) {
    alert("1과 100 사이의 숫자를 입력하세요");
    inputValue.value = "";
    return;
  }
  if (repository.some((num) => num === userInput)) {
    resultArea.textContent = "이미 입력하였습니다";
    inputValue.value = "";
    return;
  }

  repository.push(userInput);
  console.log(repository);
  inputValue.value = "";

  if (userInput === computerRandom) {
    resultArea.textContent = "정답입니다.";
    startBtn.disabled = true;
    return;
  }

  chance--;
  chanceArea.textContent = `${chance}번 남았습니다.`;

  // 유저가 입력한 값이 랜덤숫자보다 클경우 "down"
  // 유저가 입력한 값이 랜덤숫자보다 작을경우 "Up"
  if (userInput > computerRandom) {
    resultArea.textContent = "Down";
  } else if (userInput < computerRandom) {
    resultArea.textContent = "Up";
  }

  if (chance === 0) {
    gameOver = true;
    // console.log(gameOver);
    startBtn.disabled = true;
    chanceArea.textContent = "기회가 모두 소진되었습니다.";
  }
}

function reset() {
  gameOver = false;
  startBtn.disabled = false;
  chance = 3;
  chanceArea.textContent = `chance: ${chance}`;

  computerRandom = pickRandonNum();
  console.log(computerRandom);
}

// const startBtn = document.querySelector("#startBtn") as HTMLButtonElement;
// const resetBtn = document.querySelector("#resetBtn") as HTMLButtonElement;
// const resultArea = document.querySelector(".result") as HTMLElement;
// const chanceArea = document.querySelector(".chance-area") as HTMLElement;

// type GameElements = {
//   startBtn: HTMLButtonElement;
//   resetBtn: HTMLButtonElement;
//   resultArea: HTMLElement;
//   chanceArea: HTMLElement;
// };

// class NumberGuessingGame {
//   private repository: Array<number> = [];
//   private chance: number = 7;
//   private gameOver: boolean = false;
//   private startBtn: HTMLButtonElement;
//   private resetBtn: HTMLButtonElement;
//   private resultArea: HTMLElement;
//   private chanceArea: HTMLElement;

//   constructor(
//     startBtn: HTMLButtonElement,
//     resetBtn: HTMLButtonElement,
//     resultArea: HTMLElement,
//     chanceArea: HTMLElement
//   ) {
//     this.startBtn = startBtn;
//     this.resetBtn = resetBtn;
//     this.resultArea = resultArea;
//     this.chanceArea = chanceArea;
//   }
// }

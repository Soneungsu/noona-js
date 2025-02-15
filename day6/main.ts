const startBtn = document.querySelector("#startBtn") as HTMLButtonElement;
const resetBtn = document.querySelector("#resetBtn")!;
const inputValue = document.querySelector("input")!;
const repository: Array<number> = [];

let resultArea = document.querySelector(".result")!;
let chanceArea = document.querySelector(".chance-area")!;
let chance: number = 7;
let computerRandom: number = 0;
let gameOver: boolean = false;

function pickRandonNum(): number {
  return (computerRandom = Math.floor(Math.random() * 100) + 1);
}

startBtn.addEventListener("click", () => {
  //   console.log("hhh");
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
  chance--;
  chanceArea.textContent = `${chance}번 남았습니다.`;

  if (chance === 0) {
    gameOver = true;
    // console.log(gameOver);
    startBtn.disabled = true;
    chanceArea.textContent = "기회가 모두 소진되었습니다.";
  }

  pickRandonNum();
});

resetBtn.addEventListener("click", () => {
  gameOver = false;
  chance = 7;
  chanceArea.textContent = `chance:${chance}번`;
});

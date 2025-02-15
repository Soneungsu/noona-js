var startBtn = document.querySelector("#startBtn");
var resetBtn = document.querySelector("#resetBtn");
var inputValue = document.querySelector("input");
var repository = [];
var resultArea = document.querySelector(".result");
var chanceArea = document.querySelector(".chance-area");
var chance = 7;
var computerRandom = 0;
var gameOver = false;
function pickRandonNum() {
    return (computerRandom = Math.floor(Math.random() * 100) + 1);
}
startBtn.addEventListener("click", function () {
    //   console.log("hhh");
    var userInput = Number(inputValue.value);
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
    if (repository.some(function (num) { return num === userInput; })) {
        resultArea.textContent = "이미 입력하였습니다";
        inputValue.value = "";
        return;
    }
    repository.push(userInput);
    console.log(repository);
    inputValue.value = "";
    chance--;
    chanceArea.textContent = "".concat(chance, "\uBC88 \uB0A8\uC558\uC2B5\uB2C8\uB2E4.");
    if (chance === 0) {
        gameOver = true;
        // console.log(gameOver);
        startBtn.disabled = true;
        chanceArea.textContent = "기회가 모두 소진되었습니다.";
    }
    pickRandonNum();
});
resetBtn.addEventListener("click", function () {
    gameOver = false;
    chance = 7;
    chanceArea.textContent = "chance:".concat(chance, "\uBC88");
});

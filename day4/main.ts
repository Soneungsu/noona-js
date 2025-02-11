// 1부터 100까지 더하는 for문을 만들고 결과를 출력하시오.
let num: number = 0;
for (let i: number = 0; i <= 100; i++) {
  num += i;
  console.log(num);
}

// 문제 2
// 1부터 100까지 홀수만 출력하자.

for (let i: number = 0; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// 문제 3
// 1부터 50까지 369결과를 프린트하자.

// 1
// 2
// 짝
// 4
// 5
// 짝
// ...생략

// 28
// 짝
// 짝
// 짝
// 짝
// 짝짝
const game: () => void = () => {
  for (let i: number = 0; i <= 50; i++) {
    const str: string = i.toString();
    // console.log(str);
    let sum: string = "";
    for (let char of str) {
      //   console.log(char);
      if (char === "3" || char === "6" || char === "9") {
        sum += "짝";
      }
    }
    console.log(sum === "" ? i : sum);
  }
};

game();

// 문제 4
// 주어진 숫자가 소수이면 true 아니면 false를 출력하는 프로그램을 짜시오.
const isPrimeNumber: (num: number) => boolean = (num) => {
  if (num === 1) {
    return false;
  } else {
    for (let i: number = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
  }
  return true;
};

console.log(isPrimeNumber(4));

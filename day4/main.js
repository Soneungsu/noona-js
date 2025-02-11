// 1부터 100까지 더하는 for문을 만들고 결과를 출력하시오.
var num = 0;
for (var i = 0; i <= 100; i++) {
    num += i;
    console.log(num);
}
// 문제 2
// 1부터 100까지 홀수만 출력하자.
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }
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
// const game = () => {
//   let sum = "";
//   for (let i = 0; i <= 50; i++) {
//     let str = i.toString();
//     //   console.log(str);
//     if (str.includes("3") || str.includes("6") || str.includes("9")) {
//       sum += "짝";
//       //   console.log(sum);
//     }
//     console.log(sum === "" ? i : "짝");
//   }
// };
// game();
// 문제 4
// 주어진 숫자가 소수이면 true 아니면 false를 출력하는 프로그램을 짜시오.

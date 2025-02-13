// "안녕 내 이름은 제시카야"라는 문장을 프린트하는 함수 'greet’를 만드시오
var jessica = "제시카";
function great() {
    return "\uC548\uB155 \uB0B4 \uC774\uB984\uC740 ".concat(jessica, "\uC57C");
}
// 이름을 매개변수로 전달받아 다양한 이름을 프린트 할 수 있게 함수를 수정하시오 예) “안녕 내 이름은 에밀리야”, “안녕 내 이름은 할리야”
function great2(name) {
    return "\uC548\uB155 \uB0B4 \uC774\uB984\uC740 ".concat(name, "\uC57C");
}
console.log(great2("제시카"));
// 매개변수로 전달받은 이름을 반환하게 함수를 수정하시오
function named(name) {
    return "\uC548\uB155 \uB098\uB294 ".concat(name, "\uC57C");
}
var me = named("eungsu");
console.log(me);
//  meetAt 함수를 만들어주세요.
//      인자를 세개 받습니다.
//  첫번째 인자는 년도에 해당하는 숫자입니다.
//  두번째 인자는 월에 해당하는 숫자입니다.
//  세번째 인자는 일에 해당하는 숫자입니다.
//  년도 인자만 받았을 경우 → "1234년" 과 같은 형식의 문자열을 리턴 해주세요.
//  년도,월 인자를 받았을 경우 → 년도와 월을 조합해서 "1234년 5월" 과 같은 형식의 문자열을
//  리턴 해주세요.
//  년도,월,일 인자를 전부 받았을 경우 → 년도,월,일을 조합해서 "1234/5/6" 과 같은 형식의 문자열을
//  리턴 해주세요.
// 결과 예시
// meetAt(2022); // 결과 --> 2022년
// meetAt(2032, 3); // 결과 --> "2032년 3월"
// meetAt(1987, 10, 28); // 결과 --> "1987/10/28"
function meetAt(year, month, day) {
    if (year && month && day) {
        return "".concat(year, "\uB144 ").concat(month, "\uC6D4 ").concat(day, "\uC77C");
    }
    else if (year && month) {
        return "".concat(year, "\uB144 ").concat(month, "\uC6D4");
    }
    else {
        return "".concat(day, "\uC77C");
    }
}
console.log(meetAt(12, 3));
// findSmallestElement 함수를 구현해 주세요.
// findSmallestElement 의 arr 인자는 숫자 값으로만 이루어진 배열입니다.
// arr 의 값들 중 가장 작은 값을 리턴 해주세요.
// 만일 arr 가 비어있으면 0을 리턴 해주세요.
// 예를 들어, 다음과 같은 배열이 인자(input)으로 들어왔다면 0이 리턴 되어야 합니다.
// 이용되는 배열
// [100,200,3,0,2,1]
var arr = [];
function findSmallestElement(arr) {
    if (arr.length === 0) {
        return 0;
    }
    var min = arr.sort(function (a, b) { return a - b; });
    return min;
}
console.log(findSmallestElement(arr));
// 돈을 매개변수로 받으면 몇개의 지폐와 동전이 필요한지 최소 개수를 계산해주는 함수를 만드시오
// 출력예 )
// 12300인 경우
//  50000 X 0
//  10000 X 1
//  5000  X 0
//  1000 X 2
//  500 X 0
//  100 X 3
function getMinimumCurrency(amount) {
    var arr = [50000, 10000, 5000, 1000, 500, 100];
    var result = {};
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var unit = arr_1[_i];
        result[unit] = Math.floor(amount / unit);
        amount %= unit;
    }
    console.log(result);
}
getMinimumCurrency(13200);
function test() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    // console.log(numbers);
    return numbers.reduce(function (a, b) { return a + b; });
}
console.log(test(1, 2, 3, 4));

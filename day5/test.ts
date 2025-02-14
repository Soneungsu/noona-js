type Commend = "add" | "substract" | "multiply" | "divide" | "remainder";
type Direction = "up" | "down" | "right" | "left";

// 계산기 만들기 객체지향

class Calculate {
  a: number;
  b: number;
  constructor(a: number, b: number) {
    this.a = a;
    this.b = b;
  }

  calculate = () => {};
}

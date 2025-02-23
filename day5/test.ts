{
  // type CoffeeCup = {
  //   shots: number;
  //   hasMilk: boolean;
  // };

  //   const COFFEE_GRAMM_PER_SHOT: number = 7;
  //   let coffeeBeans: number = 0;
  //   function makeCoffee(shots: number): CoffeeCup {
  //     if (coffeeBeans > shots * COFFEE_GRAMM_PER_SHOT) {
  //       throw new Error("not enough coffee beans");
  //     }
  //     coffeeBeans -= shots * COFFEE_GRAMM_PER_SHOT;
  //     return {
  //       shots: shots,
  //       hasMilk: false,
  //     };
  //   }
  //   const coffee = makeCoffee(2);
  //   console.log(coffee);

  // class CoffeeMachine {
  //   shots: number;
  //   hasMilk: boolean;
  //   coffeeBeans: number = 50;
  //   COFFEE_GRAMM_PER_SHOT: number = 7;
  //   constructor(shots: number, hasMilk: boolean) {
  //     this.shots = shots;
  //     this.hasMilk = hasMilk;
  //   }
  //   makeCoffee(shots: number): CoffeeCup {
  //     if (this.coffeeBeans < shots * this.COFFEE_GRAMM_PER_SHOT) {
  //       throw new Error("not enough coffee");
  //     }
  //     this.coffeeBeans -= shots * this.COFFEE_GRAMM_PER_SHOT;
  //     console.log(this.coffeeBeans);
  //     return {
  //       shots,
  //       hasMilk: false,
  //     };
  //   }
  // }
  // let newCoffee = new CoffeeMachine(2, false);
  // let coffees = newCoffee.makeCoffee(2);
  // console.log(coffees);
  let str = "hhsafsadf.sdafsdaf";
  console.log(str.split("."));
}

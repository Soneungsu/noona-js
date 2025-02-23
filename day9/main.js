let names = [
  "Steven Paul Jobs",
  "Bill Gates",
  "Mark Elliot Zuckerberg",
  "Elon Musk",
  "Jeff Bezos",
  "Warren Edward Buffett",
  "Larry Page",
  "Larry Ellison",
  "Tim Cook",
  "Lloyd Blankfein",
];

let upperCaseName = names.map((item) => item.toUpperCase());
console.log(upperCaseName);
// 성을제외한 이름만 출력하시오. (예-["Steven","Bill","Mark","Elon"…])

let firstNames = names.map((item) => item.split(" ")[0]);
console.log(firstNames);
// 이름의 이니셜만 출력하시오. (예-["SPU","BG","MEZ","EM"…])

let initialOnly = names.map((item) => {
  let splitName = item.split(" ");
  let initial = "";
  splitName.forEach((nameItem) => (initial += nameItem[0]));
  return initial;
});
console.log(initialOnly);

let includeA = names.filter((item) => item.includes("a"));
console.log(includeA);

let doubleLetter = names.filter((item) => {
  let splitName = item.split("");
  return splitName.some((letter, index) => letter == splitName[index + 1]);
});

console.log(doubleLetter);

console.log(names.some((item) => item.length >= 20));

console.log(
  names.some((item) => {
    let splitName = item.split(" ");
    splitName.pop();
    return splitName.some((eachName) =>
      eachName.toLocaleLowerCase().includes("p")
    );
  })
);

console.log(names.every((item) => item.length >= 20));

console.log(names.every((item) => item.includes("a")));

console.log(names.find((item) => item.length >= 20));

console.log(names.find((item) => item.split(" ").length >= 3));

console.log(names.findIndex((item) => item.length >= 20));

console.log(names.findIndex((item) => item.split(" ").length >= 3));

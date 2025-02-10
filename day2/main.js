let animals = [
  "Aardvark",
  "Albatross",
  "Alligator",
  "Alpaca",
  "Ant",
  "Ape",
  "Armadillo",
  "Donkey",
  "Baboon",
  "Badger",
  "Barracuda",
  "Bat",
  "Bear",
  "Beaver",
  "Bee",
  "Bison",
  "Cat",
  "Caterpillar",
  "Cattle",
  "Chamois",
  "Cheetah",
  "Chicken",
  "Chimpanzee",
  "Chinchilla",
  "Chough",
  "Clam",
  "Cobra",
  "Cockroach",
  "Cod",
  "Cormorant",
  "Dugong",
  "Dunlin",
  "Eagle",
  "Echidna",
  "Eel",
  "Eland",
  "Elephant",
  "Elk",
  "Emu",
  "Falcon",
  "Ferret",
  "Finch",
  "Fish",
  "Flamingo",
  "Fly",
  "Fox",
  "Frog",
  "Gaur",
  "Gazelle",
  "Gerbil",
  "Giraffe",
  "Grasshopper",
  "Heron",
  "Herring",
  "Hippopotamus",
  "Hornet",
  "Horse",
  "Kangaroo",
  "Kingfisher",
  "Koala",
  "Kookabura",
  "Moose",
  "Narwhal",
  "Newt",
  "Nightingale",
  "Octopus",
  "Okapi",
  "Opossum",
  "Quail",
  "Quelea",
  "Quetzal",
  "Rabbit",
  "Raccoon",
  "Rail",
  "Ram",
  "Rat",
  "Raven",
  "Red deer",
  "Sandpiper",
  "Sardine",
  "Sparrow",
  "Spider",
  "Spoonbill",
  "Squid",
  "Squirrel",
  "Starling",
  "Stingray",
  "Tiger",
  "Toad",
  "Whale",
  "Wildcat",
  "Wolf",
  "Worm",
  "Wren",
  "Yak",
  "Zebra",
];

// 어레이에 마지막 아이템 “Zebra” 제거하기
animals.pop("Zebra");
console.log(animals);

// 주어진 어레이에 “Dog” 추가하기
animals = [...animals, "Dog"];
console.log(animals);

// 주어진 어레이에 “Mosquito”,“Mouse”,“Mule” 추가하기
animals = [...animals, "Mosquito", "Mouse", "Mule"];
console.log(animals);
// 해당 어레이에는 "Human"이 있는가?
console.log(animals.includes("Human")); // false

// 해당 어레이에는 “Cat” 이 있는가?
console.log(animals.includes("Cat")); // true

// "Red deer"을 "Deer"로 바꾸시오
// 예제 1) 원본 데이터값을 건드리지 않고 새로운 배열로 반환
const found = animals.filter((item) => item === "Red deer");
console.log(found);
if (found.length > 0) {
  const updated = found.map((item) => (item === "Red deer" ? "Deer" : ""));
  console.log(updated);
}
// 예제 2)

const index = animals.indexOf("Red deer");
// console.log(index);
if (index !== -1) {
  animals.splice(index, 1, "Deer");
}
console.log(animals);

// "Spider"부터 3개의 아이템을 기존 어레이에서 제거하시오
const spiderIndex = animals.indexOf("Spider");
// console.log(spiderIndex);
if (spiderIndex !== -1) {
  animals.splice(spiderIndex, 3);
}

// "Tiger"부터 그 이후의 값을 제거하시오 (Tiger 포함임)
const tigerIndex = animals.indexOf("Tiger");
// console.log(tigerIndex);
animals.splice(tigerIndex);
console.log(animals);

// "B"로 시작되는 아이템인 "Baboon"부터 "Bison"까지 가져와 새로운 어레이에 저장하시오

const startB = animals.filter((item) => item.startsWith("B"));
// console.log(startB);

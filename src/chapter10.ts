// 대수타입
// 여러개의 타입을 합성해서 새롭게 만들어낸 타입
// -> 합집합 타입과 교집합 타입이 존재함
// union 타입

let a: string | number;

a = 1;
a = "a";

let arr: (number | string | boolean)[] = [1, "hell", true];

type Union1 = Dog | Person;

let union1: Union1 = {
  name: "전정호",
  color: "brown",
};

let union2: Union1 = {
  name: "전정호",
  language: "한글",
};

let union3: Union1 = {
  name: "전정호",
  color: "brown",
  language: "한글",
};

// let union4: Union1 = {
//   name: "전정호",

// };

// 2. 교집합 타입 - intersection 타입

let variable: number & string;

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Intersection = Dog & Person;

let intersection: Intersection = {
  name: "dd",
  color: "ddd",
  language: " dd",
};

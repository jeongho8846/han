// 객체 타입간의 호환성

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "brown",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};

animal = dog;
// dog = animal;

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "한입크기",
  price: 500000,
  skill: "react",
};

book = programmingBook;

//초과 프로퍼티 검사

type Book = {
  name: string;
  price: number;
};

let book2: Book = {
  name: "한입크기",
  price: 500000,
  // skill: "react",
};

let book3: Book = programmingBook;

function func(book: Book) {}
func({
  name: "한입",
  price: 500,
});
func(programmingBook);

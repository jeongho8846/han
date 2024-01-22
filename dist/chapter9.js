// 객체 타입간의 호환성
let animal = {
    name: "기린",
    color: "brown",
};
let dog = {
    name: "돌돌이",
    color: "brown",
    breed: "진도",
};
animal = dog;
let book;
let programmingBook = {
    name: "한입크기",
    price: 500000,
    skill: "react",
};
book = programmingBook;
let book2 = {
    name: "한입크기",
    price: 500000,
    // skill: "react",
};
let book3 = programmingBook;
function func(book) { }
func({
    name: "한입",
    price: 500,
});
func(programmingBook);
export {};

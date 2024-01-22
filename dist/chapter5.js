//enum 타입
// 여러가지 값들에 각각 이름에 부여해 열거해두고 사용하는 타입
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
var Language;
(function (Language) {
    Language["korea"] = "ko";
    Language["english"] = "en";
})(Language || (Language = {}));
const user1 = {
    name: "전정호",
    role: Role.ADMIN,
    Language: Language.korea,
};
const user2 = {
    name: "남태호",
    role: Role.USER,
    Language: Language.english,
};
const user3 = {
    name: "임병성",
    role: Role.GUEST,
    Language: Language.english,
};
console.log(user1, user2, user3);
export {};

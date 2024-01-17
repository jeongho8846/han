//타입 별칭

type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
};

let user1: User = {
  id: 1,
  name: "전정호",
  nickname: "calse",
  birth: "1988.04.06",
  bio: "메롱",
};

let user2: User = {
  id: 2,
  name: "고말숙",
  nickname: "calse",
  birth: "1988.04.06",
  bio: "메롱",
};

//인덱스 시그니처
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  korea: "ko",
  UnitedState: "US",
  UnitedKingdom: "uk",
};

type CountryNumbers = {
  [key: string]: number;
  korea: number;
};

let countryNumbers: CountryNumbers = {
  korea: 82,
  UnitedState: 1,
  UnitedKingdom: 2,
};

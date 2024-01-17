//객체 리터럴 타입 - 구조적 타입 시스템 -> 프로퍼티 베이스드 시스템
let user: {
  id?: number; //선택적프로퍼티, 옵셔널프로퍼티
  name: string;
} = {
  id: 1,
  name: "전정호",
};

let config: {
  readonly apikey: string; //reaonly 값을 바꿀 수 없음
} = {
  apikey: "MY KEY",
};

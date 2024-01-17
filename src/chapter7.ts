// void
// void = 공허 = 아무것도없다

function func1(): string {
  return "heel";
}

function func2(): void {
  console.log("heee");
}

//never 존재하지않는
//불가능한 타입
function func3(): never {
  while (true) {}
}

function func4(): never {
  throw Error();
}

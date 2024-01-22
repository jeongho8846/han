// unknown 타입
function unknownExam() {
    let a = 1;
    let b = "hhh";
    let c = true;
    let unknownVar;
    //   let num: number = unknownVar;
    //   let str: string = unknownVar;
}
// never 타입
function neverExam() {
    function neverFunc() {
        while (true) { }
    }
    let num = neverFunc();
    let str = neverFunc();
    //   let never1: never = 10;
    //   let never2: never = "10";
}
// any 타입
// 모든 계층에서 자신에게 다운 캐스팅이 되며, 자신이 모든 곳에 다운 캐스팅이 가능하다.
// 단, 네버타입으로는 안된다!
function anyExam() {
    let unknownVar;
    let anyVar;
    let undefinedVar;
    let neverVar;
    anyVar = unknownVar;
    undefinedVar = anyVar;
    anyVar = neverVar;
    //   neverVar = anyVar;
}
export {};

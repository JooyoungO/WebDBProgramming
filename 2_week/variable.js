var a = 1;  // var 키워드 안정적으로 선언
console.log(a);
a = 3;
console.log(a);
// 1 = 2    상수에 대입 ❌

// 중복되는 코드 줄이기
var name = ' joooo ';
var letter = 'Dear' + name + 'hello' + name;
console.log(letter); 

console.clear();

// ES2015 이전에는 var 변수로 선언
// ES2015 이후부터는 const, let
// 범위 차이
if(true) {
    var a = 3;
}
console.log(a); // 3

if(true) {
    const y = 5;
}
console.log(y); // err -> const, let은 함수, 블록({}) scope

// const 는 상수
// 할당한 값은 다른 값으로 변경 불가
// 변경하고자 할 때는 let으로 변수 선언
// 상수 선언 시부터 초기화가 필요함
// 초기화를 하지 않고 선언하면 에러
const a = 0;
// a = 1;   재할당 ❌
// const b; 초기화 필수

let c = 0;
c = 1;
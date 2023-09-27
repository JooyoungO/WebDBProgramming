// this
// 최상의 scope의 this는 module.exports를 가리킴
// 함수 선언문 내부의 this는 global(전역) 객체를 가리킴
console.log(this);
console.log(this === module.exports);
console.log(this === exports);

function whatIsThis() {
    console.log('function', this === exports, this === global);
}
whatIsThis()
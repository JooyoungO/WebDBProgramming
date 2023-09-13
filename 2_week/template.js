// 템플릿 리터럴
// 템플릿 문자열
// 문자를 표현하는 방법
// 코드상에서 줄 바꿈을 하려면 먼저 역 슬래시 \ 입력


var name = ' joo ';
var letter = 'Dear' + name + '\\'   // Dear joo \
console.log(letter);
letter = 'TO' + name + '\\hihihi' + name;
console.log(letter);    // TO joo \hihihi joo
letter = '👋🏻' + name + '\
\
nice' + name;
console.log(letter);    // 👋🏻 joo nice joo

// 실행결과에서 줄 바꿈을 하려면 특수기호 사용 ‘ \n ’
letter = 'Dear' + name + '\n\nhi, nice to meet you' + name;
console.log(letter);

// 문자열을 템플릿 리터럴로 표시 -> `${}`
letter = `Dear ${name}`;    // + 연산자를 없애고 ${변수명} 형식으로 표현
console.log(letter);

console.clear()

// code 1
var num1 = 1;
var num2 = 2;
var result = 3;
var string = num1 + ' 더하기 ' + num2 + '는 \'' + result + '\'';
console.log(string);    // 1 더하기 2는 '3'

// code 2
const a = 1;
const b = 2;
const result2 = 3;
const string2 = `${a} 더하기 ${b}는 '${result2}'`;
console.log(string2);   // 1 더하기 2는 '3'

console.clear()

// 객체의 메서드에 function 키워드를 붙이지 않아도 됨
//[변수 + 값] 으로 동적 속성 명을 객체 속성 명으로 사용 가능
const sayNode = function() {
    console.log('Node');
}
const es = 'ES';

const newObject = {
    sayJS() {
        console.log('JS');
    },
    sayNode,
    [es + 6]: 'Fantastic',  // 객체속성 key 값으로 ES6, value 값으로 Fantastic
};
newObject.sayNode();
newObject.sayJS();
console.log(newObject.ES6);
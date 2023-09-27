const path = require('path')

const string = __filename

// 경로의 구분자
console.log('path.sep : ', path.sep);
// 환경 변수의 구분자
console.log('path.delimiter : ', path.delimiter);

console.log('----------------------------');
// 파일이 위치한 폴더 경로
console.log('path.dirname(경로) : ', path.dirname(string));
// 파일의 확장자
console.log('path.extname(경로) : ', path.extname(string));
// 파일의 이름(확장자 포함), 파일의 이름만 표시하고 싶다면 두번째 인자로 파일의 확장자 
console.log('path.basename(경로, 확장자) : ', path.basename(string));
console.log('path.basename - extname : ', path.basename(string, path.extname(string)));
console.log('----------------------------');

// 파일 경로를 root, dir, base, ext, name 으로 분리
console.log('path.parse() : ', path.parse(string));
// path.parse() 한 객체를 파일 경로로 합침
console.log('path.format() : ', path.format({
    dir : '/Users/ohjooyoung/Documents/WebDBProgramming/3_week',
    name : 'path',
    ext : '.js'
}));
// /, ₩ 를 실수로 여러번 사용했거나 혼용했을 때 정상적인 경로로 변환
console.log('path.normalize() : ', path.normalize('/Users/ohjooyoung/Documents/WebDBProgramming/3_week///path.js'));
console.log('----------------------------');
// 파일의 경로가 절대 경로인지 상대경로인지 boolean
console.log('path.isAbsolute() : ', path.isAbsolute('/Users/ohjooyoung'));
console.log('path.isAbsolute(./home) : ', path.isAbsolute('./home'));
console.log('----------------------------');
// 경로를 2개 넣으면 첫번째 경로에서 두번째 경로로 가는 방법을 알려줌
console.log('path.relative() : ', path.relative('/Users/ohjooyoung/Documents/WebDBProgramming/3_week/path.js', '/Users\\'));
// 여러 인자를 넣으면 하나의 경로로 합쳐줌
console.log('path.join() : ', path.join(__dirname, '..', '..', '/ohjooyoung', '.', '/3_week'));
// ~= path.join() 와 차이점 : resolve / 절대 경로로 처리, join 상대 경로로 처리
console.log('path.resolve() : ', path.resolve(__dirname, '..', 'ohjooyoung', '.', '3_week'));

path.join('/a', '/b', 'c'); // /a/b/c
path.resolve('/a', '/b', 'c')   // /b/c
// 각종 편의 기능을 모아둔 모듈

const util = require('util');
const crypto = require('crypto');

// util.deprecate : 함수가 deprecated 처리되었음을 알림
// 첫 번째 인자로 넣은 함수를 사용했을 때 경고 메시지 출력
// 두 번째 인자로 경고 메시지, 함수가 조만간 사라지거나 변경될 때 알려줄 수 있어 유용
const dontUseMe = util.deprecate((x, y) => {
    console.log(x + y);
}, 'dontUseMe 함수는 deprecated되었으니 더이상 사용하지 마세요!');
dontUseMe(1, 2);

// util.promisify : 콜백 패턴을 프로미스 패턴으로 바꿔줌
// 바꿀 함수를 인자로 제공
// 이렇게 바꾸어두면 async/await 패턴까지 사용 가능
const randomBytesPromise = util.promisify(crypto.randomBytes);
randomBytesPromise(64)
    .then((buf) => {
        console.log(buf.toString('base64'));
    })
    .catch((error) => {
        console.error(error);
    });
// 모듈은 require 로 가져옴(내장 모듈이라 경로 대신 이름만 적어줘도 됨)

const os = require('os')

console.log('-------------------- 운영체제 정보 --------------------');
// 아키텍처의 정보 == process.arch()
console.log('os.arch() : ', os.arch());
// 운영체제의 플랫폼 정보 == process.platform()
console.log('os.platform() : ', os.platform());
// 운영체제의 종류
console.log('os.type() : ', os.type());
// 운영체제 부팅 이후 흐른 시간을 보여줌
console.log('os.uptime : ', os.uptime());
// 컴퓨터의 이름
console.log('os.hostname() : ', os.hostname());
// 운영체제의 버전
console.log('os.release() : ', os.release());

console.log('\n');
console.log('-------------------- 경로 --------------------');
// 홈 디렉터리 경로
console.log('os.homedir() : ', os.homedir());
// 임시 파일 저장 경로
console.log('os.tmpdir() : ', os.tmpdir());

console.log('\n');
console.log('-------------------- cpu 정보 --------------------');
// 컴퓨터의 코어 정보
console.log('os.cpus() : ', os.cpus());
console.log('os.cpus().length : ', os.cpus().length);

console.log('\n');
console.log('-------------------- 메모리 정보 --------------------');
// 사용 가능한 메모리(RAM)을 보여줌
console.log('os.freemem() : ', os.freemem());
// 전체 메모리 용량
console.log('os.totalmem() : ', os.totalmem());

// os.contents() : 각종 에러와 신호에 대한 정보가 담겨있음


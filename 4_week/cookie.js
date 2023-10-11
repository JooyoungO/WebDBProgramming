// 누가 요청을 보냈는지 알 수 없음(IP 주소와 브라우저 정보 정도만 앎)
// 로그인을 구현하면 됨
// 쿠키와 세션이 필요
// 쿠키 : 키 - 값의 쌍
// name = zerocho
const http = require('http');

http.createServer((req, res) => {
    console.log(req.url, req.headers.cookie);
    // writeHead : 요청 헤더에 입력하는 메서드
    // Set-Cookie : 브라우저에게 쿠기를 설정하라고 명령
    // 2XX : 성공을 알리는 상태 코드 ( 200(성공), 201(작성됨) )
    res.writeHead(200, { 'Set-Cookie' : 'mycookie test'});
    res.end('Hello Cookie');
})
    .listen(8083, () => {
        console.log('8083번 포트에서 서버 대기 중입니다.');
    });
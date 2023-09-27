// 양방향 암호화
const crypto = require('crypto')

const algorithm = 'aes-256-cbc';
const key = 'abcdefghijklmnopqrstuvwxyz123456';
const iv = '1234567890123456';

// 암호화 알고리즘과 키, 초기화 백터
// 키는 32바이트, 초기화 벡터는 16바이트로 고정
const cipher = crypto.createCipheriv(algorithm, key, iv);
// 암호화할 대상과 대상의 인코딩, 출력 결과물의 인코딩
let result = cipher.update('암호화할 문장', 'utf8', 'base64');
// 출력 결과물의 인코딩을 넣어주면 암호화 완료
result += cipher.final('base64');
console.log('암호화 : ', result);

// 복호화할 때
const decipher = crypto.createDecipheriv(algorithm, key, iv);
let result2 = decipher.update(result, 'base64', 'utf8');
result2 += decipher.final('utf8');
console.log('복호화 : ', result2);
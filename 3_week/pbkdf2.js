// pbkdf2나 bcrypt, scrypt 알고리즘으로 비밀번호를 암호화

const crypto = require('crypto');

// 64 바이트 문자열 생성 -> salt 역할
crypto.randomBytes(64, (err, buf) => {
    const salt = buf.toString('base64');
    console.log('salt : ', salt);
    crypto.pbkdf2('비밀번호 : ', salt, 100000, 64, 'sha512', (err, key) => {
        console.log('password : ', key.toString('base64'));
    });
});
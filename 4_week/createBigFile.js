const fs = require('fs');
const file = fs.createWriteStream('./big.txt');

for (let i = 0; i <= 10000; i++) {
    file.write('큰 파일을 만드는 중..');
}
file.end();
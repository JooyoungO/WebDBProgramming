const url = require('url');

const { URL } = url;
const myURL = new URL('http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor');
console.log('new URL() : ', myURL);
console.log('url.format() : ', url.format(myURL));
console.log('-------------------------------------');

const parsedURL = url.parse('http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor');
// 주소를 분해
console.log('url.parse(주소) : ', parsedURL);
console.log('url.format(객체) : ', url.format(parsedURL));

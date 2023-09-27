// 

const url = require('url')
const querystring = require('querystring')

const parsedURL = url.parse('http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript');
const query = querystring.parse(parsedURL.query);
// url의 query 부분을 자바스크립트 객체로 분해
console.log('querystring.parse(쿼리) : ', query);
// 분해된 query 객체를 문자열로 다시 조립
console.log('querystring.stringify(객체) : ', querystring.stringify(query));
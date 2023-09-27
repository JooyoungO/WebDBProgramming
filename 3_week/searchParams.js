// WHATWG 방식에서 쿼리스트링(search) 부분 처리를 도와주는 객체
const { URL } = require('url')

const myURL = new URL('http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript');

console.log('searchParams : ', myURL.searchParams);
// 키에 해당하는 모든 값을 
console.log('searchParams.getAll(): ', myURL.searchParams.getAll('category'));
// 해당 키에 대한 첫 번째 값만
console.log('searchParams.get() : ', myURL.searchParams.get('limit'));
// 해당 키가 있는지 없는지 boolean
console.log('searchParams.has() : ', myURL.searchParams.has('page'));

// 모든 키를 반복기 객체로 가져옴
console.log('searchParams.keys() : ', myURL.searchParams.keys());
// 모든 값을 반복기 객체로 가져옴
console.log('searchParams.values() : ', myURL.searchParams.values());

// 해당 키를 추가, 같은 키의 값이 있다면 유지하고 하나 더 추가
myURL.searchParams.append('filter', 'es3');
myURL.searchParams.append('filter', 'es5');
console.log(myURL.searchParams.getAll('filter'));

// append와 비슷하지만 중복 ❌
myURL.searchParams.set('filter', 'es6');
console.log(myURL.searchParams.getAll('filter'));

myURL.searchParams.delete('filter');
console.log(myURL.searchParams.getAll('filter'));

// 조작한 searchParams 객체를 다시 문자열로 
// 이 문자열을 search에 대입하면 주소 객체에 반영
console.log('searchParams.toString() : ', myURL.searchParams.toString());
myURL.search = myURL.searchParams.toString();

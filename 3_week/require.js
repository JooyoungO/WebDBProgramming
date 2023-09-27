// require 가 제일 위에 올 필요 ❌
// require.cache 에 한번 require한 모듈에 대한 캐시 정보가 들어있음
// require.main 은 노드 실행시  첫 모듈을 가리킴

module.exports = '저를 찾아보세요';

require('./module/var.js')

console.log('require.cache : ');
console.log(require.cache);
console.log('require.main : ');
console.log(require.main === module);
console.log(require.main.filename);
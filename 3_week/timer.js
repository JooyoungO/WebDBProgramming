// Immediate 가 제일 먼저 실행됨
// Immediate2는 clearimmediate를 사용해서 취소 했으므로 실행되지 않음
// 1초 후에 interval 콜백이 실행됨
// 1.5초 후에 timeout의 콜백이 실행 예정
// Interval콜백은 1초마다 실행되므로 2초가 지났을 때도 콜백이 실행됨
// 2.5초가 지났을 때 clearTimeout과 clearInterval이 각각 timeout2와 interval을 취소함
// 3초 후에는 로그가 아무것도 남지 않음 

const timeout = setTimeout(() => {
    console.log('2초 후 실행');
}, 2000);

const interval = setInterval(() => {
    console.log('1초마다 실행');
}, 1000);

const timeout2 = setTimeout(() => {
    console.log('실행되지 않습니다');
}, 3000);

setTimeout(() => {
    clearTimeout(timeout2)
    clearInterval(interval);
}, 2500);

const immediate = setImmediate(() => {
    console.log('즉시 실행');
});

const immediate2 = setImmediate(() => {
    console.log('실행되지 않습니다.');
});

clearImmediate(immediate2);

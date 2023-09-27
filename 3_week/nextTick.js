// process.nextTick(callback)
// 이벤트 루프가 다른 콜백 함수들보다 nextTick의 콜백 함수를 우선적으로 처리

setImmediate(() => {
    console.log('immediate');
});

process.nextTick(() => {
    console.log('nextTick');
});

setTimeout(() => {
    console.log('timeout');
}, 0);

Promise.resolve().then(() => console.log('promise'));

// process.exit()
// 현재의 프로세스를 멈춤
// 코드가 없거나 0이면 정상 종료 이외의 코드는 비정상

let i = 1;
setInterval(() => {
    if(i === 5) {
        console.log('종료');
        process.exit();
    }
    console.log(i);
    i++;
}, 1000)
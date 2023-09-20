const pro1 = Promise.resolve('success1');
const pro2 = Promise.resolve('success2');

/**
 * Promise.all(배열)
 * 여러개의 프로미스를 동시에 실행
 * 기존에 콜백을 여러 번 중첩 사용했던 문제를 해결 💡
 * -> 하나라도 실패하면 catch로 감
 * allSettled 로 실패한 것만 추려낼 수 있음
 */
Promise.all([pro1, pro2])
    .then((result) => {
        console.log(result);    // ['success1', 'success2]
    })
    .catch((error) => {
        console.error(error);
    });

// for await of
// resolve 된 프로미스가 변수에 저장 반환
// await를 사용하기 때문에 async 함수 안에서 

(async () => {
    for await (promise of [pro1, pro2]) {
        console.log(promise);
    }
})();
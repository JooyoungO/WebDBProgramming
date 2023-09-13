// promise 
// 내용이 실행은 되었지만 결과를 아직 반환하지 않은 객체
// then 을 붙이면 결과를 반환
// then 연달아 사용 가능(프로미스 체이닝)
// 실행이 완료되지 않았으면 완료된 후에 then 내부 함수가 실행됨

// resolve(성공 리턴 값) -> then 으로 연결
// reject(실패 리턴 값) -> catch 로 연결
// finally 부분은 무조건 실행

const condition = true;
const promise = new Promise((resolve, reject) => {
    if(condition) {
        resolve('성공');
    } else {
        reject('실패');
    }
});
// 다른 코드가 들어갈 수 있음
promise
    .then((message) => {
        console.log(message);   // 성공(resolve)한 경우 실행
    })
    .catch((error) => {
        console.error(error);   // 실패(reject)한 경우 실행
    })
    .finally(() => {    // 끝나고 무조건 실행
        console.log('무조건');
    });

    promise
    .then((message) => {
        return new Promise((resolve, reject) => {
            resolve(message);
        })
    })
    .then((message2) => {
        console.log(message2);
        return new Promise((resolve, reject) => {
            resolve(message2);
        })
    })
    .then((message3) => {
        console.log(message3);
    })
    .catch((error) => {
        console.error(error);
    })
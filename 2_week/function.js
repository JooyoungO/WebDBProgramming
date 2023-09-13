// 화살표 함수
// 기존 function() 을 대체 ❌
// this 가 달라짐

function add1(x, y) {
    return x + y;
}

const add2 = (x, y) => {
    return x + y;
}

const add3 = (x, y) => x + y;   // 함수의 본문이 return만 있는 경우 return 생략

const add4 = (x, y) => (x + y); // return이 생략된 함수의 본문을 소괄호로 감쌀 수 있음

function not1(x) {
    return !x;
}

const not2 = x => !x;

// forEach 의 화살표함수의 this와 logFriend의 this가 같아짐
// 화살표 함수는 자신을 포함하는 함수의 this를 물려받음
// 물려받고 싶지 ❌ -> function() {}을 사용
const relationship = {
    name: 'joo',
    friends: ['ooo', 'noo', 'zoo'],
    logFriends() {
        this.friends.forEach(friend => {
            console.log(this.name, friend);
        })
    }
}
relationship.logFriends();
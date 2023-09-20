// async / await
// then - catch 가 계속 반복되면 축약
// variable = await Promise; -> promise가 resolve된 값이 variable에 저장
// async 함수는 항상 promise 를 반환

function findAndSaveUser(Users) {
    Users.findOne({})
        .then((user) => {
            user.name = 'joo';
            return user.save();
        })
        .then((user) => {
            return Users.findOne({ gender : 'w' });
        })
        .then((user) => {
            // 내용
        })
        .catch(console.error());
}

// async funtion 도입
async function findAndSaveUser(Users) { // 함수 선언부 교체
    try {
        let user = await Users.findOne({}); // 프로미스 앞에 await
        user.name = 'joo';
        user = await user.save();
        user = await Users.findOne({ gender : 'w' });
    } catch (error) {
        console.error(error);
    }
}

// 화살표 함수도 async / await 가능
const findAndSaveUser = async (Users) => {
    try {
        let user = await Users.findOne({}); // 프로미스 앞에 await
        user.name = 'joo';
        user = await user.save();
        user = await Users.findOne({ gender : 'w' });
    } catch (error) {
        console.error(error);
    }
};
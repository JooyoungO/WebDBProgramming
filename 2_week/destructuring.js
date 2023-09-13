// 구조 분해 할당
// const {변수} = 객체; -> 객체 안의 속성을 변수명으로 사용 가능
const candyMachine = {
    status: {
        name: 'lemon',
        count: 5,
    },
    getCandy() {
        this.status.count--;
        return this.status.count;
    },
}
const { getCandy, status: {count}} = candyMachine;
console.log({ getCandy, status: {count}});

// 
// var array = ['jooo', {}, 10, true];
// var name = array[0];
// var obj = array[1];
// var bool = array[3];

// 세 번째 요소인 10에는 변수 명을 지어주지 않았으므로 무시
const array = ['jooo', {}, 10, true];
const [name, obj, ,bool] = array;
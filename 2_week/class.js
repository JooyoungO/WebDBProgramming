// prototype 문법을 깔끔하게 작성할 수 있는 class 문법 도입
// constructor(생성자), extends(상속) 깔끔 처리
// 코드가 그룹화 -> 가독성 👍🏻

class Human {
    constructor(type = 'human') {
        this.type = type;
    }
    
    // static 키워드 : class의 인스턴스 없이 호출 가능
    static isHuman(human) {
        return human instanceof Human
    }

    breathe() {
        console.log('h-a-a-a-m');
    }
}

class Zero extends Human {
    constructor(type, firstName, lastName) {
        super(type);
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayName() {
        super.breathe();
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

const newZero = new Zero('human', 'oh', 'joo');
Human.isHuman(newZero);
newZero.sayName();
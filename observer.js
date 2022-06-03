import {Action, context, attack, stab, cold, feed, stun, AttackStrategy, StabStrategy, ColdStrategy, FeedStrategy, StunStrategy, i} from './jinyeong.js'
export {Subject, Observer, subject, observer1, observer2, Japanese, jap1}
function Subject() { // Subject
    this.observers = [];
}
Subject.prototype.attachObserver = function(observer) {
    this.observers.push(observer);
}
Subject.prototype.detachObserver = function(observer) {
    this.observers = this.observers.filter(attachedObserver => attachedObserver !== observer);
}
Subject.prototype.notifyObservers = function(data) {
    this.observers.forEach(observer => observer.update(data));
}

function Observer() {} // 파리
Observer.prototype.update = function (data) { //update 구현된 부분이 파리 prototype에서 구현되어야한다.
    console.log('%s에게 데미지 : %d', this.name, data)
    console.log('%s의 체력 : %d\n', (this.name), (this.hp + data));
    this.hp = this.hp + data //커링으로 바꿔야함
}

const subject = new Subject(); // ConcreteSubject

const observer1 = new Observer(); // ConcreteObserver 1
observer1.hp = 50
observer1.def = 5
observer1.name = "바알제붑"

const observer2 = new Observer(); // ConcreteObserver 2
observer2.hp = 45
observer2.def = 12
observer2.name = "꿀빠는 꿀벌"

// 프로토타입공유
function Japanese(name, data, def){
    this.hp = data;
    this.name = name;
    this.def = def;
}
Japanese.prototype = Observer.prototype;

var jap1 = new Japanese("지수", 44, 10);
console.log("hp :",jap1.hp); // hp
console.log("이름 :",jap1.name); // 이름
console.log("출력 :",jap1); // 객체 배열

subject.attachObserver(observer1);
subject.attachObserver(observer2);
subject.attachObserver(jap1);

subject.notifyObservers(Math.floor(Math.random() * ((-10) - (-1)) + (-1)));

//subject.detachObserver(observer1);
//subject.detachObserver(observer2);
subject.notifyObservers(Math.floor(Math.random() * ((-10) - (-1)) + (-1)));
subject.notifyObservers(Math.floor(Math.random() * ((-10) - (-1)) + (-1)));



//체력, 방어력, 디버프, 체력회복
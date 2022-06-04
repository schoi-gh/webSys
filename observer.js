import {context, Action, AttackStrategy, StabStrategy, ColdStrategy, FeedStrategy, StunStrategy, attack, stab, cold, feed, stun} from './jinyeong.js'

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
Observer.prototype.update = function () { //update 구현된 부분이 파리 prototype에서 구현되어야한다.
    if (context.strategy.constructor.name === 'AttackStrategy' && typeof (context.strategy.i) === 'number') {
        context.strategy.i = Math.floor(Math.random() * ((-10) - (-1)) + (-1))
        console.log('%s에게 데미지 : %d', this.name, context.strategy.i)
        console.log('%s의 체력 : %d\n', (this.name), (this.hp + context.strategy.i));
        this.hp = this.hp + context.strategy.i
    }
    else if (context.strategy.constructor.name === 'ColdStrategy') {
        console.log('%s에게 냉동빔!', this.name)
        console.log("%s의 방어력이 %d 만큼 낮아졌다!\n", this.name, context.strategy.i);
        console.log("%s의 방어력 : %d\n", this.name, this.def - context.strategy.i)
        this.def = this.def - context.strategy.i
    }
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

subject.attachObserver(observer1);
subject.attachObserver(observer2);
subject.attachObserver(jap1);

subject.notifyObservers(context.strategy);

//subject.detachObserver(observer1);
//subject.detachObserver(observer2);
//subject.notifyObservers(Math.floor(Math.random() * ((-10) - (-1)) + (-1)));
//subject.notifyObservers(Math.floor(Math.random() * ((-10) - (-1)) + (-1)));

//체력, 방어력, 디버프, 체력회복

export {Subject, Observer, Japanese, subject, observer1, observer2, jap1}

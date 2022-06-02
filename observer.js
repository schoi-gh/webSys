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

function Observer() {} // Observer
Observer.prototype.update = function (data) { //update 구현된 부분이 파리 prototype에서 구현되어야한다.
    console.log('%s에게 데미지 : %d', this.name, data)
    console.log('%s의 체력 : %d\n', (this.name), (this.hp + data));
    this.hp = this.hp + data
}

const subject = new Subject(); // ConcreteSubject

const observer1 = new Observer(); // ConcreteObserver 1
observer1.hp = 50
observer1.name = "바알제붑"

const observer2 = new Observer(); // ConcreteObserver 2
observer2.hp = 45
observer2.name = "꿀빠는 꿀벌"

subject.attachObserver(observer1);
subject.attachObserver(observer2);

subject.notifyObservers(Math.floor(Math.random() * ((-10) - (-1)) + (-1)));

subject.detachObserver(observer1);
subject.notifyObservers(Math.floor(Math.random() * ((-10) - (-1)) + (-1)));
function Subject() {
    this.observers = [];
}

Subject.prototype = {}
Subject.prototype.attachObserver = function(observer) {
        this.observers.push(observer);
}
Subject.prototype.detachObserver = function(observer) {
        this.observers = this.observers.filter(attachedObserver => attachedObserver !== observer);
}
Subject.prototype.notifyObservers = function(data) {
        this.observers.forEach(observer => observer.update(data));
}

function Observer(){
    this.update = function(data){
        console.log('%s에게 데미지 : ', this.name, + data)
        console.log('파리 %s의 체력 : ', (this.name), + (this.hp + data));
        this.hp = this.hp + data
    }
}

const subject = new Subject();

const observer1 = new Observer();
observer1.hp = 50
observer1.name = "바알제붑"

const observer2 = new Observer();
observer2.hp = 45
observer2.name = "꿀빠는 꿀벌"

subject.attachObserver(observer1);
subject.attachObserver(observer2);

subject.notifyObservers(Math.floor(Math.random() * ((-10) - (-1)) + (-1)));

subject.detachObserver(observer1);
subject.notifyObservers(Math.floor(Math.random() * ((-10) - (-1)) + (-1)));




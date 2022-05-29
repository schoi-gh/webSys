function Subject() {
    this.observers = [];
}

Subject.prototype = {
    attachObserver: function(observer) {
        this.observers.push(observer);
    },
    detachObserver: function(observer) {
        this.observers = this.observers.filter(attachedObserver => attachedObserver !== observer);
    },
    notifyObservers: function(data) {
        this.observers.forEach(observer => observer.notify(data));
    }
};

const subject = new Subject();

const observer1 = { notify: data => console.log('observer1 체력회복 : +' + data) };
const observer2 = { notify: data => console.log('observer2 체력회복 : +' + data) };

subject.attachObserver(observer1);
subject.attachObserver(observer2);

subject.notifyObservers(Math.floor(Math.random() * 11));

subject.detachObserver(observer1);
subject.notifyObservers(Math.floor(Math.random() * 11));
function Subject(){} // Publisher -> Subject
Subject.prototype.subscribe = function(subject){} // publisher -> subject
Subject.prototype.unsubscribe = function(subject){}
Subject.prototype.notify = function(){}


function ActionToFly(state) { // NumberPublisher -> ActionToFly, state -> strategy
    Subject.this;
    this.state = state;
    this.subscribers = [];
}

ActionToFly.prototype.subscribe = function(subscriber) {
    console.log("NumberPublisher가 subscriber를 추가한다.");
    this.subscribers.push(subscriber);
}

ActionToFly.prototype.unsubscribe = function(subscriber) {
    console.log("NumberPublisher가 subscriber를 삭제한다.");
    var index = this.subscribers.indexOf(subscriber);
    if (index > -1) {
        this.subscribers.splice(idx, 1);
    }
}

ActionToFly.prototype.notify = function(subscriber) {
    console.log("NumberPublisher가 subscribers에게 notify한다.");
    for(var subscriber of this.subscribers) {
        subscriber.update(this);
    }
}

ActionToFly.prototype.generateState = function () {
    console.log("NumberPublisher가 상태를 변경한다.");
    var min = 1, max = 10;
    this.state = Math.floor(Math.random()*(max-min+1)) + min;
    console.log("상태 : " + this.state);
    this.notify();
}


function Observer(){} // Subscriber -> Observer
        // 인터페이스 정의 메서드
Observer.prototype.update = function () {}

function EvenSubscriber() { // Fly
    Observer.this;
}

EvenSubscriber.prototype.update = function(subject) {
    if(subject.state % 2 == 0) {
        console.log("EvenSubscriber가 일을 한다.");
    }
}


function OddSubscriber() { // Fly
    Observer.this;
}

OddSubscriber.prototype.update = function(subject) {
    if(subject.state % 2 == 1) {
        console.log("OddSubscriber가 일을 한다.");
    }
}


function Client(){}

Client.prototype.test = function() {
    var subject = new ActionToFly(0);
    var even = new EvenSubscriber();
    var odd = new OddSubscriber();
    subject.subscribe(even);
    subject.subscribe(odd);
    subject.generateState();
}


new Client().test();


// 결과 출력
// NumberPublisher가 subscriber를 추가한다.
// NumberPublisher가 subscriber를 추가한다.
// NumberPublisher가 상태를 변경한다.
// 상태 : 5
// NumberPublisher가 subscribers에게 notify한다.
// OddSubscriber가 일을 한다.
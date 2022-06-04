function Publisher(){}
Publisher.prototype.subscribe = function(publisher){}
Publisher.prototype.unsubscribe = function(publisher){}
Publisher.prototype.notify = function(){}


function NumberPublisher(state) {
    Publisher.this;
    this.state = state;
    this.subscribers = [];
}

NumberPublisher.prototype.subscribe = function(subscriber) {
    console.log("NumberPublisher가 subscriber를 추가한다.");
    this.subscribers.push(subscriber);
}

NumberPublisher.prototype.unsubscribe = function(subscriber) {
    console.log("NumberPublisher가 subscriber를 삭제한다.");
    var index = this.subscribers.indexOf(subscriber);
    if (index > -1) {
        this.subscribers.splice(idx, 1);
    }
}

NumberPublisher.prototype.notify = function(subscriber) {
    console.log("NumberPublisher가 subscribers에게 notify한다.");
    for(var subscriber of this.subscribers) {
        subscriber.update(this);
    }
}

NumberPublisher.prototype.generateState = function () {
    console.log("NumberPublisher가 상태를 변경한다.");
    var min = 1, max = 10;
    this.state = Math.floor(Math.random()*(max-min+1)) + min;
    console.log("상태 : " + this.state);
    this.notify();
}


function Subscriber(){}
        // 인터페이스 정의 메서드
Subscriber.prototype.update = function () {}

function EvenSubscriber() {
    Subscriber.this;
}

EvenSubscriber.prototype.update = function(publisher) {
    if(publisher.state % 2 == 0) {
        console.log("EvenSubscriber가 일을 한다.");
    }
}


function OddSubscriber() {
    Subscriber.this;
}

OddSubscriber.prototype.update = function(publisher) {
    if(publisher.state % 2 == 1) {
        console.log("OddSubscriber가 일을 한다.");
    }
}


function Client(){}

Client.prototype.test = function() {
    var publisher = new NumberPublisher(0);
    var even = new EvenSubscriber();
    var odd = new OddSubscriber();
    publisher.subscribe(even);
    publisher.subscribe(odd);
    publisher.generateState();
}


new Client().test();


// 결과 출력
// NumberPublisher가 subscriber를 추가한다.
// NumberPublisher가 subscriber를 추가한다.
// NumberPublisher가 상태를 변경한다.
// 상태 : 5
// NumberPublisher가 subscribers에게 notify한다.
// OddSubscriber가 일을 한다.
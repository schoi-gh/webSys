import {context1} from "./strategy.js";

function Subject(){} // Publisher -> Subject
Subject.prototype.attach = function(subject){} // publisher -> subject, subscribe -> attach
Subject.prototype.detach = function(subject){} // detach -> detach
Subject.prototype.notifyObservers = function(){} // notifyObservers -> notifyObservers


function ActionToFly(state) { // NumberPublisher -> ActionToFly, state -> strategy
    Subject.this;
    this.state = state;
    this.observers = [];
}

ActionToFly.prototype.attach = function(observer) {
    console.log("ActionToFly가 observer를 추가한다.");
    this.observers.push(observer);
}

ActionToFly.prototype.detach = function(observer) {
    console.log("ActionToFly가 observer를 삭제한다.");
    var index = this.observers.indexOf(observer);
    if (index > -1) {
        this.observers.splice(idx, 1);
    }
}

ActionToFly.prototype.notifyObservers = function(observer) {
    console.log("ActionToFly가 observer에게 notifyObservers한다.");
    for(var observer of this.observers) {
        observer.update(this);
    }
}

ActionToFly.prototype.generateState = function () {
    console.log("ActionToFly가 상태를 변경한다.");
    this.notifyObservers();
}

function Observer(){} // Subscriber -> Observer
        // 인터페이스 정의 메서드
Observer.prototype.update = function () {}

function EvenSubscriber() { // Fly
    Observer.this;
}

EvenSubscriber.prototype.update = function(subject) {
    if(context1.name === "AttackStrategy") {
        console.log("너무 아파요")
        /*
        let damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1))
        console.log('%s에게 데미지 : %d', this.name, damage)
        console.log('%s의 체력 : %d\n', (this.name), (this.hp + damage));
        this.hp = this.hp + context.strategy.i
         */
    }
    else if(context1.name === "ColdStrategy") {
        console.log("손이 꽁꽁꽁")
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



var subject = new ActionToFly(0);
var even = new EvenSubscriber();
var odd = new OddSubscriber();
subject.attach(even);
subject.attach(odd);
//subject.generateState();




export {ActionToFly, subject}


// 결과 출력
// NumberPublisher가 subscriber를 추가한다.
// NumberPublisher가 subscriber를 추가한다.
// NumberPublisher가 상태를 변경한다.
// 상태 : 5
// NumberPublisher가 subscribers에게 notify한다.
// OddSubscriber가 일을 한다.
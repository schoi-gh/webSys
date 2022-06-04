import {context1,attack,cold} from "./strategy.js";

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
    //console.log("ActionToFly가 observer를 추가한다.");
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
    //console.log("ActionToFly가 상태를 변경한다.");
    this.notifyObservers();
}

function Observer(){} // Subscriber -> Observer
        // 인터페이스 정의 메서드
Observer.prototype.update = function () {}

function EvenSubscriber(name, hp, def) { // Fly
    Observer.this;
    this.name = name;
    this.hp = hp;
    this.def = def;
}

EvenSubscriber.prototype.update = function(subject) {
    if(context1.name === "AttackStrategy") {
        console.log("너무 아파요")
        let damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1))
        console.log('%s에게 데미지 : %d', this.name, damage)
        console.log('%s의 체력 : %d\n', (this.name), (this.hp + damage));
        this.hp = this.hp + damage
    }
    else if(context1.name === "ColdStrategy") {
        console.log("손이 꽁꽁꽁")
        let downdef = Math.floor(Math.random() * ((-10) - (-1)) + (-1))
        console.log('%s에게 방어력 하락 : %d', this.name, downdef)
        console.log('%s의 방어력 : %d\n', (this.name), (this.def + downdef));
        this.def = this.def + downdef
    }
}


function OddSubscriber(name, hp, def) { // Fly
    Observer.this;
    this.name = name;
    this.hp = hp;
    this.def = def;
}

OddSubscriber.prototype.update = function(subject) {
    if(context1.name === "AttackStrategy") {
        console.log("너무 아파요")
        let damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1))
        console.log('%s에게 데미지 : %d', this.name, damage)
        console.log('%s의 체력 : %d\n', (this.name), (this.hp + damage));
        this.hp = this.hp + damage
    }
    else if(context1.name === "ColdStrategy") {
        console.log("손이 꽁꽁꽁")
        let downdef = Math.floor(Math.random() * ((-10) - (-1)) + (-1))
        console.log('%s에게 방어력 하락 : %d', this.name, downdef)
        console.log('%s의 방어력 : %d\n', (this.name), (this.def + downdef));
        this.def = this.def + downdef
    }
}



var subject = new ActionToFly(0);
var even = new EvenSubscriber("바알제붑",20,5);
var odd = new OddSubscriber("꿀빠는 꿀벌",10,10);


/*
subject.attach(even);
subject.attach(odd);

//var context2 = new Context(cold);
context1.setStrategy(attack)  // setStrategy
context1.execute(); // attack
//console.log(context1.name)
context1.setStrategy(cold)  // setStrategy
context1.execute(); // cold
//console.log(Context.name)
 */


export {subject, even, odd}
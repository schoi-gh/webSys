import {context1} from "./strategy.js";

function Subject(){} // Publisher -> Subject
Subject.prototype.attach = function(subject){} // publisher -> subject, subscribe -> attach
Subject.prototype.detach = function(subject){} // detach -> detach
Subject.prototype.notifyObservers = function(){} // notifyObservers -> notifyObservers


function ActionToFly() { // NumberPublisher -> ActionToFly, state -> strategy
    Subject.this;
    this.observers = [];
    this.detachobservers = [];
}

ActionToFly.prototype.attach = function(observer) {
    //console.log("ActionToFly가 observer를 추가한다.");
    this.observers.push(observer);
}

ActionToFly.prototype.detach = function(observer) {
    var index = this.observers.indexOf(observer);
    if (index > -1) {
        this.observers.splice(index, 1);
    }
}

ActionToFly.prototype.notifyObservers = function() {
    //console.log("ActionToFly가 observer에게 notifyObservers한다.");
    for(var observer of this.observers) {
        observer.update(this);
    }
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
        console.log("%s의 현재 체력 : %d",this.name, this.hp)
        let damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1))
        console.log('%s에게 데미지 : %d', this.name, damage)
        console.log('%s의 체력 : %d\n', (this.name), (this.hp + damage));
        this.hp = this.hp + damage

        if (this.hp <= 0) {
            subject.detach(this)
            console.log("%s은(는) 죽었습니다.\n",this.name);
            subject.detachobservers.push(this.name);
        }
    }
    else if(context1.name === "ColdStrategy") {
        console.log("손이 꽁꽁꽁")
        console.log("%s의 현재 방어력 : %d",this.name, this.def)
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
        console.log("%s의 현재 체력 : %d",this.name, this.hp)
        let damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1))
        console.log('%s에게 데미지 : %d', this.name, damage)
        console.log('%s의 체력 : %d\n', (this.name), (this.hp + damage));
        this.hp = this.hp + damage

        if (this.hp <= 0) {
            subject.detach(this)
            console.log("%s은(는) 죽었습니다.\n",this.name);
            subject.detachobservers.push(this.name);

        }
    }
    else if(context1.name === "ColdStrategy") {
        console.log("손이 꽁꽁꽁")
        console.log("%s의 현재 방어력 : %d",this.name, this.def)
        let downdef = Math.floor(Math.random() * ((-10) - (-1)) + (-1))
        console.log('%s에게 방어력 하락 : %d', this.name, downdef)
        console.log('%s의 방어력 : %d\n', (this.name), (this.def + downdef));
        this.def = this.def + downdef
    }
}

function Japanese(name, hp, def){
    this.hp = hp;
    this.name = name;
    this.def = def;
}
Japanese.prototype = EvenSubscriber.prototype;

var jap1 = new Japanese("지수", 44, 10);

var subject = new ActionToFly();
var even = new EvenSubscriber("바알제붑",20,5);
var odd = new OddSubscriber("꿀빠는 꿀벌",3,10);


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


export {subject, even, odd, jap1}
import {attack,cold} from "./strategy.js"
//import {attack, cold} from "./command.js";

function Subject(){}
Subject.prototype.attach = function(observer){}
Subject.prototype.detach = function(observer){}
Subject.prototype.notifyObservers = function(){}


function ActionToFly() {
    Subject.this;
    this.observers = [];
    this.detachobservers = [];
}

ActionToFly.prototype.attach = function(observer) { //observers 배열에 observer 추가
    this.observers.push(observer);
}

ActionToFly.prototype.detach = function(observer) { //observers 배열에서 observer 제거
    this.observers = this.observers.filter(attachedObserver => attachedObserver !== observer);
}

ActionToFly.prototype.notifyObservers = function() {    //observers 배열에 있는 observer들의 update() 실행
    this.observers.forEach(observer => observer.update());
}

function Observer(){}

Observer.prototype.update = function (damage) {}


function EvenSubscriber(name, hp, def) {
    Observer.this;  // function Observer()를 구현, like 인터페이스
    this.name = name;
    this.hp = hp;
    this.def = def;
}

EvenSubscriber.prototype.update = function() {
    this.hp = this.hp + attack.damage // 체력, 방어력, 데미지 커링함수로

    if (this.hp <= 0) { // 체력이 0이하인 경우
        subject.detach(this)    // attachedobserver를 deatch한 상태 변경
        console.log("%s은(는) 죽었습니다.\n",this.name);
        subject.detachobservers.push(this.name);    // 죽은 객체의 이름을 배열에 push
    }

    this.def = this.def + cold.downdef

}

/*
function OddSubscriber(name, hp, def) {
    Observer.this;
    this.name = name;
    this.hp = hp;
    this.def = def;
}

OddSubscriber.prototype.update = function() {
    if(context1.name === "AttackStrategy") {


        if (this.hp <= 0) {
            subject.detach(this)
            console.log("%s은(는) 죽었습니다.\n",this.name);
            subject.detachobservers.push(this.name);
        }
    }
    else if(context1.name === "ColdStrategy") {
        console.log("%s의 현재 방어력 : %d",this.name, this.def)
        let downdef = Math.floor(Math.random() * ((-10) - (-1)) + (-1))
        console.log('%s에게 방어력 하락 : %d', this.name, downdef)
        console.log('%s의 방어력 : %d\n', (this.name), (this.def + downdef));
        this.def = this.def + downdef
    }

}
 */


// 생성자 빌려 쓰고 프로토타입 지정해주기
function Korean(name, hp, def){ // 노션에 설명 있음
    EvenSubscriber.apply(this, arguments);
}
Korean.prototype = new EvenSubscriber()


// 프로토타입공유
function Japanese(name, hp, def){   // 노션에 설명 있음
    this.name = name;
    this.hp = hp;
    this.def = def;
}
Japanese.prototype = EvenSubscriber.prototype;


var subject = new ActionToFly();
var even = new EvenSubscriber("바알제붑",20,5);
var odd = new EvenSubscriber("꿀빠는 꿀벌",3,10);
var kor1 = new Korean("민수", 33, 33);
var jap1 = new Japanese("지수", 44, 10);


export {subject, even, odd, jap1, kor1, EvenSubscriber}
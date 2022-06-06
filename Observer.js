import {slot1, attack, cold} from "./strategy.js"
//import {attack, cold} from "./command.js";

function Catch(){}
Catch.prototype.attach = function(fly){}
Catch.prototype.detach = function(fly){}
Catch.prototype.notifyFlies = function(){}


function ActionToFly() {
    Catch.this;
    this.flies = [];
    this.detachflies = [];
}

ActionToFly.prototype.attach = function(fly) { //flies 배열에 fly 추가
    this.flies.push(fly);
}

ActionToFly.prototype.detach = function(fly) { //flies 배열에서 fly 제거
    this.flies = this.flies.filter(attachedObserver => attachedObserver !== fly);
}

ActionToFly.prototype.notifyFlies = function() {    //flies 배열에 있는 fly들의 update() 실행
    this.flies.forEach(fly => fly.update());
}

function Fly(){}

Fly.prototype.update = function () {}


function DemonFly(name, hp, def) {
    Fly.this;  // function Observer()를 구현, like 인터페이스
    this.name = name;
    this.hp = hp;
    this.def = def;
}

DemonFly.prototype.update = function() {
    if(slot1.skill.constructor.name === "AttackSkill") {
        console.log("%s의 현재 체력 : %d",this.name, this.hp)
        console.log('%s에게 체력 하락 : %d', this.name, attack.damage)
        console.log('%s의 체력 : %d\n', (this.name), (this.hp + attack.damage));
        this.hp = this.hp + attack.damage
    }
        if (this.hp <= 0) {
            targetFly.detach(this)
            console.log("%s은(는) 죽었습니다.\n",this.name);
            targetFly.detachflies.push(this.name);
        }
    else if(slot1.skill.constructor.name === "ColdSkill") {
        console.log("%s의 현재 방어력 : %d",this.name, this.def)
        console.log('%s에게 방어력 하락 : %d', this.name, cold.downdef)
        console.log('%s의 방어력 : %d\n', (this.name), (this.def + cold.downdef));
        this.def = this.def + cold.downdef
    }
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
        console.log("%s의 현재 체력 : %d",this.name, this.hp)
        let damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1))
        console.log('%s에게 체력 하락 : %d', this.name, damage)
        console.log('%s의 체력 : %d\n', (this.name), (this.hp + damage));
        this.hp = this.hp + damage
    }

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
function Musca(name, hp, def){ // 노션에 설명 있음
    DemonFly.apply(this, arguments);
}
Musca.prototype = new DemonFly()


// 프로토타입공유
function Syrphid(name, hp, def){   // 노션에 설명 있음
    this.name = name;
    this.hp = hp;
    this.def = def;
}
Syrphid.prototype = DemonFly.prototype;


var targetFly = new ActionToFly();
var beel = new DemonFly("바알제붑",1000,1000);
var der = new DemonFly("데르마토비아",10,10);
var mus = new Musca("무스카", 50, 10);
var syr = new Syrphid("서피드", 15, 20);


export {targetFly, beel, der, syr, mus, DemonFly}
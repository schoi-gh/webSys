import {user, attack, cold} from "./strategy.js"
//import {attack, cold} from "./command.js";

function Catch(){}
Catch.prototype.attach = function(fly){}
Catch.prototype.detach = function(fly){}
Catch.prototype.notifyMobs = function(){}


function ActionToFly() {
    Catch.this;
    this.mobs = [];
    this.detachMobs = [];
}

ActionToFly.prototype.attach = function(fly) { //mobs 배열에 fly 추가
    this.mobs.push(fly);
}

ActionToFly.prototype.detach = function(fly) { //mobs 배열에서 fly 제거
    this.mobs = this.mobs.filter(attachedObserver => attachedObserver !== fly);
}

ActionToFly.prototype.notifyMobs = function() {    //mobs 배열에 있는 fly들의 update() 실행
    this.mobs.forEach(fly => fly.update());
}


function DemonFly(name, hp, def) {
    this.name = name;
    this.hp = hp;
    this.def = def;
}

DemonFly.prototype.update = function() {
    if(user.skill.constructor.name === "AttackSkill") {
        console.log("%s의 현재 체력 : %d",this.name, this.hp)
        console.log('%s에게 체력 하락 : %d', this.name, attack.damage)
        console.log('%s의 체력 : %d\n', (this.name), (this.hp + attack.damage));
        this.hp = this.hp + attack.damage
    }
        if (this.hp <= 0) {
            targetFly.detach(this)
            console.log("%s은(는) 죽었습니다.\n",this.name);
            targetFly.detachMobs.push(this.name);
        }
    else if(user.skill.constructor.name === "ColdSkill") {
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
var mus = new Syrphid("무스카", 50, 10);
var syr = new Syrphid("서피드", 15, 20);


export {targetFly, beel, der, syr, mus, DemonFly}
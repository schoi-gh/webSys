import {user, attack, cold} from "./strategy.js"

class Catch {
    constructor() { }
    attach(fly) { }
    detach(fly) { }
    notifyMobs() { }
}


class ActionToFly extends Catch {
    constructor() {
        this.mobs = [];
        this.detachMobs = [];
    }
    attach(fly) {
        this.mobs.push(fly);
    }
    detach(fly) {
        this.mobs = this.mobs.filter(attachedObserver => attachedObserver !== fly);
    }
    notifyMobs() {
        this.mobs.forEach(fly => fly.update());
    }
}


class DemonFly {
    constructor(name, hp, def) {
        Fly.this; // function Observer()를 구현, like 인터페이스
        this.name = name;
        this.hp = hp;
        this.def = def;
    }
    update() {
        if (user.skill.constructor.name === "AttackSkill") {
            console.log("%s의 현재 체력 : %d", this.name, this.hp);
            console.log('%s에게 체력 하락 : %d', this.name, attack.damage);
            console.log('%s의 체력 : %d\n', (this.name), (this.hp + attack.damage));
            this.hp = this.hp + attack.damage;
        }
        if (this.hp <= 0) {
            targetFly.detach(this);
            console.log("%s은(는) 죽었습니다.\n", this.name);
            targetFly.detachMobs.push(this.name);
        }
        else if (user.skill.constructor.name === "ColdSkill") {
            console.log("%s의 현재 방어력 : %d", this.name, this.def);
            console.log('%s에게 방어력 하락 : %d', this.name, cold.downdef);
            console.log('%s의 방어력 : %d\n', (this.name), (this.def + cold.downdef));
            this.def = this.def + cold.downdef;
        }
    }
}


// 프로토타입공유
class Syrphid extends DemonFly {
    constructor(name, hp, def) {
        this.name = name;
        this.hp = hp;
        this.def = def;
    }
}


var targetFly = new ActionToFly();
var beel = new DemonFly("바알제붑",1000,1000);
var der = new DemonFly("데르마토비아",10,10);
var mus = new Syrphid("무스카", 50, 10);
var syr = new Syrphid("서피드", 15, 20);


export {targetFly, beel, der, syr, mus, DemonFly}

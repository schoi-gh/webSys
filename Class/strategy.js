import {targetFly} from "./Observer.js";


class Skill {
    constructor() { }
    execute() { }
} //interface


class AttackSkill extends Skill {
    constructor() {
        // function Skill()를 구현, like 인터페이스
        this.damage;
    }
    execute() {
        this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
        console.log('초파리에게 [%d] 물리공격!', attack.damage);
    }
}


class ColdSkill extends Skill {
    constructor() {
        this.downdef;
    }
    execute() {
        this.downdef = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
        console.log('초파리에게 [%d] 냉동빔!', cold.downdef);
    }
}


class User {
    constructor(skill) {
        this.skill = skill;
    }
    setSkill(skill) {
        this.skill = skill;
    }
    execute() {
        this.skill.execute();
        targetFly.notifyFlies(); // Observer.js의 notifyFlies()를 실행
    }
}


var attack = new AttackSkill();
var cold = new ColdSkill();
var user = new User();


export {user, attack, cold}
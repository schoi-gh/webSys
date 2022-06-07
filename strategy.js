import {targetFly} from "./Observer.js";


function Skill(){} //interface
Skill.prototype.execute = function () {} // 선택한 전략 실행 메소드


function AttackSkill() {  // 데미지를 주는 전술
    Skill.this; // function Skill()를 구현, like 인터페이스
    this.name = "몸통박치기"
    this.damage
    // 조건문 안쓰려면 여기에 공격전략 구현해야함

}

AttackSkill.prototype.execute = function() {
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    console.log('[초파리에게 %d 물리공격!]\n', attack.damage);
}


function ColdSkill() {   // 방어력을 깎는 전술
    Skill.this;  // function Skill()를 구현, like 인터페이스
    this.downdef
}


ColdSkill.prototype.execute = function() {
    this.downdef = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    console.log('[초파리에게 %d 냉동빔!]\n', cold.downdef);
}


function User(name) {
    this.name = name
    this.skill = [];
}

User.prototype.setSkill = function (skill) {
    this.skill = skill;
}

User.prototype.execute = function() {
    this.skill.execute()
    targetFly.notifyMobs(this);  // Observer.js의 notifyFlies()를 실행
};


var attack = new AttackSkill();
var cold = new ColdSkill();
var user = new User("이브이");
var user1 = new User("마자용")




export {user,user1,attack,cold}
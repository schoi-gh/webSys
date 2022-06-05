import {subject} from "./Observer.js";


function Strategy(){} //interface
Strategy.prototype.execute = function () {} // 선택한 전략 실행 메소드


function AttackStrategy() {  // 데미지를 주는 전술
    Strategy.this; // function Strategy()를 구현, like 인터페이스
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    // 조건문 안쓰려면 여기에 공격전략 구현해야함

}

AttackStrategy.prototype.execute = function() {
    console.log('초파리에게 [%d] 물리공격!', attack.damage);
}


function ColdStrategy() {   // 방어력을 깎는 전술
    Strategy.this;  // function Strategy()를 구현, like 인터페이스
    this.downdef = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
}

ColdStrategy.prototype.execute = function() {
    console.log('초파리에게 [%d] 냉동빔!', cold.downdef);
}


function Context(strategy) {
    this.strategy = strategy;
}

Context.prototype.setStrategy = function (strategy) {
    this.strategy = strategy;
}

Context.prototype.execute = function() {
    this.strategy.execute()
    subject.notifyObservers();  // Observer.js의 notifyObservers()를 실행
};


var attack = new AttackStrategy();
var cold = new ColdStrategy();
var context1 = new Context();

/*
context1.setStrategy(attack)
context1.execute()
console.log(context1)
 */


export {context1,attack,cold}
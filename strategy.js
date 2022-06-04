import {subject} from "./Observer.js";

function Strategy(){} //interface
Strategy.prototype.execute = function () {} // 선택한 전략 실행 메소드


function AttackStrategy() {  // 데미지를 주는 전술
    Strategy.this; // function Strategy()를 구현, like 인터페이스
}

AttackStrategy.prototype.execute = function() {
    console.log('초파리를 물리공격!');
    subject.notifyObservers();  // Observer.js의 notifyObservers()를 실행
}


function ColdStrategy() {   // 방어력을 깎는 전술
    Strategy.this;  // function Strategy()를 구현, like 인터페이스
}

ColdStrategy.prototype.execute = function() {
    console.log('초파리에게 냉동빔!');
    subject.notifyObservers();  // Observer.js의 notifyObservers()를 실행
}


function Context(strategy) {
    this.strategy = strategy;
}

Context.prototype.setStrategy = function (strategy) {
    this.strategy = strategy;
}

Context.prototype.execute = function() {
    this.name = this.strategy.constructor.name;
    this.strategy.execute()
};


var attack = new AttackStrategy();
var cold = new ColdStrategy();
var context1 = new Context();

export {context1,attack,cold}
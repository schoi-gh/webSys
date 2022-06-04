import {subject} from "./Observer.js";

function Strategy(){} //interface
Strategy.prototype.execute = function () {}


function AttackStrategy() {  // AddStrategy -> AttackStrategy
    Strategy.this;
}

AttackStrategy.prototype.execute = function() {
    console.log('초파리를 물리공격!');
    subject.notifyObservers();
}


function ColdStrategy() {    // SubstractStrategy -> ColdStrategy
    Strategy.this;
}

ColdStrategy.prototype.execute = function() {
    console.log('초파리에게 냉동빔!');
    subject.notifyObservers();
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
import {subject} from "./Observer.js";

function Strategy(){} //interface
Strategy.prototype.execute = function () {}


function AttackStrategy() {  // AddStrategy -> AttackStrategy
    Strategy.this;
}

AttackStrategy.prototype.execute = function() {
    console.log('초파리를 물리공격!');
    subject.generateState();

    // 출력문만
}


function ColdStrategy() {    // SubstractStrategy -> ColdStrategy
    Strategy.this;
}

ColdStrategy.prototype.execute = function() {
    console.log('초파리에게 냉동빔!');
    subject.generateState();

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

/*
//var context2 = new Context(cold);
context1.setStrategy(attack)  // setStrategy
context1.execute(); // attack
//console.log(context1.name)
context1.setStrategy(cold)  // setStrategy
context1.execute(); // cold
//console.log(Context.name)
 */
export {context1,attack,cold}
function Strategy(){} //interface
Strategy.prototype.execute = function (a,b) {}


function AttackStrategy(context) {  // AddStrategy -> AttackStrategy
    Strategy.this;
}

AttackStrategy.prototype.execute = function(a, b) {
    // console.log(a + ' + '+ b + " = " + (a+b));
    // 출력문만
}


function ColdStrategy(context) {    // SubstractStrategy -> ColdStrategy
    Strategy.this;
}

ColdStrategy.prototype.execute = function(a, b) {
    //console.log(a + ' - '+ b + " = " + (a-b));
    // 출력문만
}

function Context(strategy) {
    this.strategy = strategy;
}

Context.prototype.setStrategy = function (strategy) {
    this.strategy = strategy;
}

Context.prototype.execute = function(a, b) {
    this.strategy.execute(a, b);
}


function Client(){}

Client.prototype.test = function() {
    var a = 10, b = 5;
    var attack = new AttackStrategy();
    var cold = new ColdStrategy();
    var context1 = new Context(attack);
    //var context2 = new Context(cold);
    context1.execute(a, b); // attack
    context1.setStrategy(cold)  // setStrategy
    context1.execute(a, b); // cold
}

new Client().test();

// 결과 출력

// 10 + 5 = 15

// 10 - 5 = 5
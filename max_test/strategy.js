function Strategy(){}
Strategy.prototype.execute = function (a,b) {}


function AddStrategy(context) {
    Strategy.this;
}

AddStrategy.prototype.execute = function(a, b) {
    console.log(a + ' + '+ b + " = " + (a+b));
}


function SubtractStrategy(context) {
    Strategy.this;
}

SubtractStrategy.prototype.execute = function(a, b) {
    console.log(a + ' - '+ b + " = " + (a-b));
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
    var addStrategy = new AddStrategy();
    var subtractStrategy = new SubtractStrategy();
    var context1 = new Context(addStrategy);
    var context2 = new Context(subtractStrategy);
    context1.execute(a, b);
    context2.setStrategy(addStrategy)
    context2.execute(a, b);
}

new Client().test();

// 결과 출력

// 10 + 5 = 15

// 10 - 5 = 5
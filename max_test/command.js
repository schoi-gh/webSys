function Command(){
    return (function(){
        // 인터페이스 정의 메서드
        return function execute() {}
    })();
}


// 커맨드클래스가 처리하는 경우

function ACommand(param) {
    Command();
    this.param = param;
}

ACommand.prototype.execute = function() {
    console.log("ACommand 가 "+ this.param + " 을 처리")
}


// 리시버에게 명령을 내리는 경우

function BCommand(receiver, param) {
    Command.this;
    this.reciver = receiver;
    this.param = param;
}

BCommand.prototype.execute = function(){
    this.reciver.fn1(this.param);
}


function Invoker() {
    this.command;
}

Invoker.prototype.setCommand = function(command) {
    this.command = command;
}

Invoker.prototype.executeCommand = function() {
    if(this.command) {
        this.command.execute();
    }
}


function Receiver() {}

Receiver.prototype.fn1 = function(param) {
    console.log("Receiver 가 "+ param + " 을 처리")
}


function Client(){}

Client.prototype.test = function() {
    var invoker = new Invoker();
    var aCommand = new ACommand("Work1");
    invoker.setCommand(aCommand);
    invoker.executeCommand();

    console.log("-------------------");

    var receiver = new Receiver();
    var bCommand = new BCommand(receiver, "Work1");
    invoker.setCommand(bCommand);
    invoker.executeCommand();
}


new Client().test();
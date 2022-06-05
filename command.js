//import {subject} from "./Observer.js";

function Command(){}
Command.prototype.execute = function() {}


// 커맨드클래스가 처리하는 경우
function AttackStrategy(hit) {
    this.hit = hit;
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
}

AttackStrategy.prototype.execute = function(){
    this.hit.attackhp(this.damage);
}


// 리시버에게 명령을 내리는 경우
function ColdStrategy(receiver) {
    this.reciver = receiver;
    this.downdef = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
}

ColdStrategy.prototype.execute = function(){
    this.reciver.fn1(this.downdef);
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
        subject.notifyObservers()
    }
}


function Receiver() {}
Receiver.prototype.fn1 = function() {
    console.log('초파리에게 냉동빔!');
}

function Hit() {}
Hit.prototype.attackhp = function() {
    console.log('초파리에게 "%d" 물리공격!',attack.damage);
}


var invoker = new Invoker();

var hit = new Hit();
var attack = new AttackStrategy(hit);

invoker.setCommand(attack);
invoker.executeCommand();

console.log("-------------------");

var receiver = new Receiver();
var cold = new ColdStrategy(receiver);

invoker.setCommand(cold);
invoker.executeCommand();

//export {invoker, hit, attack, receiver, cold}
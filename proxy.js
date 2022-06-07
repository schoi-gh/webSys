import {targetFly} from "./Observer.js";

function StatsInterface(){}

StatsInterface.prototype.request = function(){}


function ShowStats() {}

ShowStats.prototype.request = function() {
    console.log("죽은 파리 : ", targetFly.detachMobs) // 여기다 뭘 넣을까
}


function Proxy(showState) {
    StatsInterface.this;
    this.showState = showState;
}

Proxy.prototype.request = function() {
    this.beforeProc();
    this.showState.request();
    this.afterProc();
}

Proxy.prototype.beforeProc = function() {
    console.log("befor데미지를 많이 입었어요");
}

Proxy.prototype.afterProc = function() {
    console.log("살아 있는 파리 : ")
    console.table(targetFly.mobs)
    console.log("\n")


}


var showStats = new ShowStats();
var proxy = new Proxy(showStats);

export {showStats, proxy}

// 결과 출력

// [ShowStats 클래스] request 메서드 호출

// ---------------------

// [Proxy] beforeProc 메서드 호출

// [ShowStats 클래스] request 메서드 호출

// [Proxy] afterProc 메서드 호출
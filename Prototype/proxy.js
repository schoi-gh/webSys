import {targetFly} from "./Observer.js";
import {attack, cold} from "./strategy.js";

function StatsInterface(){}

StatsInterface.prototype.request = function(){}


function ShowStats() {}

ShowStats.prototype.request = function() {
    console.log("[Service 클래스] request 메서드 호출")
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
    console.log("[Proxy] beforeProc 메서드 호출")
}

Proxy.prototype.afterProc = function() {
    console.log("[Proxy] afterProc 메서드 호출")
    console.table(targetFly.mobs)
    console.log("\n")
}


var showStats = new ShowStats();
var proxy = new Proxy(showStats);

export {showStats, proxy}
import {targetFly} from "./Observer.js";


class ShowStats {
    constructor() {
        StatsInterface.this;
    }
    request() {
        console.log("[ShowStats] request 호출"); // 죽은 파리 console
    }
}


class ShowStatsProxy {
    constructor(showState) {
        StatsInterface.this;
        this.showState = showState;
    }
    request() {
        this.beforeProc();
        this.showState.request();
        this.afterProc();
    }
    beforeProc() {
        console.log("[Proxy] beforeProc 메서드 호출");
    }
    afterProc() {
        console.log("[Proxy] afterProc 메서드 호출");
        console.table(targetFly.flies);
        console.log("\n");
    }
}


var showStats = new ShowStats();
var showStatsProxy = new ShowStatsProxy(showStats);

export {showStats, showStatsProxy}
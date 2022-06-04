function StatsInterface(){} // ServiceInterface -> StatsInterface
StatsInterface.prototype.request = function(){}


function ShowStats() { // Service -> ShowStats
    StatsInterface.this;
}

ShowStats.prototype.request = function() {
    console.log("[ShowStats 클래스] request 메서드 호출")
}


function Proxy(service) {
    StatsInterface.this;
    this.service = service;
}

Proxy.prototype.request = function() {
    this.beforeProc();
    this.service.request();
    this.afterProc();
}

Proxy.prototype.beforeProc = function() {
    console.log("[Proxy] beforeProc 메서드 호출")
}

Proxy.prototype.afterProc = function() {
    console.log("[Proxy] afterProc 메서드 호출")
}


function Client(){}

Client.prototype.test = function() {
    var showStats = new ShowStats();
    showStats.request();

    console.log("---------------------");

    var proxy = new Proxy(showStats);
    proxy.request(); // console.table() <- subject.observers

}


new Client().test();


// 결과 출력

// [ShowStats 클래스] request 메서드 호출

// ---------------------

// [Proxy] beforeProc 메서드 호출

// [ShowStats 클래스] request 메서드 호출

// [Proxy] afterProc 메서드 호출
function ServiceInterface(){}
ServiceInterface.prototype.request = function(){}


function Service() {
    ServiceInterface.this;
}

Service.prototype.request = function() {
    console.log("[Service 클래스] request 메서드 호출")
}


function Proxy(service) {
    ServiceInterface.this;
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
    var service = new Service();
    service.request();

    console.log("---------------------");

    var proxy = new Proxy(service);
    proxy.request();

}


new Client().test();


// 결과 출력

// [Service 클래스] request 메서드 호출

// ---------------------

// [Proxy] beforeProc 메서드 호출

// [Service 클래스] request 메서드 호출

// [Proxy] afterProc 메서드 호출
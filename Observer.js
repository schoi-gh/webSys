function Catch(){}
Catch.prototype.attach = function(fly){}
Catch.prototype.detach = function(fly){}
Catch.prototype.notifyMobs = function(){}


function ActionToFly() {
    Catch.this;
    this.mobs = [];
    this.detachMobs = [];
}

ActionToFly.prototype.attach = function(fly) { //mobs 배열에 fly 추가
    this.mobs.push(fly);
}

ActionToFly.prototype.detach = function(fly) { //mobs 배열에서 fly 제거
    this.mobs = this.mobs.filter(attachedObserver => attachedObserver !== fly);
}

ActionToFly.prototype.notifyMobs = function(User) {    //mobs 배열에 있는 fly들의 update() 실행
    this.mobs.forEach(fly => fly.update(User));
}


function DemonFly(name, hp, def) {
    this.name = name;
    // this.hp = hp;
    // this.def = def;
}

DemonFly.prototype.update = function(User) {
    this.last_skill = [];
    this.last_skill.push(JSON.stringify(User))
}


// 프로토타입공유
function Syrphid(name, hp, def){   // 노션에 설명 있음
    this.name = name;
    // this.hp = hp;
    // this.def = def;
}
Syrphid.prototype = DemonFly.prototype;


var targetFly = new ActionToFly();
var beel = new DemonFly("바알제붑",1000,1000);
var der = new DemonFly("데르마토비아",10,10);
var mus = new Syrphid("무스카", 50, 10);
var syr = new Syrphid("서피드", 15, 20);


export {targetFly, beel, der, syr, mus, DemonFly}
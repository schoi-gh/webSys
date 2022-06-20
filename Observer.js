function Action(){}
Action.prototype.attach = function(member){}
Action.prototype.detach = function(member){}
Action.prototype.notifyMobs = function(){}


function ActionToTeamRocket() {
    this.prototype = new Action();
    this.enemy = [];
}

ActionToTeamRocket.prototype.attach = function(member) {
    this.enemy.push(member);
}

ActionToTeamRocket.prototype.detach = function(member) {
    this.enemy = this.enemy.filter(attachedObserver => attachedObserver !== member);
}

ActionToTeamRocket.prototype.notifyEnemy = function(Pokemon) {
    this.enemy.forEach(member => member.checkTeamRocketsStatus(Pokemon));
}


function TeamRocket(name) {
    this.name = name;
}

TeamRocket.prototype.checkTeamRocketsStatus = function(Pokemon) {
    this.last_skill = [];
    this.last_skill.push(JSON.stringify(Pokemon))
}


function TeamRocketPokemon(name){
    this.name = name;
}
TeamRocketPokemon.prototype = TeamRocket.prototype;


var actionToTeamRocket = new ActionToTeamRocket();
var james = new TeamRocket("로이");
var jessie = new TeamRocket("로사");
var meowth = new TeamRocketPokemon("나옹");
var wobbuffet = new TeamRocketPokemon("마자용");


// 로봇
function Robot() {
    this.prototype = new TeamRocket("로봇");
};
function Arm() {
    this.prototype = new Robot();
    this.hp = 10;
};
function Leg() {
    this.prototype = new Robot();
    this.hp = 10;
};
function Body() {
    this.prototype = new Robot();
    this.hp = 10;
};
function Head() {
    this.prototype = new Robot();
    this.hp = 10;
};
function Caterpillar() {
    this.prototype = new Robot();
    this.hp = 10;
}
function Wheel() {
    this.prototype = new Robot();
    this.hp = 10;
}
function Tail() {
    this.prototype = new Robot();
    this.hp = 10;
}
function CaptureTool() {
    this.prototype = new Robot();
    this.hp = 10;
}

function MeowthRobot() {
    this.prototype = new Robot();
    this.leftArm = new Arm;
    this.rightArm = new Arm;
    this.leftArmArmor = new Arm;
    this.rightArmArmor = new Arm;
    this.leftCaterpillar = new Caterpillar;
    this.rightCaterpillar = new Caterpillar;
    this.body = new Body;
    this.head = new Head;
    this.captureTool = new CaptureTool;
    this.avoidCount = 0;
};

MeowthRobot.prototype.grabPokemons = function() {
    console.log("포켓몬들을 납치합니다")
    console.log("--------------------------------------------------------")
    console.log("납치된 포켓몬들이 탈출했습니다.")
}

MeowthRobot.prototype.fly = function() {
    console.log("나옹로봇이 하늘을 납니다")
}

MeowthRobot.prototype.avoidAttack = function() {
    this.avoidCount++;
}

MeowthRobot.prototype.checkTeamRocketsStatus = function(Pokemon) {
    if (meowthRobot.leftArm.hp === 0 && meowthRobot.rightArm.hp === 0 && meowthRobot.leftArmArmor.hp === 0 && meowthRobot.rightArmArmor.hp === 0 && meowthRobot.leftLeg.hp === 0 && meowthRobot.rightLeg.hp === 0 && meowthRobot.body.hp === 0 && meowthRobot.head.hp === 0) {
        console.log("로봇이 펑~");
        actionToTeamRocket.attach(james);
        actionToTeamRocket.attach(jessie);
        actionToTeamRocket.attach(meowth);
        actionToTeamRocket.attach(wobbuffet);
        actionToTeamRocket.detach(meowthRobot);
    };
    this.last_skill = [];
    this.last_skill.push(JSON.stringify(Pokemon))
}

MeowthRobot.prototype.destroyRobot = function() {
    console.log("자폭 버튼을 실수로 눌러버린 나옹!\n 로사 : 도대체 왜 자폭 버튼 같은걸 만든거야!!")
    meowthRobot.leftArmArmor.hp = meowthRobot.leftArmArmor.hp - meowthRobot.leftArmArmor.hp;
    meowthRobot.rightArmArmor.hp = meowthRobot.rightArmArmor.hp - meowthRobot.rightArmArmor.hp;
    meowthRobot.leftArm.hp = meowthRobot.leftArm.hp - meowthRobot.leftArm.hp;
    meowthRobot.rightArm.hp = meowthRobot.rightArm.hp - meowthRobot.rightArm.hp;
    meowthRobot.leftLeg.hp = meowthRobot.leftLeg.hp - meowthRobot.leftLeg.hp;
    meowthRobot.rightLeg.hp = meowthRobot.rightLeg.hp - meowthRobot.rightLeg.hp;
    meowthRobot.body.hp = meowthRobot.body.hp - meowthRobot.body.hp;
    meowthRobot.head.hp = meowthRobot.head.hp - meowthRobot.head.hp;

    meowthRobot.checkTeamRocketsStatus();
}

var meowthRobot = new MeowthRobot()

export {meowthRobot, actionToTeamRocket, james, jessie, wobbuffet, meowth, TeamRocket}
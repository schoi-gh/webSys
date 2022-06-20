class Action {
    constructor() { }
    attach(member) { }
    detach(member) { }
    notifyMobs() { }
}


class ActionToTeamRocket extends Action{
    constructor() {
        super();
        this.enemy = [];
    }
    attach(member) {
        this.enemy.push(member);
    }
    detach(member) {
        this.enemy = this.enemy.filter(attachedObserver => attachedObserver !== member);
    }
    notifyEnemy(Pokemon) {
        this.enemy.forEach(member => member.checkTeamRocketsStatus(Pokemon));
    }
}





class TeamRocket {
    constructor(name) {
        this.name = name;
    }
    checkTeamRocketsStatus(Pokemon) {
        this.last_skill = [];
        this.last_skill.push(JSON.stringify(Pokemon));
    }
}



class TeamRocketPokemon extends TeamRocket{
    constructor(name) {
        super();
        this.name = name;
    }
}


var actionToTeamRocket = new ActionToTeamRocket();
var james = new TeamRocket("로이");
var jessie = new TeamRocket("로사");
var meowth = new TeamRocketPokemon("나옹");
var wobbuffet = new TeamRocketPokemon("마자용");


// 로봇
class Robot extends TeamRocket {
    constructor() {
        super();
    }
};
class Arm extends Robot {
    constructor() {
        super();
        this.hp = 10;
    }
};
class Leg extends Robot {
    constructor() {
        super();
        this.hp = 10;
    }
};
class Body extends Robot  {
    constructor() {
        super();
        this.hp = 10;
    }
};
class Head extends Robot {
    constructor() {
        super();
        this.hp = 10;
    }
};
class Caterpillar extends Robot {
    constructor() {
        super();
        this.hp = 10;
    }
};
class Wheel extends Robot {
    constructor() {
        super();
        this.hp = 10;
    }
};
class Tail extends Robot {
    constructor() {
        super();
        this.hp = 10;
    }
};
class CaptureTool extends Robot {
    constructor() {
        super();
        this.hp = 10;
    }
};

class MeowthRobot extends Robot {
    constructor() {
        super();
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
    }
    grabPokemons() {
        console.log("포켓몬들을 납치합니다");
        console.log("--------------------------------------------------------");
        console.log("납치된 포켓몬들이 탈출했습니다.");
    }
    fly() {
        console.log("나옹로봇이 하늘을 납니다");
    }
    avoidAttack() {
        this.avoidCount++;
    }
    checkTeamRocketsStatus(Pokemon) {
        if (meowthRobot.leftArm.hp === 0 && meowthRobot.rightArm.hp === 0 && meowthRobot.leftArmArmor.hp === 0
            && meowthRobot.rightArmArmor.hp === 0 && meowthRobot.leftCaterpillar.hp === 0
            && meowthRobot.rightCaterpillar.hp === 0 && meowthRobot.body.hp === 0 && meowthRobot.head.hp === 0) {
            console.log("로봇이 펑~");
            actionToTeamRocket.attach(james);
            actionToTeamRocket.attach(jessie);
            actionToTeamRocket.attach(meowth);
            actionToTeamRocket.attach(wobbuffet);
            actionToTeamRocket.detach(meowthRobot);
        };
        this.last_skill = [];
        this.last_skill.push(JSON.stringify(Pokemon));
    }
    destroyRobot() {
        console.log("자폭 버튼을 실수로 눌러버린 나옹!\n 로사 : 도대체 왜 자폭 버튼 같은걸 만든거야!!");
        meowthRobot.leftArmArmor.hp = meowthRobot.leftArmArmor.hp - meowthRobot.leftArmArmor.hp;
        meowthRobot.rightArmArmor.hp = meowthRobot.rightArmArmor.hp - meowthRobot.rightArmArmor.hp;
        meowthRobot.leftArm.hp = meowthRobot.leftArm.hp - meowthRobot.leftArm.hp;
        meowthRobot.rightArm.hp = meowthRobot.rightArm.hp - meowthRobot.rightArm.hp;
        meowthRobot.leftCaterpillar.hp = meowthRobot.leftCaterpillar.hp - meowthRobot.leftCaterpillar.hp;
        meowthRobot.rightCaterpillar.hp = meowthRobot.rightCaterpillar.hp - meowthRobot.rightCaterpillar.hp;
        meowthRobot.body.hp = meowthRobot.body.hp - meowthRobot.body.hp;
        meowthRobot.head.hp = meowthRobot.head.hp - meowthRobot.head.hp;
        meowthRobot.captureTool.hp = meowthRobot.captureTool.hp - meowthRobot.captureTool.hp;

        meowthRobot.checkTeamRocketsStatus();
    }
};






var meowthRobot = new MeowthRobot();

export {meowthRobot, actionToTeamRocket, james, jessie, wobbuffet, meowth, TeamRocket}
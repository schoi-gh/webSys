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
        this.detachEnemy = [];
    }
    attach(member) {
        this.enemy.push(member);
    }
    detach(member) {
        this.enemy = this.enemy.filter(attachedObserver => attachedObserver !== member);
    }
    notifyEnemy(Pokemon) {
        this.enemy.forEach(member => member.update(Pokemon));
    }
}





class TeamRocket {
    constructor(name) {
        this.name = name;
        // this.last_skill = []; //
    }
    update(Pokemon) {
        this.last_skill = [];
        this.last_skill.push(JSON.stringify(Pokemon)); //이부분은  this.last_skill.push(JSON.stringify(Pokemon.skill)); 로 하면 푸키몬의 모든 정보가 아니라 스킬만 들어감. 아니면 이름이랑 스킬만 푸시하면 그 두개만 들어가겠지
    }
}



class Syrphid extends TeamRocket{
    constructor(name) {
        super();
        this.name = name;
    }
}


var actionToTeamRocket = new ActionToTeamRocket();
var james = new TeamRocket("로이");
var jessie = new TeamRocket("로사");
var meowth = new Syrphid("나옹");
var wobbuffet = new Syrphid("마자용");


export {actionToTeamRocket, james, jessie, wobbuffet, meowth, TeamRocket}
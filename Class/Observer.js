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
    notifyEnemy(User) {
        this.enemy.forEach(member => member.update(User));
    }
}





class TeamRocket {
    constructor(name) {
        this.name = name;
    }
    update(User) {
        this.last_skill = [];
        this.last_skill.push(JSON.stringify(User));
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
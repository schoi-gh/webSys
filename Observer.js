function Action(){}
Action.prototype.attach = function(member){}
Action.prototype.detach = function(member){}
Action.prototype.notifyMobs = function(){}


function ActionToTeamRocket() {
    this.prototype = new Action();
    this.enemy = [];
    this.detachEnemy = [];
}

ActionToTeamRocket.prototype.attach = function(member) {
    this.enemy.push(member);
}

ActionToTeamRocket.prototype.detach = function(member) {
    this.enemy = this.enemy.filter(attachedObserver => attachedObserver !== member);
}

ActionToTeamRocket.prototype.notifyEnemy = function(Pokemon) {
    this.enemy.forEach(member => member.update(Pokemon));
}


function TeamRocket(name) {
    this.name = name;
}

TeamRocket.prototype.update = function(Pokemon) {
    this.last_skill = [];
    this.last_skill.push(JSON.stringify(Pokemon))
}


function Syrphid(name){
    this.name = name;
}
Syrphid.prototype = TeamRocket.prototype;


var actionToTeamRocket = new ActionToTeamRocket();
var james = new TeamRocket("로이");
var jessie = new TeamRocket("로사");
var meowth = new Syrphid("나옹");
var wobbuffet = new Syrphid("마자용");


export {actionToTeamRocket, james, jessie, wobbuffet, meowth, TeamRocket}
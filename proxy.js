import {actionToTeamRocket, meowthRobot} from "./Observer.js";

function DBInterface(){}

DBInterface.prototype.requestNextTurn = function(){}


function DataUpdate() {}

DataUpdate.prototype.requestNextTurn = function() {
    console.log("2. 다음 턴을 진행하기 위해 DB에 접근하여 데이터를 update 후, read함")
}


function DataUpdateProxy(dataUpdate) {
    this.prototype = new DBInterface();
    this.dataUpdate = dataUpdate;
}

DataUpdateProxy.prototype.requestNextTurn = function() {
    switch (meowthRobot.avoidCount) {
        case 0:
            this.beforeProc();
            this.dataUpdate.requestNextTurn();
        case 1:
            console.log("1. 나옹로봇이 공격을 회피합니다")
            meowthRobot.avoidCount = 0;
    };
    this.afterProc();
}

DataUpdateProxy.prototype.beforeProc = function() {
    console.log("1. 로딩중, 최근 턴 결과를 출력");
    console.table(actionToTeamRocket.enemy)
}

DataUpdateProxy.prototype.afterProc = function() {
    console.log("3. 로딩 끝, 다음 턴 진행")
    console.log("\n")
}


var dataUpdate = new DataUpdate();
var dataUpdateProxy = new DataUpdateProxy(dataUpdate);

export {dataUpdateProxy}
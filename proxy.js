import {actionToTeamRocket} from "./Observer.js";

function DBInterface(){}

DBInterface.prototype.request = function(){}


function DataUpdate() {}

DataUpdate.prototype.request = function() {
    console.log("2. 다음 턴을 진행하기 위해 DB에 접근하여 데이터를 update 후, read함")
}


function DataUpdateProxy(dataUpdate) {
    this.prototype = new DBInterface();
    this.dataUpdate = dataUpdate;
}

DataUpdateProxy.prototype.request = function() {
    this.beforeProc();
    this.dataUpdate.request();
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
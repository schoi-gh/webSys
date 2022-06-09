import {actionToTeamRocket} from "./Observer.js";

class DBInterface {
    constructor() { }
    requestNextTurn() { }
}



class DataUpdate {
    constructor() { }
    requestNextTurn() {
        console.log("2. 다음 턴을 진행하기 위해 DB에 접근하여 데이터를 update 후, read함");
    }
}



class DataUpdateProxy extends DBInterface {
    constructor(dataUpdate) {
        super();
        this.dataUpdate = dataUpdate;
    }
    requestNextTurn() {
        this.beforeProc();
        this.dataUpdate.requestNextTurn();
        this.afterProc();
    }
    beforeProc() {
        console.log("1. 로딩중, 최근 턴 결과를 출력");
        console.table(actionToTeamRocket.enemy);
    }
    afterProc() {
        console.log("3. 로딩 끝, 다음 턴 진행");
        console.log("\n");
    }
}





var dataUpdate = new DataUpdate();
var dataUpdateProxy = new DataUpdateProxy(dataUpdate);

export {dataUpdateProxy}
import {user, attack, cold} from "./strategy.js";
import {targetFly, beel, der, syr, mus} from "./Observer.js";
import {showStats, showStatsProxy} from "./proxy.js"

// Observer
targetFly.attach(beel);
targetFly.attach(der);
targetFly.attach(syr);
targetFly.attach(mus);

// Strategy
user.setSkill(attack)
user.execute(); // attack
showStats.request(); //로딩화면
console.log("---------------------");
showStatsProxy.request();

user.setSkill(cold)
user.execute(); // cold
showStats.request(); //로딩화면
console.log("---------------------");
showStatsProxy.request();

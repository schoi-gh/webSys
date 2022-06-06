import {slot1,attack,cold} from "./strategy.js";
import {targetFly, beel, der, syr, mus} from "./Observer.js";
import {showStats, proxy} from "./proxy.js"
//import {invoker, hit, attack, receiver, cold} from "./command.js"

// Observer
targetFly.attach(beel);
targetFly.attach(der);
targetFly.attach(syr);
targetFly.attach(mus);


// Strategy
slot1.setSkill(attack)
slot1.execute(); // attack
showStats.request(); //로딩화면
console.log("---------------------");
proxy.request();

slot1.setSkill(cold)
slot1.execute(); // cold
showStats.request(); //로딩화면
console.log("---------------------");
proxy.request();

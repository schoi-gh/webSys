import {context1,attack,cold} from "./strategy.js";
import {subject, even, odd, jap1, kor1} from "./Observer.js";
import {showStats, proxy} from "./proxy.js"
//import {invoker, hit, attack, receiver, cold} from "./command.js"

// Observer
subject.attach(even);
subject.attach(odd);
subject.attach(jap1);
subject.attach(kor1);


// Strategy
context1.setStrategy(attack)
context1.execute(); // attack
showStats.request(); //로딩화면
console.log("---------------------");
proxy.request();

context1.setStrategy(cold)
context1.execute(); // cold
showStats.request(); //로딩화면
console.log("---------------------");
proxy.request();

context1.setStrategy(attack)
context1.execute()
showStats.request(); //로딩화면
console.log("---------------------");
proxy.request();

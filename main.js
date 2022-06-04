import {context1,attack,cold} from "./strategy.js";
import {subject, even, odd, jap1, kor1} from "./Observer.js";
import {showStats, proxy} from "./proxy.js"

// Observer
subject.attach(even);
subject.attach(odd);
subject.attach(jap1);
subject.attach(kor1);

// Strategy
context1.setStrategy(attack)
context1.execute(); // attack
context1.setStrategy(cold)
context1.execute(); // cold
context1.setStrategy(attack)
context1.execute()

//Proxy
showStats.request();
console.log("---------------------");
proxy.request();
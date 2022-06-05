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
proxy.request();

context1.setStrategy(cold)
context1.execute(); // cold
proxy.request();

context1.setStrategy(attack)
context1.execute()
proxy.request();


/*
// Command
invoker.setCommand(attack);
invoker.executeCommand();
proxy.request();

invoker.setCommand(cold);
invoker.executeCommand();
proxy.request();
 */

//Proxy
showStats.request();
console.log("---------------------");
proxy.request();
import {context1,attack,cold} from "./strategy.js";
import {subject, even, odd, jap1} from "./Observer.js";


subject.attach(even);
subject.attach(odd);
subject.attach(jap1)

//var context2 = new Context(cold);
context1.setStrategy(attack)  // setStrategy
context1.execute(); // attack
//console.log(context1.name)
context1.setStrategy(cold)  // setStrategy
context1.execute(); // cold
context1.setStrategy(attack)
context1.execute()
//console.log(Context.name)
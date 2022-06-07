import {eevee,pikachu,meowth,pidgeot,snorlax,gengar,squirtle,bulbasaur,snorunt,charizard,gyarados,alakazam,koffing,rattata,magnemite,staraptor,blastoise,bidoof,roselia,quickAttack,ironTail,thunderbolt,thunderWave,tackle,tailWhip,growl,fakeOut,payDay,slash,wingAttack,braveBird,scaryFace,yawn,earthquake,bodySlam,hyperBeam,confuseRay,curse,toxic,lick,bubbleBeam,waterGun,hydroPump,sandAttack,sweetScent,vineWhip,razorLeaf,solarBeam,iceBeam,icyWind,iceFang,blizzard,flamethrower,aerialAce,crunch,psychic,psybeam,kinesis,confusion,selfdestruct,explosion} from "./strategy.js";
import {targetFly, beel, der, syr, mus} from "./Observer.js";
import {showStats, proxy} from "./proxy.js"


// Observer
targetFly.attach(beel);
targetFly.attach(der);
targetFly.attach(syr);
targetFly.attach(mus);


// Strategy

eevee.setSkill(tackle)
eevee.execute(); // attack
showStats.request(); //로딩화면
console.log("---------------------");
proxy.request();

pikachu.setSkill(thunderbolt)
pikachu.execute(); // cold
showStats.request(); //로딩화면
console.log("---------------------");
proxy.request();

meowth.setSkill(payDay)
meowth.execute(); // cold
showStats.request(); //로딩화면
console.log("---------------------");
proxy.request();

pidgeot.setSkill(wingAttack)
pidgeot.execute(); // attack
showStats.request(); //로딩화면
console.log("---------------------");
proxy.request();

snorlax.setSkill(yawn)
snorlax.execute(); // attack
showStats.request(); //로딩화면
console.log("---------------------");
proxy.request();

gengar.setSkill(lick)
gengar.execute(); // attack
showStats.request(); //로딩화면
console.log("---------------------");
proxy.request();

squirtle.setSkill(bubbleBeam)
squirtle.execute(); // attack
showStats.request(); //로딩화면
console.log("---------------------");
proxy.request();

bulbasaur.setSkill(vineWhip)
bulbasaur.execute(); // attack
showStats.request(); //로딩화면
console.log("---------------------");
proxy.request();

snorunt.setSkill(blizzard)
snorunt.execute(); // attack
showStats.request(); //로딩화면
console.log("---------------------");
proxy.request();

charizard.setSkill(flamethrower)
charizard.execute(); // attack
showStats.request(); //로딩화면
console.log("---------------------");
proxy.request();

gyarados.setSkill(crunch)
gyarados.execute(); // attack
showStats.request(); //로딩화면
console.log("---------------------");
proxy.request();

alakazam.setSkill(kinesis)
alakazam.execute(); // attack
showStats.request(); //로딩화면
console.log("---------------------");
proxy.request();

koffing.setSkill(explosion)
koffing.execute(); // attack
showStats.request(); //로딩화면
console.log("---------------------");
proxy.request();

rattata.setSkill(tailWhip)
rattata.execute(); // attack
showStats.request(); //로딩화면
console.log("---------------------");
proxy.request();

magnemite.setSkill(thunderWave)
magnemite.execute(); // attack
showStats.request(); //로딩화면
console.log("---------------------");
proxy.request();

staraptor.setSkill(braveBird)
staraptor.execute(); // attack
showStats.request(); //로딩화면
console.log("---------------------");
proxy.request();

blastoise.setSkill(earthquake)
blastoise.execute(); // attack
showStats.request(); //로딩화면
console.log("---------------------");
proxy.request();

bidoof.setSkill(growl)
bidoof.execute(); // attack
showStats.request(); //로딩화면
console.log("---------------------");
proxy.request();

roselia.setSkill(razorLeaf)
roselia.execute(); // attack
showStats.request(); //로딩화면
console.log("---------------------");
proxy.request();
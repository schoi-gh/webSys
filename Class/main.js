import {eevee,pikachu,persian,pidgeot,snorlax,gengar,squirtle,bulbasaur,snorunt,charizard,gyarados,alakazam,koffing,rattata,magnemite,staraptor,blastoise,bidoof,roselia,quickAttack,ironTail,thunderbolt,thunderWave,tackle,tailWhip,growl,fakeOut,payDay,slash,wingAttack,braveBird,scaryFace,yawn,earthquake,bodySlam,hyperBeam,confuseRay,curse,toxic,lick,bubbleBeam,waterGun,hydroPump,sandAttack,sweetScent,vineWhip,razorLeaf,solarBeam,iceBeam,icyWind,iceFang,blizzard,flamethrower,aerialAce,crunch,psychic,psybeam,kinesis,confusion,selfdestruct,explosion,chikorita,zubat,geodude,flareon,bellsprout,machop,magicalLeaf,supersonic,leechLife,bite,rockThrow,ember,charm,fireFang,$wrap,acid,lowKick,strength,seismicToss,firePunch,slowpoke,growlithe,gardevoir,machoke,butterfree,arbok} from "./strategy.js";
import {meowthRobot, actionToTeamRocket, james, jessie, wobbuffet, meowth} from "./Observer.js";
import {dataUpdateProxy} from "./proxy.js"


// Observer
actionToTeamRocket.attach(meowthRobot);


// Strategy
meowthRobot.grabPokemons();
meowthRobot.fly();


eevee.setSkill(tackle)
eevee.execute();
console.log("---------------------");
meowthRobot.avoidAttack();
dataUpdateProxy.requestNextTurn();

pikachu.setSkill(thunderbolt)
pikachu.execute(); // cold
console.log("---------------------");
dataUpdateProxy.requestNextTurn();

persian.setSkill(payDay)
persian.execute(); // cold
console.log("---------------------");
dataUpdateProxy.requestNextTurn();

pidgeot.setSkill(wingAttack)
pidgeot.execute();
console.log("---------------------");
dataUpdateProxy.requestNextTurn();

snorlax.setSkill(yawn)
snorlax.execute();
console.log("---------------------");
dataUpdateProxy.requestNextTurn();

gengar.setSkill(lick)
gengar.execute();
console.log("---------------------");
dataUpdateProxy.requestNextTurn();

squirtle.setSkill(bubbleBeam)
squirtle.execute();
console.log("---------------------");
dataUpdateProxy.requestNextTurn();

bulbasaur.setSkill(vineWhip)
bulbasaur.execute();
console.log("---------------------");
dataUpdateProxy.requestNextTurn();

snorunt.setSkill(blizzard)
snorunt.execute();
console.log("---------------------");
dataUpdateProxy.requestNextTurn();

charizard.setSkill(flamethrower)
charizard.execute();
console.log("---------------------");
dataUpdateProxy.requestNextTurn();

gyarados.setSkill(crunch)
gyarados.execute();
console.log("---------------------");
dataUpdateProxy.requestNextTurn();

alakazam.setSkill(kinesis)
alakazam.execute();
console.log("---------------------");
dataUpdateProxy.requestNextTurn();

koffing.setSkill(explosion)
koffing.execute();
console.log("---------------------");
dataUpdateProxy.requestNextTurn();

rattata.setSkill(tailWhip)
rattata.execute();
console.log("---------------------");
dataUpdateProxy.requestNextTurn();

magnemite.setSkill(thunderWave)
magnemite.execute();
console.log("---------------------");
dataUpdateProxy.requestNextTurn();

staraptor.setSkill(braveBird)
staraptor.execute();
console.log("---------------------");
dataUpdateProxy.requestNextTurn();

blastoise.setSkill(earthquake)
blastoise.execute();
console.log("---------------------");
dataUpdateProxy.requestNextTurn();

bidoof.setSkill(growl)
bidoof.execute();
console.log("---------------------");
dataUpdateProxy.requestNextTurn();

roselia.setSkill(razorLeaf)
roselia.execute();
console.log("---------------------");
dataUpdateProxy.requestNextTurn();

chikorita.setSkill(magicalLeaf)
chikorita.execute();
console.log("---------------------");
dataUpdateProxy.requestNextTurn();

zubat.setSkill(leechLife)
zubat.execute();
console.log("---------------------");
dataUpdateProxy.requestNextTurn();

geodude.setSkill(rockThrow)
geodude.execute();
console.log("---------------------");
dataUpdateProxy.requestNextTurn();

flareon.setSkill(ember)
flareon.execute();
console.log("---------------------");
dataUpdateProxy.requestNextTurn();

bellsprout.setSkill($wrap)
bellsprout.execute();
console.log("---------------------");
dataUpdateProxy.requestNextTurn();

machop.setSkill(lowKick)
machop.execute();
console.log("---------------------");
dataUpdateProxy.requestNextTurn();

slowpoke.setSkill(acid)
slowpoke.execute();
console.log("---------------------");
dataUpdateProxy.requestNextTurn();

growlithe.setSkill(flamethrower)
growlithe.execute();
console.log("---------------------");
dataUpdateProxy.requestNextTurn();

gardevoir.setSkill(psybeam)
gardevoir.execute();
console.log("---------------------");
dataUpdateProxy.requestNextTurn();

machoke.setSkill(seismicToss)
machoke.execute();
console.log("---------------------");
dataUpdateProxy.requestNextTurn();


// 로봇 파괴
meowthRobot.destroyRobot();


butterfree.setSkill(confusion)
butterfree.execute();
console.log("---------------------");
dataUpdateProxy.requestNextTurn();

arbok.setSkill(bite)
arbok.execute();
console.log("---------------------");
dataUpdateProxy.requestNextTurn();
import {eevee,pikachu,persian,pidgeot,snorlax,gengar,squirtle,bulbasaur,snorunt,charizard,gyarados,alakazam,koffing,rattata,magnemite,staraptor,blastoise,bidoof,roselia,quickAttack,ironTail,thunderbolt,thunderWave,tackle,tailWhip,growl,fakeOut,payDay,slash,wingAttack,braveBird,scaryFace,yawn,earthquake,bodySlam,hyperBeam,confuseRay,curse,toxic,lick,bubbleBeam,waterGun,hydroPump,sandAttack,sweetScent,vineWhip,razorLeaf,solarBeam,iceBeam,icyWind,iceFang,blizzard,flamethrower,aerialAce,crunch,psychic,psybeam,kinesis,confusion,selfdestruct,explosion,chikorita,zubat,geodude,flareon,bellsprout,machop,magicalLeaf,supersonic,leechLife,bite,rockThrow,ember,charm,fireFang,$wrap,acid,lowKick,strength,seismicToss,firePunch,slowpoke,growlithe,gardevoir,machoke,butterfree,arbok} from "./strategy.js";
import {actionToTeamRocket, james, jessie, wobbuffet, meowth} from "./Observer.js";
import {dataUpdateProxy} from "./proxy.js"


// Observer
actionToTeamRocket.attach(james);
actionToTeamRocket.attach(jessie);
actionToTeamRocket.attach(meowth);
actionToTeamRocket.attach(wobbuffet);


// Strategy
eevee.setSkill(tackle)
eevee.execute();
console.log("---------------------");
dataUpdateProxy.request();

pikachu.setSkill(thunderbolt)
pikachu.execute(); // cold
console.log("---------------------");
dataUpdateProxy.request();

persian.setSkill(payDay)
persian.execute(); // cold
console.log("---------------------");
dataUpdateProxy.request();

pidgeot.setSkill(wingAttack)
pidgeot.execute();
console.log("---------------------");
dataUpdateProxy.request();

snorlax.setSkill(yawn)
snorlax.execute();
console.log("---------------------");
dataUpdateProxy.request();

gengar.setSkill(lick)
gengar.execute();
console.log("---------------------");
dataUpdateProxy.request();

squirtle.setSkill(bubbleBeam)
squirtle.execute();
console.log("---------------------");
dataUpdateProxy.request();

bulbasaur.setSkill(vineWhip)
bulbasaur.execute();
console.log("---------------------");
dataUpdateProxy.request();

snorunt.setSkill(blizzard)
snorunt.execute();
console.log("---------------------");
dataUpdateProxy.request();

charizard.setSkill(flamethrower)
charizard.execute();
console.log("---------------------");
dataUpdateProxy.request();

gyarados.setSkill(crunch)
gyarados.execute();
console.log("---------------------");
dataUpdateProxy.request();

alakazam.setSkill(kinesis)
alakazam.execute();
console.log("---------------------");
dataUpdateProxy.request();

koffing.setSkill(explosion)
koffing.execute();
console.log("---------------------");
dataUpdateProxy.request();

rattata.setSkill(tailWhip)
rattata.execute();
console.log("---------------------");
dataUpdateProxy.request();

magnemite.setSkill(thunderWave)
magnemite.execute();
console.log("---------------------");
dataUpdateProxy.request();

staraptor.setSkill(braveBird)
staraptor.execute();
console.log("---------------------");
dataUpdateProxy.request();

blastoise.setSkill(earthquake)
blastoise.execute();
console.log("---------------------");
dataUpdateProxy.request();

bidoof.setSkill(growl)
bidoof.execute();
console.log("---------------------");
dataUpdateProxy.request();

roselia.setSkill(razorLeaf)
roselia.execute();
console.log("---------------------");
dataUpdateProxy.request();

chikorita.setSkill(magicalLeaf)
chikorita.execute();
console.log("---------------------");
dataUpdateProxy.request();

zubat.setSkill(leechLife)
zubat.execute();
console.log("---------------------");
dataUpdateProxy.request();

geodude.setSkill(rockThrow)
geodude.execute();
console.log("---------------------");
dataUpdateProxy.request();

flareon.setSkill(ember)
flareon.execute();
console.log("---------------------");
dataUpdateProxy.request();

bellsprout.setSkill($wrap)
bellsprout.execute();
console.log("---------------------");
dataUpdateProxy.request();

machop.setSkill(lowKick)
machop.execute();
console.log("---------------------");
dataUpdateProxy.request();

slowpoke.setSkill(acid)
slowpoke.execute();
console.log("---------------------");
dataUpdateProxy.request();

growlithe.setSkill(flamethrower)
growlithe.execute();
console.log("---------------------");
dataUpdateProxy.request();

gardevoir.setSkill(psybeam)
gardevoir.execute();
console.log("---------------------");
dataUpdateProxy.request();

machoke.setSkill(seismicToss)
machoke.execute();
console.log("---------------------");
dataUpdateProxy.request();

butterfree.setSkill(confusion)
butterfree.execute();
console.log("---------------------");
dataUpdateProxy.request();

arbok.setSkill(bite)
arbok.execute();
console.log("---------------------");
dataUpdateProxy.request();
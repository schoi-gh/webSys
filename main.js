import {eevee,pikachu,persian,pidgeot,snorlax,gengar,squirtle,bulbasaur,snorunt,charizard,gyarados,alakazam,koffing,rattata,magnemite,staraptor,blastoise,bidoof,roselia,quickAttack,ironTail,thunderbolt,thunderWave,tackle,tailWhip,growl,fakeOut,payDay,slash,wingAttack,braveBird,scaryFace,yawn,earthquake,bodySlam,hyperBeam,confuseRay,curse,toxic,lick,bubbleBeam,waterGun,hydroPump,sandAttack,sweetScent,vineWhip,razorLeaf,solarBeam,iceBeam,icyWind,iceFang,blizzard,flamethrower,aerialAce,crunch,psychic,psybeam,kinesis,confusion,selfdestruct,explosion,chikorita,zubat,geodude,flareon,bellsprout,machop,magicalLeaf,supersonic,leechLife,bite,rockThrow,ember,charm,fireFang,$wrap,acid,lowKick,strength,seismicToss,firePunch,slowpoke,growlithe,gardevoir,machoke,butterfree,arbok} from "./strategy.js";
import {meowthRobot, actionToTeamRocket, james, jessie, wobbuffet, meowth} from "./Observer.js";


// Observer
actionToTeamRocket.attach(meowthRobot);


// Strategy
meowthRobot.grabPokemons();
meowthRobot.fly();


eevee.setSkill(tackle)
eevee.execute();
meowthRobot.avoidAttack();
eevee.requestNextTurn();

pikachu.setSkill(thunderbolt)
pikachu.execute();
pikachu.requestNextTurn();

persian.setSkill(payDay)
persian.execute();
persian.requestNextTurn();

pidgeot.setSkill(wingAttack)
pidgeot.execute();
pidgeot.requestNextTurn();

snorlax.setSkill(yawn)
snorlax.execute();
snorlax.requestNextTurn();

gengar.setSkill(lick)
gengar.execute();
gengar.requestNextTurn();

squirtle.setSkill(bubbleBeam)
squirtle.execute();
squirtle.requestNextTurn();

bulbasaur.setSkill(vineWhip)
bulbasaur.execute();
bulbasaur.requestNextTurn();

snorunt.setSkill(blizzard)
snorunt.execute();
snorunt.requestNextTurn();

charizard.setSkill(flamethrower)
charizard.execute();
charizard.requestNextTurn();

gyarados.setSkill(crunch)
gyarados.execute();
gyarados.requestNextTurn();

alakazam.setSkill(kinesis)
alakazam.execute();
alakazam.requestNextTurn();

koffing.setSkill(explosion)
koffing.execute();
koffing.requestNextTurn();

rattata.setSkill(tailWhip)
rattata.execute();
rattata.requestNextTurn();

magnemite.setSkill(thunderWave)
magnemite.execute();
magnemite.requestNextTurn();

staraptor.setSkill(braveBird)
staraptor.execute();
staraptor.requestNextTurn();

blastoise.setSkill(earthquake)
blastoise.execute();
blastoise.requestNextTurn();

bidoof.setSkill(growl)
bidoof.execute();
bidoof.requestNextTurn();

roselia.setSkill(razorLeaf)
roselia.execute();
roselia.requestNextTurn();

chikorita.setSkill(magicalLeaf)
chikorita.execute();
chikorita.requestNextTurn();

zubat.setSkill(leechLife)
zubat.execute();
zubat.requestNextTurn();

geodude.setSkill(rockThrow)
geodude.execute();
geodude.requestNextTurn();

flareon.setSkill(ember)
flareon.execute();
flareon.requestNextTurn();

bellsprout.setSkill($wrap)
bellsprout.execute();
bellsprout.requestNextTurn();

machop.setSkill(lowKick)
machop.execute();
machop.requestNextTurn();

slowpoke.setSkill(acid)
slowpoke.execute();
slowpoke.requestNextTurn();

growlithe.setSkill(flamethrower)
growlithe.execute();
growlithe.requestNextTurn();

gardevoir.setSkill(psybeam)
gardevoir.execute();
gardevoir.requestNextTurn();

machoke.setSkill(seismicToss)
machoke.execute();
machoke.requestNextTurn();

// 로봇 파괴
meowthRobot.destroyRobot();

butterfree.setSkill(confusion)
butterfree.execute();
butterfree.requestNextTurn();

arbok.setSkill(bite)
arbok.execute();
arbok.requestNextTurn();
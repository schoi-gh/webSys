import {actionToTeamRocket} from "./Observer.js";
import {dataUpdateProxy} from "./proxy.js";



class Skill {
    constructor() { }
    execute() { }
}


class Tackle extends Skill {
    constructor() {
        super();
        this.skillName = "몸통박치기";
        this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    }
    execute() {
        console.log('[로켓단에게 %d 몸통박치기!]', tackle.damage);
    }
}



class HyperBeam extends Skill {
    constructor() {
        super();
        this.skillName = "파괴광선";
        this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    }
    execute() {
        console.log('[로켓단에게 %d 파괴광선!]', hyperBeam.damage);
    }
}



class QuickAttack extends Skill {
    constructor() {
        super();
        this.skillName = "전광석화";
        this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    }
    execute() {
        console.log('[로켓단에게 %d 전광석화!]', quickAttack.damage);
    }
}



class IronTail extends Skill {
    constructor() {
        super();
        this.skillName = "아이언테일";
        this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    }
    execute() {
        console.log('[로켓단에게 %d 아이언테일!]', ironTail.damage);
    }
}



class Thunderbolt extends Skill {
    constructor() {
        super();
        this.skillName = "10만볼트";
        this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    }
    execute() {
        console.log('[로켓단에게 %d 10만볼트!]', thunderbolt.damage);
    }
}



class ThunderWave extends Skill {
    constructor() {
        super();
        this.skillName = "전기자석파";
        this.downdef = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    }
    execute() {
        console.log('[로켓단에게 %d 전기자석파!]', thunderWave.downdef);
    }
}



class TailWhip extends Skill {
    constructor() {
        super();
        this.skillName = "꼬리흔들기";
        this.downdef = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    }
    execute() {
        console.log('[로켓단에게 %d 꼬리흔들기!]', tailWhip.downdef);
    }
}



class Growl extends Skill {
    constructor() {
        super();
        this.skillName = "울음소리";
        this.downdef = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    }
    execute() {
        console.log('[로켓단에게 %d 울음소리!]', growl.downdef);
    }
}



class FakeOut extends Skill {
    constructor() {
        super();
        this.skillName = "속이다";
        this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    }
    execute() {
        console.log('[로켓단에게 %d 속이다!]', fakeOut.damage);
    }
}



class PayDay extends Skill {
    constructor() {
        super();
        this.skillName = "고양이돈받기";
        this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    }
    execute() {
        console.log('[로켓단에게 %d 고양이돈받기!]', payDay.damage);
    }
}



class Slash extends Skill {
    constructor() {
        super();
        this.skillName = "베어가르기";
        this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    }
    execute() {
        console.log('[로켓단에게 %d 베어가르기!]', slash.damage);
    }
}



class WingAttack extends Skill {
    constructor() {
        super();
        this.skillName = "날개치기";
        this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    }
    execute() {
        console.log('[로켓단에게 %d 날개치기!]', wingAttack.damage);
    }
}



class BraveBird extends Skill {
    constructor() {
        super();
        this.skillName = "브레이브버드";
        this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    }
    execute() {
        console.log('[로켓단에게 %d 브레이브버드!]', braveBird.damage);
    }
}



class ScaryFace extends Skill {
    constructor() {
        super();
        this.skillName = "겁나는얼굴";
        this.downdef = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    }
    execute() {
        console.log('[로켓단에게 %d 겁나는얼굴!]', scaryFace.downdef);
    }
}


class Yawn extends Skill {
    constructor() {
        super();
        this.skillName = "하품";
        this.downdef = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    }
    execute() {
        console.log('[로켓단에게 %d 하품!]', yawn.downdef);
    }
}



class Earthquake extends Skill {
    constructor() {
        super();
        this.skillName = "지진";
        this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    }
    execute() {
        console.log('[로켓단에게 %d 지진!]', earthquake.damage);
    }
}



class BodySlam extends Skill {
    constructor() {
        super();
        this.skillName = "누르기";
        this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    }
    execute() {
        console.log('[로켓단에게 %d 누르기!]', bodySlam.damage);
    }
}



class ConfuseRay extends Skill {
    constructor() {
        super();
        this.skillName = "이상한빛";
        this.downdef = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    }
    execute() {
        console.log('[로켓단에게 %d 이상한빛!]', confuseRay.downdef);
    }
}



class Curse extends Skill {
    constructor() {
        super();
        this.skillName = "저주";
        this.downdef = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    }
    execute() {
        console.log('[로켓단에게 %d 저주!]', curse.downdef);
    }
}



class Toxic extends Skill {
    constructor() {
        super();
        this.skillName = "맹독";
        this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    }
    execute() {
        console.log('[로켓단에게 %d 맹독!]', toxic.damage);
    }
}



class Lick extends Skill {
    constructor() {
        super();
        this.skillName = "핥기";
        this.downdef = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    }
    execute() {
        console.log('[로켓단에게 %d 핥기!]', lick.downdef);
    }
}



class BubbleBeam extends Skill {
    constructor() {
        super();
        this.skillName = "거품광선";
        this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    }
    execute() {
        console.log('[로켓단에게 %d 거품광선!]', bubbleBeam.damage);
    }
}



class WaterGun extends Skill {
    constructor() {
        super();
        this.skillName = "물대포";
        this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    }
    execute() {
        console.log('[로켓단에게 %d 물대포!]', waterGun.damage);
    }
}



class HydroPump extends Skill {
    constructor() {
        super();
        this.skillName = "하이드로펌프";
        this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    }
    execute() {
        console.log('[로켓단에게 %d 하이드로펌프!]', hydroPump.damage);
    }
}



class SandAttack extends Skill {
    constructor() {
        super();
        this.skillName = "모래뿌리기";
        this.downdef = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    }
    execute() {
        console.log('[로켓단에게 %d 모래뿌리기!]', sandAttack.downdef);
    }
}



class SweetScent extends Skill {
    constructor() {
        super();
        this.skillName = "달콤한향기";
        this.downdef = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    }
    execute() {
        console.log('[로켓단에게 %d 달콤한향기!]', sweetScent.downdef);
    }
}



class VineWhip extends Skill {
    constructor() {
        super();
        this.skillName = "덩쿨채찍";
        this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    }
    execute() {
        console.log('[로켓단에게 %d 덩쿨채찍!]', vineWhip.damage);
    }
}



class RazorLeaf extends Skill {
    constructor() {
        super();
        this.skillName = "잎날가르기";
        this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    }
    execute() {
        console.log('[로켓단에게 %d 잎날가르기!]', razorLeaf.damage);
    }
}



class SolarBeam extends Skill {
    constructor() {
        super();
        this.skillName = "솔라빔";
        this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    }
    execute() {
        console.log('[로켓단에게 %d 솔라빔!]', solarBeam.damage);
    }
}



class IceBeam extends Skill {
    constructor() {
        super();
        this.skillName = "냉동빔";
        this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    }
    execute() {
        console.log('[로켓단에게 %d 냉동빔!]', iceBeam.damage);
    }
}



class IcyWind extends Skill {
    constructor() {
        super();
        this.skillName = "얼다바람";
        this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    }
    execute() {
        console.log('[로켓단에게 %d 얼다바람!]', icyWind.damage);
    }
}



class IceFang extends Skill {
    constructor() {
        super();
        this.skillName = "얼음엄니";
        this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    }
    execute() {
        console.log('[로켓단에게 %d 얼음엄니!]', iceFang.damage);
    }
}



class Blizzard extends Skill {
    constructor() {
        super();
        this.skillName = "눈보라";
        this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    }
    execute() {
        console.log('[로켓단에게 %d 눈보라!]', blizzard.damage);
    }
}



class Flamethrower extends Skill {
    constructor() {
        super();
        this.skillName = "화염방사";
        this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    }
    execute() {
        console.log('[로켓단에게 %d 화염방사!]', flamethrower.damage);
    }
}



class AerialAce extends Skill {
    constructor() {
        super();
        this.skillName = "제비반환";
        this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    }
    execute() {
        console.log('[로켓단에게 %d 제비반환!]', aerialAce.damage);
    }
}



class Crunch extends Skill {
    constructor() {
        super();
        this.skillName = "깨물어부수기";
        this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    }
    execute() {
        console.log('[로켓단에게 %d 깨물어부수기!]', crunch.damage);
    }
}



class Psychic extends Skill {
    constructor() {
        super();
        this.skillName = "사이코키네시스";
        this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    }
    execute() {
        console.log('[로켓단에게 %d 사이코키네시스!]', psychic.damage);
    }
}



class Psybeam extends Skill {
    constructor() {
        super();
        this.skillName = "환상빔";
        this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    }
    execute() {
        console.log('[로켓단에게 %d 환상빔!]', psybeam.damage);
    }
}



class Kinesis extends Skill {
    constructor() {
        super();
        this.skillName = "숟가락휘기";
        this.downdef = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    }
    execute() {
        console.log('[로켓단에게 %d 숟가락휘기!]', kinesis.downdef);
    }
}



class Confusion extends Skill {
    constructor() {
        super();
        this.skillName = "염동력";
        this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    }
    execute() {
        console.log('[로켓단에게 %d 염동력!]', confusion.damage);
    }
}



class Selfdestruct extends Skill {
    constructor() {
        super();
        this.skillName = "자폭";
        this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    }
    execute() {
        console.log('[로켓단에게 %d 자폭!]', selfdestruct.damage);
    }
}



class Explosion extends Skill {
    constructor() {
        super();
        this.skillName = "대폭발";
        this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    }
    execute() {
        console.log('[로켓단에게 %d 대폭발!]', explosion.damage);
    }
}


class MagicalLeaf extends Skill {
    constructor() {
        super();
        this.skillName = "메지컬리프";
        this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    }
    execute() {
        console.log('[로켓단에게 %d 메지컬리프!]', magicalLeaf.damage);
    }
}



class Supersonic extends Skill {
    constructor() {
        super();
        this.skillName = "초음파";
        this.downdef = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    }
    execute() {
        console.log('[로켓단에게 %d 초음파!]', supersonic.downdef);
    }
}



class LeechLife extends Skill {
    constructor() {
        super();
        this.skillName = "흡혈";
        this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    }
    execute() {
        console.log('[로켓단에게 %d 흡혈!]', leechLife.damage);
    }
}



class Bite extends Skill {
    constructor() {
        super();
        this.skillName = "물기";
        this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    }
    execute() {
        console.log('[로켓단에게 %d 물기!]', bite.damage);
    }
}



class RockThrow extends Skill {
    constructor() {
        super();
        this.skillName = "돌떨구기";
        this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    }
    execute() {
        console.log('[로켓단에게 %d 돌떨구기!]', rockThrow.damage);
    }
}



class Ember extends Skill {
    constructor() {
        super();
        this.skillName = "불꽃세례";
        this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    }
    execute() {
        console.log('[로켓단에게 %d 불꽃세례!]', ember.damage);
    }
}



class Charm extends Skill {
    constructor() {
        super();
        this.skillName = "애교부리기";
        this.downdef = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    }
    execute() {
        console.log('[로켓단에게 %d 애교부리기!]', charm.downdef);
    }
}



class FireFang extends Skill {
    constructor() {
        super();
        this.skillName = "불꽃엄니";
        this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    }
    execute() {
        console.log('[로켓단에게 %d 불꽃엄니!]', fireFang.damage);
    }
}



class Wrap extends Skill {
    constructor() {
        super();
        this.skillName = "김밥말이";
        this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    }
    execute() {
        console.log('[로켓단에게 %d 김밥말이!]', $wrap.damage);
    }
}



class Acid extends Skill {
    constructor() {
        super();
        this.skillName = "용해액";
        this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    }
    execute() {
        console.log('[로켓단에게 %d 용해액!]', acid.damage);
    }
}



class LowKick extends Skill {
    constructor() {
        super();
        this.skillName = "안다리걸기";
        this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    }
    execute() {
        console.log('[로켓단에게 %d 안다리걸기!]', lowKick.damage);
    }
}



class Strength extends Skill {
    constructor() {
        super();
        this.skillName = "괴력";
        this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    }
    execute() {
        console.log('[로켓단에게 %d 괴력!]', strength.damage);
    }
}



class SeismicToss extends Skill {
    constructor() {
        super();
        this.skillName = "지구던지기";
        this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    }
    execute() {
        console.log('[로켓단에게 %d 지구던지기!]', seismicToss.damage);
    }
}



class FirePunch extends Skill {
    constructor() {
        super();
        this.skillName = "불꽃펀치";
        this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    }
    execute() {
        console.log('[로켓단에게 %d 불꽃펀치!]', firePunch.damage);
    }
}


// Pokemon
class Pokemon {
    constructor(pokemonName, skill1, skill2, skill3, skill4) {
        this.pokemonName = pokemonName;
        this.skillslot = [skill1, skill2, skill3, skill4];
    }
    setSkill(skill) {
        if (this.skillslot.indexOf(skill.skillName) !== -1) {
            this.skill = skill;
        }
        else {
            console.log("배우지 않은 스킬입니다.");
        }
    }
    execute() {
        console.log(this.skill);
        this.skill.execute();
        actionToTeamRocket.notifyEnemy(this); // Observer.js의 notifyEnemy()를 실행
    }
    requestNextTurn() {
        console.log("---------------------");
        dataUpdateProxy.requestNextTurn();
    }
}



// Skill
var tackle = new Tackle();
var quickAttack = new QuickAttack();
var ironTail = new IronTail();
var thunderbolt = new Thunderbolt();
var thunderWave = new ThunderWave();
var tailWhip = new TailWhip();
var growl = new Growl();
var fakeOut = new FakeOut();
var payDay = new PayDay();
var slash = new Slash();
var wingAttack = new WingAttack();
var braveBird = new BraveBird();
var scaryFace = new ScaryFace();
var yawn = new Yawn();
var earthquake = new Earthquake();
var bodySlam = new BodySlam();
var hyperBeam = new HyperBeam();
var confuseRay = new ConfuseRay();
var curse = new Curse();
var toxic = new Toxic();
var lick = new Lick();
var bubbleBeam = new BubbleBeam();
var waterGun = new WaterGun();
var hydroPump = new HydroPump();
var sandAttack = new SandAttack();
var sweetScent = new SweetScent();
var vineWhip = new VineWhip();
var razorLeaf = new RazorLeaf();
var solarBeam = new SolarBeam();
var iceBeam = new IceBeam();
var icyWind = new IcyWind();
var iceFang = new IceFang();
var blizzard = new Blizzard();
var flamethrower = new Flamethrower();
var aerialAce = new AerialAce();
var crunch = new Crunch();
var psychic = new Psychic();
var psybeam = new Psybeam();
var kinesis = new Kinesis();
var confusion = new Confusion();
var selfdestruct = new Selfdestruct();
var explosion = new Explosion();
var magicalLeaf = new MagicalLeaf();
var supersonic = new Supersonic();
var leechLife = new LeechLife();
var bite = new Bite();
var rockThrow = new RockThrow();
var ember = new Ember();
var charm = new Charm();
var fireFang = new FireFang();
var $wrap = new Wrap();
var acid = new Acid();
var lowKick = new LowKick();
var strength = new Strength();
var seismicToss = new SeismicToss();
var firePunch = new FirePunch();

// Pokemon : pokemon
var eevee = new Pokemon("이브이","몸통박치기","전광석화","꼬리흔들기","울음소리");
var pikachu = new Pokemon("피카츄","전광석화","아이언테일","10만볼트","전기자석파");
var persian = new Pokemon("페르시온","속이다","울음소리","고양이돈받기","베어가르기");
var pidgeot = new Pokemon("피죤투","전광석화","날개치기","브레이브버드","겁나는얼굴");
var snorlax = new Pokemon("잠만보","하품","지진","누르기","파괴광선");
var gengar = new Pokemon("팬텀","이상한빛","저주","맹독","핥기");
var squirtle = new Pokemon("꼬북이","거품광선","물대포","하이드로펌프","모래뿌리기");
var bulbasaur = new Pokemon("이상해씨","달콤한향기","덩쿨채찍","잎날가르기","솔라빔");
var snorunt = new Pokemon("눈꼬마","냉동빔","얼다바람","얼음엄니","눈보라");
var charizard = new Pokemon("리자몽","겁나는얼굴","화염방사","파괴광선","공중날기");
var gyarados = new Pokemon("갸라도스","깨물어부수기","하이드로펌프","겁나는얼굴","파괴광선");
var alakazam = new Pokemon("후딘","사이코키네시스","환상빔","숟가락휘기","염동력");
var koffing = new Pokemon("또가스","자폭","대폭발","맹독","모래뿌리기");
var rattata = new Pokemon("꼬렛","꼬리흔들기","몸통박치기","울음소리","전광석화");
var magnemite = new Pokemon("코일","10만볼트","전기자석파","울음소리","파괴광선");
var staraptor = new Pokemon("찌르호크","브레이브버드","날개치기","베어가르기","겁나는얼굴");
var blastoise = new Pokemon("거북왕","지진","거품광선","하이드로펌프","파괴광선");
var bidoof = new Pokemon("비버니","울음소리","꼬리흔들기","몸통박치기","전광석화");
var roselia = new Pokemon("로젤리아","달콤한향기","잎날가르기","솔라빔","모래뿌리기");
var chikorita = new Pokemon("치코리타","잎날가르기","솔라빔","메지컬리프","울음소리")
var zubat = new Pokemon("주뱃","초음파","흡혈","물기","이상한빛");
var geodude = new Pokemon("꼬마돌","몸통박치기","모래뿌리기","지진","돌떨구기");
var flareon = new Pokemon("부스터","울음소리","불꽃세례","애교부리기","불꽃엄니");
var bellsprout = new Pokemon("모다피","덩굴채찍","김밥말이","잎날가르기","용해액");
var machop = new Pokemon("알통몬","안다리걸기","겁나는얼굴","괴력","지구던지기");
var slowpoke = new Pokemon("야돈","용해액","몸통박치기","하품","울음소리");
var growlithe = new Pokemon("가디","불꽃세례","겁나는얼굴","화염방사","깨물어부수기");
var gardevoir = new Pokemon("가디안","애교부리기","염동력","사이코키네시스","환상빔");
var machoke = new Pokemon("근육몬","지구던지기","겁나는얼굴","괴력","불꽃펀치");
var butterfree = new Pokemon("버터플","초음파","몸통박치기","환상빔","염동력");
var arbok = new Pokemon("아보크","용해액","김밥말이","물기","깨물어부수기");


export {eevee,pikachu,persian,pidgeot,snorlax,gengar,squirtle,bulbasaur,snorunt,charizard,gyarados,alakazam,koffing,rattata,magnemite,staraptor,blastoise,bidoof,roselia,quickAttack,ironTail,thunderbolt,thunderWave,tackle,tailWhip,growl,fakeOut,payDay,slash,wingAttack,braveBird,scaryFace,yawn,earthquake,bodySlam,hyperBeam,confuseRay,curse,toxic,lick,bubbleBeam,waterGun,hydroPump,sandAttack,sweetScent,vineWhip,razorLeaf,solarBeam,iceBeam,icyWind,iceFang,blizzard,flamethrower,aerialAce,crunch,psychic,psybeam,kinesis,confusion,selfdestruct,explosion,chikorita,zubat,geodude,flareon,bellsprout,machop,magicalLeaf,supersonic,leechLife,bite,rockThrow,ember,charm,fireFang,$wrap,acid,lowKick,strength,seismicToss,firePunch,slowpoke,growlithe,gardevoir,machoke,butterfree,arbok}
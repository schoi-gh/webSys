import {actionToTeamRocket} from "./Observer.js";
import {dataUpdateProxy} from "./proxy.js";


function Skill(){}
Skill.prototype.execute = function () {} // 선택한 전략 실행 메소드


function Tackle() {
    this.prototype = new Skill();
    this.skillName = "몸통박치기"
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
}

Tackle.prototype.execute = function() {
    console.log('[로켓단에게 %d 몸통박치기!]', tackle.damage);
}


function HyperBeam() {
    this.prototype = new Skill();
    this.skillName = "파괴광선"
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
}

HyperBeam.prototype.execute = function() {
    console.log('[로켓단에게 %d 파괴광선!]', hyperBeam.damage);
}


function QuickAttack() {
    this.prototype = new Skill();
    this.skillName = "전광석화"
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
}

QuickAttack.prototype.execute = function() {
    console.log('[로켓단에게 %d 전광석화!]', quickAttack.damage);
}


function IronTail() {
    this.prototype = new Skill();
    this.skillName = "아이언테일"
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
}

IronTail.prototype.execute = function() {
    console.log('[로켓단에게 %d 아이언테일!]', ironTail.damage);
}


function Thunderbolt() {
    this.prototype = new Skill();
    this.skillName = "10만볼트"
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
}

Thunderbolt.prototype.execute = function() {
    console.log('[로켓단에게 %d 10만볼트!]', thunderbolt.damage);
}


function ThunderWave() {
    this.prototype = new Skill();
    this.skillName = "전기자석파"
    this.downdef = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
}

ThunderWave.prototype.execute = function() {
    console.log('[로켓단에게 %d 전기자석파!]', thunderWave.downdef);
}


function TailWhip() {
    this.prototype = new Skill();
    this.skillName = "꼬리흔들기"
    this.downdef = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
}

TailWhip.prototype.execute = function() {
    console.log('[로켓단에게 %d 꼬리흔들기!]', tailWhip.downdef);
}


function Growl() {
    this.prototype = new Skill();
    this.skillName = "울음소리"
    this.downdef = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
}

Growl.prototype.execute = function() {
    console.log('[로켓단에게 %d 울음소리!]', growl.downdef);
}


function FakeOut() {
    this.prototype = new Skill();
    this.skillName = "속이다"
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
}

FakeOut.prototype.execute = function() {
    console.log('[로켓단에게 %d 속이다!]', fakeOut.damage);
}


function PayDay() {
    this.prototype = new Skill();
    this.skillName = "고양이돈받기"
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
}

PayDay.prototype.execute = function() {
    console.log('[로켓단에게 %d 고양이돈받기!]', payDay.damage);
}


function Slash() {
    this.prototype = new Skill();
    this.skillName = "베어가르기"
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
}

Slash.prototype.execute = function() {
    console.log('[로켓단에게 %d 베어가르기!]', slash.damage);
}


function WingAttack() {
    this.prototype = new Skill();
    this.skillName = "날개치기"
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
}

WingAttack.prototype.execute = function() {
    console.log('[로켓단에게 %d 날개치기!]', wingAttack.damage);
}


function BraveBird() {
    this.prototype = new Skill();
    this.skillName = "브레이브버드"
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
}

BraveBird.prototype.execute = function() {
    console.log('[로켓단에게 %d 브레이브버드!]', braveBird.damage);
}


function ScaryFace() {
    this.prototype = new Skill();
    this.skillName = "겁나는얼굴"
    this.downdef = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
}

ScaryFace.prototype.execute = function() {
    console.log('[로켓단에게 %d 겁나는얼굴!]', scaryFace.downdef);
}

function Yawn() {
    this.prototype = new Skill();
    this.skillName = "하품"
    this.downdef = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
}

Yawn.prototype.execute = function() {
    console.log('[로켓단에게 %d 하품!]', yawn.downdef);
}


function Earthquake() {
    this.prototype = new Skill();
    this.skillName = "지진"
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
}

Earthquake.prototype.execute = function() {
    console.log('[로켓단에게 %d 지진!]', earthquake.damage);
}


function BodySlam() {
    this.prototype = new Skill();
    this.skillName = "누르기"
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
}

BodySlam.prototype.execute = function() {
    console.log('[로켓단에게 %d 누르기!]', bodySlam.damage);
}


function ConfuseRay() {
    this.prototype = new Skill();
    this.skillName = "이상한빛"
    this.downdef = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
}

ConfuseRay.prototype.execute = function() {
    console.log('[로켓단에게 %d 이상한빛!]', confuseRay.downdef);
}


function Curse() {
    this.prototype = new Skill();
    this.skillName = "저주"
    this.downdef = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
}

Curse.prototype.execute = function() {
    console.log('[로켓단에게 %d 저주!]', curse.downdef);
}


function Toxic() {
    this.prototype = new Skill();
    this.skillName = "맹독"
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
}

Toxic.prototype.execute = function() {
    console.log('[로켓단에게 %d 맹독!]', toxic.damage);
}


function Lick() {
    this.prototype = new Skill();
    this.skillName = "핥기"
    this.downdef = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
}

Lick.prototype.execute = function() {
    console.log('[로켓단에게 %d 핥기!]', lick.downdef);
}


function BubbleBeam() {
    this.prototype = new Skill();
    this.skillName = "거품광선"
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
}

BubbleBeam.prototype.execute = function() {
    console.log('[로켓단에게 %d 거품광선!]', bubbleBeam.damage);
}


function WaterGun() {
    this.prototype = new Skill();
    this.skillName = "물대포"
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
}

WaterGun.prototype.execute = function() {
    console.log('[로켓단에게 %d 물대포!]', waterGun.damage);
}


function HydroPump() {
    this.prototype = new Skill();
    this.skillName = "하이드로펌프"
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
}

HydroPump.prototype.execute = function() {
    console.log('[로켓단에게 %d 하이드로펌프!]', hydroPump.damage);
}


function SandAttack() {
    this.prototype = new Skill();
    this.skillName = "모래뿌리기"
    this.downdef = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
}

SandAttack.prototype.execute = function() {
    console.log('[로켓단에게 %d 모래뿌리기!]', sandAttack.downdef);
}


function SweetScent() {
    this.prototype = new Skill();
    this.skillName = "달콤한향기"
    this.downdef = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
}

SweetScent.prototype.execute = function() {
    console.log('[로켓단에게 %d 달콤한향기!]', sweetScent.downdef);
}


function VineWhip() {
    this.prototype = new Skill();
    this.skillName = "덩쿨채찍"
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
}

VineWhip.prototype.execute = function() {
    console.log('[로켓단에게 %d 덩쿨채찍!]', vineWhip.damage);
}


function RazorLeaf() {
    this.prototype = new Skill();
    this.skillName = "잎날가르기"
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
}

RazorLeaf.prototype.execute = function() {
    console.log('[로켓단에게 %d 잎날가르기!]', razorLeaf.damage);
}


function SolarBeam() {
    this.prototype = new Skill();
    this.skillName = "솔라빔"
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
}

SolarBeam.prototype.execute = function() {
    console.log('[로켓단에게 %d 솔라빔!]', solarBeam.damage);
}


function IceBeam() {
    this.prototype = new Skill();
    this.skillName = "냉동빔"
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
}

IceBeam.prototype.execute = function() {
    console.log('[로켓단에게 %d 냉동빔!]', iceBeam.damage);
}


function IcyWind() {
    this.prototype = new Skill();
    this.skillName = "얼다바람"
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
}

IcyWind.prototype.execute = function() {
    console.log('[로켓단에게 %d 얼다바람!]', icyWind.damage);
}


function IceFang() {
    this.prototype = new Skill();
    this.skillName = "얼음엄니"
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
}

IceFang.prototype.execute = function() {
    console.log('[로켓단에게 %d 얼음엄니!]', iceFang.damage);
}


function Blizzard() {
    this.prototype = new Skill();
    this.skillName = "눈보라"
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
}

Blizzard.prototype.execute = function() {
    console.log('[로켓단에게 %d 눈보라!]', blizzard.damage);
}


function Flamethrower() {
    this.prototype = new Skill();
    this.skillName = "화염방사"
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
}

Flamethrower.prototype.execute = function() {
    console.log('[로켓단에게 %d 화염방사!]', flamethrower.damage);
}


function AerialAce() {
    this.prototype = new Skill();
    this.skillName = "제비반환"
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
}

AerialAce.prototype.execute = function() {
    console.log('[로켓단에게 %d 제비반환!]', aerialAce.damage);
}


function Crunch() {
    this.prototype = new Skill();
    this.skillName = "깨물어부수기"
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
}

Crunch.prototype.execute = function() {
    console.log('[로켓단에게 %d 깨물어부수기!]', crunch.damage);
}


function Psychic() {
    this.prototype = new Skill();
    this.skillName = "사이코키네시스"
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
}

Psychic.prototype.execute = function() {
    console.log('[로켓단에게 %d 사이코키네시스!]', psychic.damage);
}


function Psybeam() {
    this.prototype = new Skill();
    this.skillName = "환상빔"
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
}

Psybeam.prototype.execute = function() {
    console.log('[로켓단에게 %d 환상빔!]', psybeam.damage);
}


function Kinesis() {
    this.prototype = new Skill();
    this.skillName = "숟가락휘기"
    this.downdef = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
}

Kinesis.prototype.execute = function() {
    console.log('[로켓단에게 %d 숟가락휘기!]', kinesis.downdef);
}


function Confusion() {
    this.prototype = new Skill();
    this.skillName = "염동력"
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
}

Confusion.prototype.execute = function() {
    console.log('[로켓단에게 %d 염동력!]', confusion.damage);
}


function Selfdestruct() {
    this.prototype = new Skill();
    this.skillName = "자폭"
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
}

Selfdestruct.prototype.execute = function() {
    console.log('[로켓단에게 %d 자폭!]', selfdestruct.damage);
}


function Explosion() {
    this.prototype = new Skill();
    this.skillName = "대폭발"
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
}

Explosion.prototype.execute = function() {
    console.log('[로켓단에게 %d 대폭발!]', explosion.damage);
}

function MagicalLeaf() {
    this.prototype = new Skill();
    this.skillName = "메지컬리프"
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
}

MagicalLeaf.prototype.execute = function() {
    console.log('[로켓단에게 %d 메지컬리프!]', magicalLeaf.damage);
}


function Supersonic() {
    this.prototype = new Skill();
    this.skillName = "초음파"
    this.downdef = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
}

Supersonic.prototype.execute = function() {
    console.log('[로켓단에게 %d 초음파!]', supersonic.downdef);
}


function LeechLife() {
    this.prototype = new Skill();
    this.skillName = "흡혈"
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
}

LeechLife.prototype.execute = function() {
    console.log('[로켓단에게 %d 흡혈!]', leechLife.damage);
}


function Bite() {
    this.prototype = new Skill();
    this.skillName = "물기"
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
}

Bite.prototype.execute = function() {
    console.log('[로켓단에게 %d 물기!]', bite.damage);
}


function RockThrow() {
    this.prototype = new Skill();
    this.skillName = "돌떨구기"
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
}

RockThrow.prototype.execute = function() {
    console.log('[로켓단에게 %d 돌떨구기!]', rockThrow.damage);
}


function Ember() {
    this.prototype = new Skill();
    this.skillName = "불꽃세례"
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
}

Ember.prototype.execute = function() {
    console.log('[로켓단에게 %d 불꽃세례!]', ember.damage);
}


function Charm() {
    this.prototype = new Skill();
    this.skillName = "애교부리기"
    this.downdef = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
}

Charm.prototype.execute = function() {
    console.log('[로켓단에게 %d 애교부리기!]', charm.downdef);
}


function FireFang() {
    this.prototype = new Skill();
    this.skillName = "불꽃엄니"
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
}

FireFang.prototype.execute = function() {
    console.log('[로켓단에게 %d 불꽃엄니!]', fireFang.damage);
}


function Wrap() {
    this.prototype = new Skill();
    this.skillName = "김밥말이"
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
}

Wrap.prototype.execute = function() {
    console.log('[로켓단에게 %d 김밥말이!]', $wrap.damage);
}


function Acid() {
    this.prototype = new Skill();
    this.skillName = "용해액"
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
}

Acid.prototype.execute = function() {
    console.log('[로켓단에게 %d 용해액!]', acid.damage);
}


function LowKick() {
    this.prototype = new Skill();
    this.skillName = "안다리걸기"
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
}

LowKick.prototype.execute = function() {
    console.log('[로켓단에게 %d 안다리걸기!]', lowKick.damage);
}


function Strength() {
    this.prototype = new Skill();
    this.skillName = "괴력"
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
}

Strength.prototype.execute = function() {
    console.log('[로켓단에게 %d 괴력!]', strength.damage);
}


function SeismicToss() {
    this.prototype = new Skill();
    this.skillName = "지구던지기"
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
}

SeismicToss.prototype.execute = function() {
    console.log('[로켓단에게 %d 지구던지기!]', seismicToss.damage);
}


function FirePunch() {
    this.prototype = new Skill();
    this.skillName = "불꽃펀치"
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
}

FirePunch.prototype.execute = function() {
    console.log('[로켓단에게 %d 불꽃펀치!]', firePunch.damage);
}

// Pokemon
function Pokemon(pokemonName,skill1,skill2,skill3,skill4) {
    this.pokemonName = pokemonName
    this.skillslot = [skill1,skill2,skill3,skill4];
    this.setSkill = function (skill) {
        if (this.skillslot.indexOf(skill.skillName) !== -1) {
            this.skill = skill
        }
        else {
            console.log("배우지 않은 스킬입니다.")
        }
    }
    this.execute = function() {
        console.log(this.skill)
        this.skill.execute()
        actionToTeamRocket.notifyEnemy(this);
    };
    this.requestNextTurn = function() {
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
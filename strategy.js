import {targetFly} from "./Observer.js";


function Skill(){} //interface
Skill.prototype.execute = function () {} // 선택한 전략 실행 메소드


function Tackle() {  // 데미지를 주는 전술
    this.prototype = new Skill();
    this.name = "몸통박치기"
    this.damage
}

Tackle.prototype.execute = function() {
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    console.log('[초파리에게 %d 몸통박치기!]\n', tackle.damage);
}


function HyperBeam() {  // 데미지를 주는 전술
    this.prototype = new Skill();
    this.name = "파괴광선"
    this.damage
}

HyperBeam.prototype.execute = function() {
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    console.log('[초파리에게 %d 파괴광선!]\n', hyperBeam.damage);
}


function QuickAttack() {  // 데미지를 주는 전술
    this.prototype = new Skill();
    this.name = "전광석화"
    this.damage
}

QuickAttack.prototype.execute = function() {
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    console.log('[초파리에게 %d 전광석화!]\n', quickAttack.damage);
}


function IronTail() {  // 데미지를 주는 전술
    this.prototype = new Skill();
    this.name = "아이언테일"
    this.damage
}

IronTail.prototype.execute = function() {
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    console.log('[초파리에게 %d 아이언테일!]\n', ironTail.damage);
}


function Thunderbolt() {  // 데미지를 주는 전술
    this.prototype = new Skill();
    this.name = "10만볼트"
    this.damage
}

Thunderbolt.prototype.execute = function() {
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    console.log('[초파리에게 %d 10만볼트!]\n', thunderbolt.damage);
}


function ThunderWave() {  // 데미지를 주는 전술
    this.prototype = new Skill();
    this.name = "전기자석파"
    this.downdef
}

ThunderWave.prototype.execute = function() {
    this.downdef = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    console.log('[초파리에게 %d 전기자석파!]\n', thunderWave.downdef);
}


function TailWhip() {  // 데미지를 주는 전술
    this.prototype = new Skill();
    this.name = "꼬리흔들기"
    this.downdef
}

TailWhip.prototype.execute = function() {
    this.downdef = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    console.log('[초파리에게 %d 꼬리흔들기!]\n', tailWhip.downdef);
}


function Growl() {  // 데미지를 주는 전술
    this.prototype = new Skill();
    this.name = "울음소리"
    this.downdef
}

Growl.prototype.execute = function() {
    this.downdef = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    console.log('[초파리에게 %d 울음소리!]\n', growl.downdef);
}


function FakeOut() {  // 데미지를 주는 전술
    this.prototype = new Skill();
    this.name = "속이다"
    this.damage
}

FakeOut.prototype.execute = function() {
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    console.log('[초파리에게 %d 속이다!]\n', fakeOut.damage);
}


function PayDay() {  // 데미지를 주는 전술
    this.prototype = new Skill();
    this.name = "고양이돈받기"
    this.damage
}

PayDay.prototype.execute = function() {
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    console.log('[초파리에게 %d 고양이돈받기!]\n', payDay.damage);
}


function Slash() {  // 데미지를 주는 전술
    this.prototype = new Skill();
    this.name = "베어가르기"
    this.damage
}

Slash.prototype.execute = function() {
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    console.log('[초파리에게 %d 베어가르기!]\n', slash.damage);
}


function WingAttack() {  // 데미지를 주는 전술
    this.prototype = new Skill();
    this.name = "날개치기"
    this.damage
}

WingAttack.prototype.execute = function() {
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    console.log('[초파리에게 %d 날개치기!]\n', wingAttack.damage);
}


function BraveBird() {  // 데미지를 주는 전술
    this.prototype = new Skill();
    this.name = "브레이브버드"
    this.damage
}

BraveBird.prototype.execute = function() {
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    console.log('[초파리에게 %d 브레이브버드!]\n', braveBird.damage);
}


function ScaryFace() {   // 방어력을 깎는 전술
    this.prototype = new Skill();
    this.name = "겁나는얼굴"
    this.downdef
}


ScaryFace.prototype.execute = function() {
    this.downdef = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    console.log('[초파리에게 %d 겁나는얼굴!]\n', scaryFace.downdef);
}

function Yawn() {   // 방어력을 깎는 전술
    this.prototype = new Skill();
    this.name = "하품"
    this.downdef
}


Yawn.prototype.execute = function() {
    this.downdef = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    console.log('[초파리에게 %d 하품!]\n', yawn.downdef);
}


function Earthquake() {   // 방어력을 깎는 전술
    this.prototype = new Skill();
    this.name = "지진"
    this.damage
}


Earthquake.prototype.execute = function() {
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    console.log('[초파리에게 %d 지진!]\n', earthquake.damage);
}


function BodySlam() {   // 방어력을 깎는 전술
    this.prototype = new Skill();
    this.name = "누르기"
    this.damage
}


BodySlam.prototype.execute = function() {
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    console.log('[초파리에게 %d 누르기!]\n', bodySlam.damage);
}


function ConfuseRay() {   // 방어력을 깎는 전술
    this.prototype = new Skill();
    this.name = "이상한빛"
    this.downdef
}


ConfuseRay.prototype.execute = function() {
    this.downdef = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    console.log('[초파리에게 %d 이상한빛!]\n', confuseRay.downdef);
}


function Curse() {   // 방어력을 깎는 전술
    this.prototype = new Skill();
    this.name = "저주"
    this.downdef
}


Curse.prototype.execute = function() {
    this.downdef = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    console.log('[초파리에게 %d 저주!]\n', curse.downdef);
}


function Toxic() {   // 방어력을 깎는 전술
    this.prototype = new Skill();
    this.name = "맹독"
    this.damage
}


Toxic.prototype.execute = function() {
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    console.log('[초파리에게 %d 맹독!]\n', toxic.damage);
}


function Lick() {   // 방어력을 깎는 전술
    this.prototype = new Skill();
    this.name = "핥기"
    this.downdef
}


Lick.prototype.execute = function() {
    this.downdef = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    console.log('[초파리에게 %d 핥기!]\n', lick.downdef);
}


function BubbleBeam() {   // 방어력을 깎는 전술
    this.prototype = new Skill();
    this.name = "거품광선"
    this.damage
}


BubbleBeam.prototype.execute = function() {
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    console.log('[초파리에게 %d 거품광선!]\n', bubbleBeam.damage);
}


function WaterGun() {   // 방어력을 깎는 전술
    this.prototype = new Skill();
    this.name = "물대포"
    this.damage
}


WaterGun.prototype.execute = function() {
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    console.log('[초파리에게 %d 물대포!]\n', waterGun.damage);
}


function HydroPump() {   // 방어력을 깎는 전술
    this.prototype = new Skill();
    this.name = "하이드로펌프"
    this.damage
}


HydroPump.prototype.execute = function() {
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    console.log('[초파리에게 %d 하이드로펌프!]\n', hydroPump.damage);
}


function SandAttack() {   // 방어력을 깎는 전술
    this.prototype = new Skill();
    this.name = "모래뿌리기"
    this.downdef
}


SandAttack.prototype.execute = function() {
    this.downdef = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    console.log('[초파리에게 %d 모래뿌리기!]\n', sandAttack.downdef);
}


function SweetScent() {   // 방어력을 깎는 전술
    this.prototype = new Skill();
    this.name = "달콤한향기"
    this.downdef
}


SweetScent.prototype.execute = function() {
    this.downdef = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    console.log('[초파리에게 %d 달콤한향기!]\n', sweetScent.downdef);
}


function VineWhip() {   // 방어력을 깎는 전술
    this.prototype = new Skill();
    this.name = "덩쿨채찍"
    this.damage
}


VineWhip.prototype.execute = function() {
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    console.log('[초파리에게 %d 덩쿨채찍!]\n', vineWhip.damage);
}


function RazorLeaf() {   // 방어력을 깎는 전술
    this.prototype = new Skill();
    this.name = "잎날가르기"
    this.damage
}


RazorLeaf.prototype.execute = function() {
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    console.log('[초파리에게 %d 잎날가르기!]\n', razorLeaf.damage);
}


function SolarBeam() {   // 방어력을 깎는 전술
    this.prototype = new Skill();
    this.name = "솔라빔"
    this.damage
}


SolarBeam.prototype.execute = function() {
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    console.log('[초파리에게 %d 솔라빔!]\n', solarBeam.damage);
}


function IceBeam() {   // 방어력을 깎는 전술
    this.prototype = new Skill();
    this.name = "냉동빔"
    this.damage
}


IceBeam.prototype.execute = function() {
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    console.log('[초파리에게 %d 냉동빔!]\n', iceBeam.damage);
}


function IcyWind() {   // 방어력을 깎는 전술
    this.prototype = new Skill();
    this.name = "얼다바람"
    this.damage
}


IcyWind.prototype.execute = function() {
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    console.log('[초파리에게 %d 얼다바람!]\n', icyWind.damage);
}


function IceFang() {   // 방어력을 깎는 전술
    this.prototype = new Skill();
    this.name = "얼음엄니"
    this.damage
}


IceFang.prototype.execute = function() {
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    console.log('[초파리에게 %d 얼음엄니!]\n', iceFang.damage);
}


function Blizzard() {   // 방어력을 깎는 전술
    this.prototype = new Skill();
    this.name = "눈보라"
    this.damage
}


Blizzard.prototype.execute = function() {
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    console.log('[초파리에게 %d 눈보라!]\n', blizzard.damage);
}


function Flamethrower() {   // 방어력을 깎는 전술
    this.prototype = new Skill();
    this.name = "화염방사"
    this.damage
}


Flamethrower.prototype.execute = function() {
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    console.log('[초파리에게 %d 화염방사!]\n', flamethrower.damage);
}


function AerialAce() {   // 방어력을 깎는 전술
    this.prototype = new Skill();
    this.name = "제비반환"
    this.damage
}


AerialAce.prototype.execute = function() {
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    console.log('[초파리에게 %d 제비반환!]\n', aerialAce.damage);
}


function Crunch() {   // 방어력을 깎는 전술
    this.prototype = new Skill();
    this.name = "깨물어부수기"
    this.damage
}


Crunch.prototype.execute = function() {
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    console.log('[초파리에게 %d 깨물어부수기!]\n', crunch.damage);
}


function Psychic() {   // 방어력을 깎는 전술
    this.prototype = new Skill();
    this.name = "사이코키네시스"
    this.damage
}


Psychic.prototype.execute = function() {
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    console.log('[초파리에게 %d 사이코키네시스!]\n', psychic.damage);
}


function Psybeam() {   // 방어력을 깎는 전술
    this.prototype = new Skill();
    this.name = "환상빔"
    this.damage
}


Psybeam.prototype.execute = function() {
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    console.log('[초파리에게 %d 환상빔!]\n', psybeam.damage);
}


function Kinesis() {   // 방어력을 깎는 전술
    this.prototype = new Skill();
    this.name = "숟가락휘기"
    this.downdef
}


Kinesis.prototype.execute = function() {
    this.downdef = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    console.log('[초파리에게 %d 숟가락휘기!]\n', kinesis.downdef);
}


function Confusion() {   // 방어력을 깎는 전술
    this.prototype = new Skill();
    this.name = "염동력"
    this.damage
}


Confusion.prototype.execute = function() {
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    console.log('[초파리에게 %d 염동력!]\n', confusion.damage);
}


function Selfdestruct() {   // 방어력을 깎는 전술
    this.prototype = new Skill();
    this.name = "자폭"
    this.damage
}


Selfdestruct.prototype.execute = function() {
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    console.log('[초파리에게 %d 자폭!]\n', selfdestruct.damage);
}


function Explosion() {   // 방어력을 깎는 전술
    this.prototype = new Skill();
    this.name = "대폭발"
    this.damage
}


Explosion.prototype.execute = function() {
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    console.log('[초파리에게 %d 대폭발!]\n', explosion.damage);
}

function MagicalLeaf() {   // 방어력을 깎는 전술
    this.prototype = new Skill();
    this.name = "메지컬리프"
    this.damage
}


MagicalLeaf.prototype.execute = function() {
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    console.log('[초파리에게 %d 메지컬리프!]\n', magicalLeaf.damage);
}


function Supersonic() {   // 방어력을 깎는 전술
    this.prototype = new Skill();
    this.name = "초음파"
    this.downdef
}


Supersonic.prototype.execute = function() {
    this.downdef = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    console.log('[초파리에게 %d 초음파!]\n', supersonic.downdef);
}


function LeechLife() {   // 방어력을 깎는 전술
    this.prototype = new Skill();
    this.name = "흡혈"
    this.damage
}


LeechLife.prototype.execute = function() {
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    console.log('[초파리에게 %d 흡혈!]\n', leechLife.damage);
}


function Bite() {   // 방어력을 깎는 전술
    this.prototype = new Skill();
    this.name = "물기"
    this.damage
}


Bite.prototype.execute = function() {
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    console.log('[초파리에게 %d 물기!]\n', bite.damage);
}


function RockThrow() {   // 방어력을 깎는 전술
    this.prototype = new Skill();
    this.name = "돌떨구기"
    this.damage
}


RockThrow.prototype.execute = function() {
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    console.log('[초파리에게 %d 돌떨구기!]\n', rockThrow.damage);
}


function Ember() {   // 방어력을 깎는 전술
    this.prototype = new Skill();
    this.name = "불꽃세례"
    this.damage
}


Ember.prototype.execute = function() {
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    console.log('[초파리에게 %d 불꽃세례!]\n', ember.damage);
}


function Charm() {   // 방어력을 깎는 전술
    this.prototype = new Skill();
    this.name = "애교부리기"
    this.downdef
}


Charm.prototype.execute = function() {
    this.downdef = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    console.log('[초파리에게 %d 애교부리기!]\n', charm.downdef);
}


function FireFang() {   // 방어력을 깎는 전술
    this.prototype = new Skill();
    this.name = "불꽃엄니"
    this.damage
}


FireFang.prototype.execute = function() {
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    console.log('[초파리에게 %d 불꽃엄니!]\n', fireFang.damage);
}


function Wrap() {   // 방어력을 깎는 전술
    this.prototype = new Skill();
    this.name = "김밥말이"
    this.damage
}


Wrap.prototype.execute = function() {
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    console.log('[초파리에게 %d 김밥말이!]\n', $wrap.damage);
}


function Acid() {   // 방어력을 깎는 전술
    this.prototype = new Skill();
    this.name = "용해액"
    this.damage
}


Acid.prototype.execute = function() {
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    console.log('[초파리에게 %d 용해액!]\n', acid.damage);
}


function LowKick() {   // 방어력을 깎는 전술
    this.prototype = new Skill();
    this.name = "안다리걸기"
    this.damage
}


LowKick.prototype.execute = function() {
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    console.log('[초파리에게 %d 안다리걸기!]\n', lowKick.damage);
}


function Strength() {   // 방어력을 깎는 전술
    this.prototype = new Skill();
    this.name = "괴력"
    this.damage
}


Strength.prototype.execute = function() {
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    console.log('[초파리에게 %d 괴력!]\n', strength.damage);
}


function SeismicToss() {   // 방어력을 깎는 전술
    this.prototype = new Skill();
    this.name = "지구던지기"
    this.damage
}


SeismicToss.prototype.execute = function() {
    this.damage = Math.floor(Math.random() * ((-10) - (-1)) + (-1));
    console.log('[초파리에게 %d 지구던지기!]\n', seismicToss.damage);
}

function User(name,skill1,skill2,skill3,skill4) {
    this.name = name
    this.skill;
    this.skillslot = [skill1,skill2,skill3,skill4];
}

User.prototype.setSkill = function (skill) {
    if (this.skillslot.indexOf(skill.name) !== -1) {
        this.skill = skill
        
    }
    else {
        console.log("배우지 않은 스킬입니다.")
    }
}

User.prototype.execute = function() {
    console.log(this.skill)
    this.skill.execute()
    targetFly.notifyMobs(this);  // Observer.js의 notifyFlies()를 실행
};


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


var eevee = new User("이브이","몸통박치기","전광석화","꼬리흔들기","울음소리");
var pikachu = new User("피카츄","전광석화","아이언테일","10만볼트","전기자석파");
var meowth = new User("나옹","속이다","울음소리","고양이돈받기","베어가르기");
var pidgeot = new User("피죤투","전광석화","날개치기","브레이브버드","겁나는얼굴");
var snorlax = new User("잠만보","하품","지진","누르기","파괴광선");
var gengar = new User("팬텀","이상한빛","저주","맹독","핥기");
var squirtle = new User("꼬북이","거품광선","물대포","하이드로펌프","모래뿌리기");
var bulbasaur = new User("이상해씨","달콤한향기","덩쿨채찍","잎날가르기","솔라빔");
var snorunt = new User("눈꼬마","냉동빔","얼다바람","얼음엄니","눈보라");
var charizard = new User("리자몽","겁나는얼굴","화염방사","파괴광선","공중날기");
var gyarados = new User("갸라도스","깨물어부수기","하이드로펌프","겁나는얼굴","파괴광선");
var alakazam = new User("후딘","사이코키네시스","환상빔","숟가락휘기","염동력");
var koffing = new User("또가스","자폭","대폭발","맹독","모래뿌리기");
var rattata = new User("꼬렛","꼬리흔들기","몸통박치기","울음소리","전광석화");
var magnemite = new User("코일","10만볼트","전기자석파","울음소리","파괴광선");
var staraptor = new User("찌르호크","브레이브버드","날개치기","베어가르기","겁나는얼굴");
var blastoise = new User("거북왕","지진","거품광선","하이드로펌프","파괴광선");
var bidoof = new User("비버니","울음소리","꼬리흔들기","몸통박치기","전광석화");
var roselia = new User("로젤리아","달콤한향기","잎날가르기","솔라빔","모래뿌리기");
var chikorita = new User("치코리타","잎날가르기","솔라빔","메지컬리프","울음소리")
var zubat = new User("주뱃","초음파","흡혈","물기","이상한빛");
var geodude = new User("꼬마돌","몸통박치기","모래뿌리기","지진","돌떨구기");
var flareon = new User("부스터","울음소리","불꽃세례","애교부리기","불꽃엄니");
var bellsprout = new User("모다피","덩굴채찍","김밥말이","잎날가르기","용해액");
var machop = new User("알통몬","안다리걸기","겁나는얼굴","괴력","지구던지기");


export {eevee,pikachu,meowth,pidgeot,snorlax,gengar,squirtle,bulbasaur,snorunt,charizard,gyarados,alakazam,koffing,rattata,magnemite,staraptor,blastoise,bidoof,roselia,quickAttack,ironTail,thunderbolt,thunderWave,tackle,tailWhip,growl,fakeOut,payDay,slash,wingAttack,braveBird,scaryFace,yawn,earthquake,bodySlam,hyperBeam,confuseRay,curse,toxic,lick,bubbleBeam,waterGun,hydroPump,sandAttack,sweetScent,vineWhip,razorLeaf,solarBeam,iceBeam,icyWind,iceFang,blizzard,flamethrower,aerialAce,crunch,psychic,psybeam,kinesis,confusion,selfdestruct,explosion,chikorita,zubat,geodude,flareon,bellsprout,machop,magicalLeaf,supersonic,leechLife,bite,rockThrow,ember,charm,fireFang,$wrap,acid,lowKick,strength,seismicToss}
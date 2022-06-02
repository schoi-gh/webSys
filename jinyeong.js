export {Action, context, attack, stab, cold, feed, stun, AttackStrategy, StabStrategy, ColdStrategy, FeedStrategy, StunStrategy, i}

var i; // 디버프 난수 생성

var Action = (function() {   //초파리에게 영향을 줌
    function Action() {
        this.strategy = null;
    }
    Action.prototype.setAction = function(strategy) {
        this.strategy = strategy;
    };
    Action.prototype.execute = function() {
        this.strategy.execute();
    };
    return Action;
})();
  
var AttackStrategy = (function() {
    function AttackStrategy() {}
    AttackStrategy.prototype.execute = function() {
        console.log('초파리를 물리공격!'); // 각 개체마다 난수 데미지 계산
    };
    return AttackStrategy;
})();

var StabStrategy = (function() {
    function StabStrategy() {}
    StabStrategy.prototype.execute = function() {
        console.log('초파리를 찌르기!');
        console.log("여기부터 넘겨줄 코드를 짜면 됨");
        // ex = 초파리에게 1~5 데미지와 방어력을 1~3 감소시킴
    };
    return StabStrategy;
})();

var ColdStrategy = (function() {
    function ColdStrategy() {}
    ColdStrategy.prototype.execute = function() {
        console.log('초파리에게 냉동빔!');
        i = Math.floor(Math.random() * 5) + 1;
        console.log("초파리의 방어력이 %d 만큼 낮아졌다!", i);
        // ex = 초파리의 방어력을 1~3 감소시킴 (데미지 없음)
    };
    return ColdStrategy;
})();

var FeedStrategy = (function() {
    function FeedStrategy() {}
    FeedStrategy.prototype.execute = function() {
        console.log('초파리에게 먹이주기!');
        console.log("여기부터 넘겨줄 코드를 짜면 됨");
        // ex = 초파리의 체력을 회복시킴 (데미지 없음)
    };
    return FeedStrategy;
})();

var StunStrategy = (function() {
    function StunStrategy() {}
    StunStrategy.prototype.execute = function() {
        console.log('초파리에게 이상한 빛!');
        console.log("여기부터 넘겨줄 코드를 짜면 됨");
        // ex = 다음 턴 초파리가 입는 피해를 추가시킴 (데미지 없음)
    };
    return StunStrategy;
})();
  
var context = new Action();
var attack = new AttackStrategy();
var stab = new StabStrategy();
var cold = new ColdStrategy();
var feed = new FeedStrategy();
var stun = new StunStrategy();

context.setAction(cold);
context.execute();
console.log(i)
context.setAction(cold); // 전략을 바꿈
context.execute(); // 어떤 전략이든 설정된 것을 실행
console.log(i)
// 초파리에게 디버프!

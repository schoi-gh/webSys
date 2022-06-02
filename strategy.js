var Action = (function() { //초파리에게 공격, 디버프 등의 영향을 주는 Shake
    function Action() {
        this.action = null;
    }
    Action.prototype.setAction = function(action) { //초파리에게 영향을 줄 내용을 최신화
        this.action = action;
    };
    Action.prototype.execute = function() { //선택된 내용을 실행
        this.action.execute();
    };
    return Action;
})();

var AttackStrategy = (function() {
    function AttackStrategy() {}
    AttackStrategy.prototype.execute = function() {
        console.log('초파리를 물리공격!');
        console.log("여기부터 넘겨줄 코드를 짜면 됨");

        // ex = 초파리에게 1~5 데미지를 줌
    };
    return AttackStrategy;
})();
var DebuffStrategy = (function() {
    function DebuffStrategy() {}
    DebuffStrategy.prototype.execute = function() {
        console.log('초파리에게 디버프!');
        console.log("여기부터 넘겨줄 코드를 짜면 됨");

        // ex = 초파리의 방어력을 1~3 감소시킴
    };
    return DebuffStrategy;
})();

var context = new Action(); //초파리에게
var attak = new AttackStrategy();
var debuff = new DebuffStrategy();
context.setAction(attak);
context.execute();
context.setAction(debuff); // 전략을 바꿈
context.execute(); // 어떤 전략이든 설정된 것을 실행
// 초파리에게 디버프!

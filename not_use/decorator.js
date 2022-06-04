import {Subject, Observer, Japanese, subject, observer1, observer2, jap1} from './observer.js'

let state = []

var Car = function() {
    console.log('Assemble: build frame, add core parts'); // ~~
}

// 데코레이터는 Car의 인터페이스를 준수하기 위해 이러한 기능을 구현해야 합니다.
/*
Car.prototype.showName = function() {
    console.log('파리 목록'); // 파리 목록
}
 */

Car.prototype.showState = function() { // 현재~ 파리 상태~
    console.log('현재 파리 스탯');
}


// Car 에 기능을 추가하려면 Car(또는 CarDecorator)를 전달해야 합니다.
var CarDecorator = function(car) {
    this.car = car;
}

// CarDecorator는 동일한 인터페이스를 구현하고 있습니다
/*
CarDecorator.prototype.showName = function() {
    this.car.showName();
}
 */
CarDecorator.prototype.showState = function() {
    this.car.showState();
}



var nameDecorator = function(car) {
    // 자바스크립트에서 부모 클래스의 생성자를 호출하는 방식
    CarDecorator.call(this, car);
    console.log("이름 추가")
}
nameDecorator.prototype = new CarDecorator();
nameDecorator.prototype.showState = function() {
    // 다음 중 하나를 수행할 수 있습니다
    this.car.showState();
    // 또는 부모의 드라이브 함수를 호출할 수 있습니다.
    // CarDecorator.prototype.drive.call(this);
    let i;
    for (i = 0; i < subject.observers.length; i++) {
        // console.log(subject.observers[i].name)
        state.push([subject.observers[i].name])
    }
}



var hpDecorator = function(car) {
    CarDecorator.call(this, car);
    console.log('HP 추가');
}
hpDecorator.prototype = new CarDecorator();
hpDecorator.prototype.showState = function() {
    this.car.showState();
    let i;
    for (i = 0; i < subject.observers.length; i++) {
        //console.log(subject.observers[i].name + " hp : " + subject.observers[i].hp)
        state[i].push(subject.observers[i].hp)
    }}



var defDecorator = function(car) {
    CarDecorator.call(this, car);
    console.log('def 추가');
}
defDecorator.prototype = new CarDecorator();
defDecorator.prototype.showState = function() {
    this.car.showState();
    let i;
    for (i = 0; i < subject.observers.length; i++) {
        //console.log(subject.observers[i].name + " hp : " + subject.observers[i].hp + ",  방어력 : " + subject.observers[i].def)
        state[i].push(subject.observers[i].def)
    }
    for (i = 0; i < state.length; i++) {
        console.log("이름 : %s,  hp : %d,  def : %d", state[i][0], state[i][1], state[i][2])
    }
    console.table(state) // 테이블 형태로 출력하려면 value 변경해야함
    // 참조 : https://developer.mozilla.org/en-US/docs/Web/API/console/table
}



var sex = new Car();                    // log "Assemble: build frame, add core parts"

// now some power locks and A/C
sex = new nameDecorator(sex);     // log "조립: 잠금장치 전원 추가"
sex = new hpDecorator(sex);
sex = new defDecorator(sex);             // log "조립: 에어컨 장치 추가"

// let's start this bad boy up and take a drive!
//sex.showName(); // log 'The engine starts with roar!' and '찬바람이 불기 시작합니다. '
sex.showState(); // log 'Away we go!' and '문이 자동으로 잠깁니다'

// 출처 : https://www.joezimjs.com/javascript/javascript-design-patterns-decorator/

/*
showName == start
showState == drive
nameDecorator
hpDecorator
defDecorator
 */


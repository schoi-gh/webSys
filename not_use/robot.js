import java.util.ArrayList;
import java.util.List;
import java.util.Timer;
import java.util.TimerTask;

public class Sample {
    public static void 단발총을쏘다() {
        System.out.println("---------------------");
        Robot mazinger = new Robot();
        mazinger.setWeapon(new SingleShotCommand(new SingleShot()));
        mazinger.useWeapon();
    }

    public static void 바주카포를발사하다() {
        System.out.println("---------------------");
        Robot mazinger = new Robot();
        mazinger.setWeapon(new BazookaCommand(new Bazooka()));
        mazinger.useWeapon();
    }

    public static void 검으로베다() {
        System.out.println("---------------------");
        Robot mazinger = new Robot();
        mazinger.setWeapon(new SwordCommand(new Sword()));
        mazinger.useWeapon();
    }

    public static void K1음성기능사용하다() {
        System.out.println("---------------------");
        Robot mazinger = new Robot();
        mazinger.setVoice(new K1Voice());
        mazinger.speak();
        mazinger.recognize();
    }

    public static void K2음성기능사용하다() {
        System.out.println("---------------------");
        Robot mazinger = new Robot();
        mazinger.setVoice(new K2Voice());
        mazinger.recognize();
    }

    public static void 접사3D촬영하다() {
        System.out.println("---------------------");
        Robot mazinger = new Robot();
        mazinger.setCamera(new CameraCloseUp(new Camera3D()));
        mazinger.shot();
    }

    public static void 파노라마접사3D촬영하다() {
        System.out.println("---------------------");
        Robot mazinger = new Robot();
        mazinger.setCamera(new CameraCloseUp(new CameraPanorama(new Camera3D())));
        mazinger.shot();
    }

    public static void W1Robot을테스트하다() {
        System.out.println("---------------------");
        WRobot w1 = new W1Robot();
        w1.useWeapon();
        w1.recognize();
        w1.shot();
    }

    public static void W2Robot을테스트하다() {
        System.out.println("---------------------");
        WRobot w2 = new W2Robot();
        w2.useWeapon();
        w2.recognize();
        w2.speak();
        w2.shot();
    }

    public static void 배터리부족알림을받다() {
        System.out.println("---------------------");

        WRobot w1 = new W1Robot();
        new MobileNotification(w1);

        TimerTask task = new TimerTask() {
        @Override
            public void run() {
                w1.warnLowBattery();
            }
        };

        new Timer().schedule(task, 7000);
    }

    public static void main(String[] args) {
    단발총을쏘다();
    바주카포를발사하다();
    검으로베다();

    K1음성기능사용하다();
    K2음성기능사용하다();

    접사3D촬영하다();
    파노라마접사3D촬영하다();

    W1Robot을테스트하다();
    W2Robot을테스트하다();

    배터리부족알림을받다();
}
}

// 로봇 시스템

// 얼굴, 팔, 다리, 몸통, 무기

abstract class RobotDevice {}
abstract class Face extends RobotDevice {}
abstract class Arm extends RobotDevice {}
abstract class Leg extends RobotDevice {}
abstract class Body extends RobotDevice {}

abstract class Weapon {}

class SingleShot extends Weapon {
    public void shoot() {
        System.out.println("단발 총을 쏘다.");
    }
}

class Bazooka extends Weapon {
    public void fire() {
        System.out.println("바주카포를 발사하다.");
    }
}

class Sword extends Weapon {
    public void cut() {
        System.out.println("검으로 베다.");
    }
}

class Robot extends RobotDevice {
    private Face face;
    private Arm arm;
    private Leg let;
    private Body body;

    private WeaponCommand weapon;

    public void setWeapon(WeaponCommand weapon) {
    this.weapon = weapon;
}

public void useWeapon() {
    weapon.use();
}

private Voice voice;

public void setVoice(Voice voice) {
    this.voice = voice;
}

public void recognize() {
    voice.recognize();
}

public void speak() {
    voice.speak();
}

private Camera camera;

public void setCamera(Camera camera) {
    this.camera = camera;
}

public void shot() {
    camera.shot();
}
}

interface WeaponCommand {
    void use();
}

class SingleShotCommand implements WeaponCommand {
    private SingleShot singleShot;

    public SingleShotCommand(SingleShot singleShot) {
    this.singleShot = singleShot;
}

public void use() {
    singleShot.shoot();
}
}

class BazookaCommand implements WeaponCommand {
    private Bazooka bazooka;

    public BazookaCommand(Bazooka bazooka) {
    this.bazooka = bazooka;
}

public void use() {
    bazooka.fire();
}
}

class SwordCommand implements WeaponCommand {
    private Sword sword;

    public SwordCommand(Sword sword) {
    this.sword = sword;
}

public void use() {
    sword.cut();
}
}

abstract class Voice {
    protected abstract void record();
    protected abstract void analyze();
    protected abstract void process();

    public void recognize() {
        record();
        analyze();
        process();
    }

    public void speak() {
        System.out.println("음성을 말하다.");
    }
}

class K1Voice extends Voice {
    protected void record() {
        System.out.println("K1 음성을 녹음하다.");
    }

    protected void analyze() {
        System.out.println("K1 음성을 분석하다.");
    }

    protected void process() {
        System.out.println("K1 명령을 처리하다.");
    }
}

class K2Voice extends Voice {
    protected void record() {
        System.out.println("K2 음성을 녹음하다.");
    }

    protected void analyze() {
        System.out.println("K2 음성을 분석하다.");
    }

    protected void process() {
        System.out.println("K2 명령을 처리하다.");
    }
}

abstract class Camera {
    protected Camera camera;

    public Camera() {}

    public Camera(Camera camera) {
    this.camera = camera;
}

abstract void shot();
}

// 3D 촬영
class Camera3D extends Camera {
    public Camera3D() {}

    public Camera3D(Camera camera) {
    super(camera);
}

public void shot() {
    if (camera != null) camera.shot();
    shoot3D();
}

public void shoot3D() {
    System.out.println("3D Shooting.");
}
}

// 접사 촬영
class CameraCloseUp extends Camera {
    public CameraCloseUp() {}

    public CameraCloseUp(Camera camera) {
    super(camera);
}

public void shot() {
    if (camera != null) camera.shot();
    closeUp();
}

public void closeUp() {
    System.out.println("Close-up shot.");
}
}

// 파노라마 촬영
class CameraPanorama extends Camera {
    public CameraPanorama() {}

    public CameraPanorama(Camera camera) {
    super(camera);
}

public void shot() {
    if (camera != null) camera.shot();
    shootPanorama();
}

private void shootPanorama() {
    System.out.println("Panorama shooting.");
}
}

interface RobotComponentFactory {
    void mountWeapon();
    void mountVoice();
    void mountCamera();
}

abstract class WRobot extends RobotDevice implements RobotComponentFactory {
    private Face face;
    private Arm arm;
    private Leg leg;
    private Body body;

    protected WeaponCommand weapon;
    protected Voice voice;
    protected Camera camera;

    public WRobot() {
        mountWeapon();
        mountVoice();
        mountCamera();
    }

    public void useWeapon() {
        weapon.use();
    }

    public void recognize() {
        voice.recognize();
    }

    public void speak() {
        voice.speak();
    }

    public void shot() {
        camera.shot();
    }

    List<RobotObserver> observers = new ArrayList<>();

    public void attach(RobotObserver observer) {
    observers.add(observer);
}

public void detach(RobotObserver observer) {
    observers.remove(observer);
}

protected void notifyObservers() {
    for (RobotObserver observer : observers)
    observer.update();
}

public void warnLowBattery() {
    notifyObservers();
}
}

class W1Robot extends WRobot {
    public void mountWeapon() {
        weapon = new SingleShotCommand(new SingleShot());
    }

    public void mountVoice() {
        voice = new K1Voice();
    }

    public void mountCamera() {
        camera = new CameraCloseUp(new CameraPanorama(new Camera3D()));
    }
}

class W2Robot extends WRobot {
    public void mountWeapon() {
        weapon = new BazookaCommand(new Bazooka());
    }

    public void mountVoice() {
        voice = new K2Voice();
    }

    public void mountCamera() {
        camera = new CameraCloseUp(new CameraPanorama());
    }
}

interface RobotObserver {
    void update();
}

class MobileNotification implements RobotObserver {
    public MobileNotification(WRobot robot) {
    robot.attach(this);
}

public void update() {
    System.out.println("모바일로 로봇 배터리 부족을 알리다.");
}
}








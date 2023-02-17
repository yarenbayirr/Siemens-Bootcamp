//**BRIDGE DESIGN PATTERN **
//NO IS-A
//YES HAS-A

//ortak olmayacağını düşündüğümüz özellikler için ayrı interfaceler
interface IRightBehavior{
    Right():void
}
interface ILeftBehavior{
    Left():void
}

//hepsinde ortak olacağını düşündüğümüz baseclass
abstract class BaseVehicle{
    public _rightBehaviour: IRightBehavior;
    public _leftBehaviour: ILeftBehavior;
    constructor(rightBehaviour: IRightBehavior, leftBehaviour: ILeftBehavior){
            this._rightBehaviour = rightBehaviour;
            this._leftBehaviour = leftBehaviour;
    }
    SetRightOrLeftBehaviour(rightBehaviour: IRightBehavior, leftBehaviour: ILeftBehavior){
        this._rightBehaviour = rightBehaviour;
        this._leftBehaviour = leftBehaviour;
    }
    Forward(): void {
        console.log("ileri");
    }
    Backward():void{
        console.log("geri");
    }
    Right(): void {
        this._rightBehaviour.Right();
    }
    Left(): void {
        this._leftBehaviour.Left();
    }
}


class RightBehaviorType1 implements IRightBehavior{
    Right(): void {
       console.log("right type 1");
    }

}
class RightBehaviorType2 implements IRightBehavior{
    Right(): void {
       console.log("right type 2");
    }

}
class RightBehaviorType3 implements IRightBehavior{
    Right(): void {
       console.log("right type 3");
    }

}
class LeftBehaviorType1 implements ILeftBehavior{
    Left(): void {
       console.log("left type 1");
    }

}
class LeftBehaviorType2 implements ILeftBehavior{
    Left(): void {
       console.log("left type 2");
    }

}
class LeftBehaviorType3 implements ILeftBehavior{
    Left(): void {
       console.log("left type 3");
    }

}



class Car1 extends BaseVehicle{

}
class Car2 extends BaseVehicle{
    
}
class Car3 extends BaseVehicle{
    
}

var c1= new Car1(new RightBehaviorType2(), new LeftBehaviorType3());
c1.Backward();
c1.Forward();
c1.Right();
c1.Left();
c1.SetRightOrLeftBehaviour(new RightBehaviorType1(), new LeftBehaviorType1());
c1.Right();
c1.Left();
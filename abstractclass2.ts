abstract class BaseVehicle{
    id:number;
    type:string;

    WriteToLog(log: string): void{
        console.log(log);
    }
    abstract Method1(a:number): void;
}

class Car extends BaseVehicle{
    Method1(a: number): void {
        throw new Error("Method not implemented.");
    }

}

class Train extends BaseVehicle{
    Method1(a: number): void {
        throw new Error("Method not implemented.");
    }
    
}

var car1 = new Car();
car1.id = 1;
car1.type = "type1";
var train1 = new Train();
train1.id= 20;
train1.type = "type20"
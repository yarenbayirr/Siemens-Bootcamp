//** bridge design pattern **

abstract class Vehicle{
    ileri(): void{}
    abstract sağ(): void
    abstract sol(): void
}
class Car extends Vehicle{
    sağ(): void {
        console.log("sağa gider")
    }
    sol(): void {
        console.log("sola gider")
    }

}
class Train extends Vehicle{
    sağ(): void {
        throw new Error("Method not implemented.");
    }
    sol(): void {
        throw new Error("Method not implemented.");
    }

}
//dependency Inversion iki class birbirini tanımayacak aralarında interface olacak
//Inversion of Control => 

class B{
    method1(): number {return 10;};
    id: number;
    method2(){};
    method3(){};
    method4(){};
    method5(){};
}

class Btype2 implements IB{
    method1(): number {
        return 20;
    }
    method2() {
        throw new Error("Method not implemented.");
    }

}

interface IB{
 method1(): number;
 method2();
}
class A{
    b: IB;
    constructor(b: IB){
        this.b = b;
    }
    method1(): number{
        return this.b.method1() + 10;
    }
}

var a: A = new A(new Btype2());

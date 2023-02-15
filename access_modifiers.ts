//public private protected

//bir değişkenin sadece class içerisinde erişilmesini istiyorsak: private
class A{
private name: string;
public method1():void{ //default public, yazmasak da olur

}
protected age: number; //sadece kalıtım verilen sınıflarda erişilebilir
private _count: number; //1-100 arasında olacak. Belirli bir kıstas var. Erişimi kapattım get;set; yapacağız.
private _count2: number;
//1.yol
public SetCount(number:number){
    if(number>1 && number < 100){
        this._count = number;
    }
    else{
        throw new Error("değer 1 ile 100 arasında olmalıdır")
    }
}
public GetCount(){
    return this._count;
}

//2.yol
public get count2(){ //get ve set mutlaka aynı isim olmalı 
    return this._count2;
}
public set count2(a: number){
    if(a>50 && a<250){
        this._count2 = a;
    }
    else {
        throw new Error("değer 50 ile 250 arasında olmalıdır");
    }
}
}

var a1 = new A();
//1.yol
a1.SetCount(50);
a1.GetCount();
//2.yol
var a2 = new A();
a2.count2 = 50;
a1.method1();
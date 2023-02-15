abstract class BasePerson{
    //içinde bir tane bile prop başında abstract varsa class abstract olmak zorunda
    //new anahtar sözcüğü kullanamayız
    id: number;
    name: string;
    abstract show();
    abstract details(a: number)
}

//interfacelerde property koyduğumuzda bu propertyler implemente edildiğinde de gelmeli
//abstractta böyle bir zorunluluk yok, yalnızca başında abstract keywordu olan proplar implemente edilmek zorunda 

class Person2 extends BasePerson{
    show() {
        throw new Error("Method not implemented.");
    }
    details(a: number) {
        throw new Error("Method not implemented.");
    }

}

var p = new Person2();
p.id = 1;
p.name = "ahmet";
p.show();

//abstract yapılar ortak metotlar ve özellikler olduğunda kullanılır
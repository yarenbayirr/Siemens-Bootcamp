class MyPerson {
    id: number;
    name: string;
    protected age: number; //midde age e ulaşamadık
    salary: number;
    constructor(name:string){ //constructorların miras yolu ile gelmez ama çağırmak zorundayız bunu da super keywordu ile yaparız
        this.name = name;
    }
    show(): void {
        console.log(`${this.id}-${this.name}`)
    }
}

class JuniorDevPerson extends MyPerson{
constructor(id:number, name:string, age:number){
    super(name); //super ile çağırdık, yoksa patlıyor
    this.id = id;
    this.age = age;

}
}
class MidDevPerson extends MyPerson{

}
class SeniorDevPerson extends MyPerson{

}
var mid = new MidDevPerson("ahmet");



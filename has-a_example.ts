abstract class BasePerson{
    public _native : INative
    public _work : IWork
    constructor(native: INative, work: IWork){
        this._native = native;
        this._work = work;
    }
    Move(): void {
        console.log("I can move");
    }
    Hear(): void{
        console.log("I can hear");
    }
    Smell(): void{
        console.log("I can smell");
    }
    Touch(): void{
        console.log("I can touch");
    }
    Talk(): void{
        this._native.TalkInThatLanguage();
    }
    Work(): void{
        this._work.WorkAs();
    }
}

interface INative{
    TalkInThatLanguage():void
}
interface IWork{
    WorkAs():void
}
class EnglishNative implements INative{
    TalkInThatLanguage(): void {
        console.log("I can talk in English")
    }
}
class TurkishNative implements INative{
    TalkInThatLanguage(): void {
        console.log("I can talk in Turkish")
    }
}
class SoftwareDeveloper implements IWork{
    WorkAs(): void {
        console.log("I work as a Software Developer")
    }

}
class Architect implements IWork{
    WorkAs(): void {
        console.log("I work as an Architect")
    }

}

class Person1 extends BasePerson{

}

let p1 = new Person1(new TurkishNative(), new SoftwareDeveloper());
p1.Work();
p1.Talk();
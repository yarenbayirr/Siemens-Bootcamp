abstract class Person{
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
    abstract Talk() : void;
    abstract Work(): void;
}

class EnglishandSoftwareDeveloper extends Person{  //başka bir classtan kalıtım alır
    Talk(): void {
        console.log("I can talk in English");
    }
    Work(): void {
        console.log("I work as a Software Developer");
    }
}
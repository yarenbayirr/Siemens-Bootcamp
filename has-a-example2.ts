interface IMove {
     Move():string;
}
interface IFeed{
     Feed():string;
}

abstract class BaseAnimal{  //başka bir classı içerir
    _move : IMove;
    _feed : IFeed;
    constructor(move: IMove, feed : IFeed){
        this._move = move;
        this._feed = feed;
    }
    id:number;
    type: string;
    age: number;
    Reproduction(): string{
      return "I am reproduced!";
    }
    Rest(): string{
       return "I rest!";
    }
    Respiration(): string{
        return "I breathe!";
    }
    Growth(): string{
        return "I grow!";
    }
    abstract Voice():string;
    abstract Introduce():void;
}

class Run implements IMove{
    Move() : string{
        return "I can run!";
    }
}

class Swim implements IMove{
    Move() : string {
        return "I can swim!";
    }
}

class Jump implements IMove{
    Move(): string {
         return "I can jump!";
    }
}

class Fly implements IMove{
    Move(): string {
        return "I can fly!";
    }
}

class Roughages implements IFeed{
    Feed(): string {
        return "I eat plants!";
    }
}

class Concentrates implements IFeed{
    Feed(): string {
        return "I eat meat!";
    }
}

class Mixed  implements IFeed{
    Feed() :string{
        return "I eat everything!";
    }
}

class Dog extends BaseAnimal{
    Introduce(): void {
        console.log(`Hello! I am a dog. I am ${this.age} years old. ${this._move.Move()} and ${this._feed.Feed()}. Also, I ${this.Voice()}.`);
    }
    Voice():string {
        return "bark";
    }
}

var myDog = new Dog(new Run(), new Mixed());
myDog.age = 5;
myDog.Introduce();

class BaseAnimal {
    constructor(move, feed) {
        this._move = move;
        this._feed = feed;
    }
    Reproduction() {
        return "I am reproduced!";
    }
    Rest() {
        return "I rest!";
    }
    Respiration() {
        return "I breathe!";
    }
    Growth() {
        return "I grow!";
    }
}
class Run {
    Move() {
        return "I can run!";
    }
}
class Swim {
    Move() {
        return "I can swim!";
    }
}
class Jump {
    Move() {
        return "I can jump!";
    }
}
class Fly {
    Move() {
        return "I can fly!";
    }
}
class Roughages {
    Feed() {
        return "I eat plants!";
    }
}
class Concentrates {
    Feed() {
        return "I eat meat!";
    }
}
class Mixed {
    Feed() {
        return "I eat everything!";
    }
}
class Dog extends BaseAnimal {
    Introduce() {
        console.log(`Hello! I am a dog. I am ${this.age} years old. ${this._move.Move()} and ${this._feed.Feed()}. Also, I ${this.Voice()}.`);
    }
    Voice() {
        return "bark";
    }
}
var myDog = new Dog(new Run(), new Mixed());
myDog.age = 5;
myDog.Introduce();

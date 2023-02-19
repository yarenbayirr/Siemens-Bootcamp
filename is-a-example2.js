class Animal {
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
class Dog extends Animal {
    Voice() {
        return "bark";
    }
    Move() {
        return "I can run!";
    }
    Feed() {
        return "I eat everything!";
    }
    Introduce() {
        console.log(`Hello. I am a dog. I am ${this.age} years old. ${this.Move()} and ${this.Feed()}. Also, I ${this.Voice()}`);
    }
}
let dog1 = new Dog();
dog1.age = 5;
dog1.Introduce();

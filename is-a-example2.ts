abstract class Animal{
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
    abstract Move():string;
    abstract Feed(): string;
}

class Dog extends Animal{  //başka bir sınıftan kalıtım alıyor
    Voice(): string {
        return "bark";
    }
    Move(): string {
        return "I can run!";
    }
    Feed(): string {
        return "I eat everything!";
    }
    Introduce(): void {
        console.log(`Hello. I am a dog. I am ${this.age} years old. ${this.Move()} and ${this.Feed()}. Also, I ${this.Voice()}.`)
    }
}

let dog1 = new Dog();
dog1.age = 5;
dog1.Introduce();


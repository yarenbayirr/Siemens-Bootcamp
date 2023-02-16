class Person{
    id:number;
    name:string;
    salary: number
    childCount: number;
    calculateSalary(){
        return this.salary + (this.childCount*1000);
    }
}
class JuniorDevPerson extends Person {
    calculateSalary(): number {
        var baseSalary = super.calculateSalary();
        return baseSalary * 2; 
    }
}
class MidDevPerson extends Person {
    age: number;
    calculateSalary(): number {
        var baseSalary = super.calculateSalary();
        return baseSalary * 4; 
    }
}
class SeniorDevPerson extends Person {
    calculateSalary(): number {
        var baseSalary = super.calculateSalary();
        return baseSalary * 8; 
    }
}

var junior = new JuniorDevPerson();
junior.id = 1;
junior.name = "ahmet";
junior.salary = 1000;
junior.childCount = 3;
console.log(`Junior için hesaplanan maaş: ${junior.calculateSalary()}`)

var mid = new MidDevPerson();
mid.id = 2;
mid.name = "mehmet";
mid.salary = 1000;
mid.childCount = 3;
console.log(`Mid içim hesaplanan maaş: ${mid.calculateSalary()}`)

var senior = new SeniorDevPerson();
senior.id = 3;
senior.name = "atilla";
senior.salary = 1000;
senior.childCount = 3;
console.log(`Mid içim hesaplanan maaş: ${senior.calculateSalary()}`)

let basePerson: Person = junior;
console.log(`base person maaş hesaplama ${basePerson.calculateSalary()}`);
basePerson = mid;
console.log(`base person maaş hesaplama ${basePerson.calculateSalary()} - age : ${(basePerson as MidDevPerson).age}`);
basePerson = senior;
console.log(`base person maaş hesaplama ${basePerson.calculateSalary()}`);

var person5: Person = new Person();
person5.id = 5;
person5.name = "mehmet";
person5.childCount = 2;
person5.salary= 2000;
//doğru bir yaklaşım değil
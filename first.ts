let price:number = 20;
let price2:number = 20.44;
let name2:string="ahmet";
let isShow:boolean=true;
let products:null = null;
let product:undefined = undefined;
let price3:any=24; //tipi çalışırken belli olacak (runtime)
price3.toFixed(); //çalışırken sayı atanırsa patlamaz. aksi halde hata fırlatır.Direkt yazabiliriz.
let price4:unknown=30; //tipi belli değil
// price4.toFixed // hata verir şu an
(price4 as number).toFixed(); //hatayı bu şekilde kaldırabiliriz. Tipini belli etmek zorundayız. Biraz daha tip güvenli
let numbers: number[] = [1,2,3,4,5];
let names: string[] = ["ahmet", "mehmet", "hasan"];
let productList: Array<string> = ["kalem", "defter", "silgi"]
let productList2: Array<string | number> = ["kalem", "defter", "silgi", 23]
let value1: string | boolean = true;
let tuple:[string, number] = ["a", 3];

function calculate(a:number, b:number): [number,number,number]{ //tuple
    return [a+b, a*b, a-b]
}
console.log(`toplam: ${calculate(3,3)[0]}`) //3 adet dönüş 
console.log(`çarpım: ${calculate(3,3)[1]}`)
console.log(`çıkarma: ${calculate(3,3)[2]}`)

for (let index = 0; index < names.length; index++) {
    const element = names[index];
    console.log(element);
    
}
//class tanımlaması
class Student{
    name:string;
    surName: string;
    age: number;
    constructor(name:string, surName:string, age:number){
        this.name = name;
        this.surName = surName;
        this.age = age;
    }
    show(){
        console.log(`${this.name} ${this.surName} ${this.age}`);
    }
}
var student1 = new Student("ahmet", "yıldız", 25);
student1.show();

//enum
enum Color {
    Red, Green, Blue
}
var color: Color = Color.Red;
console.log(color); // index nosu geliyor
console.log(Color[color]); // renk string olarak geliyor
function Add(a:number, b:number) : number{  //:void default değeri dönüş tipi
    return a+b;
}

//generic function
function GenericAdd<T1, T2, T3>(a: T1, b: T2): T3 {
    let sum = (a as number) + (b as number)
    return sum as T3;
}
console.log(`Generic Add: ${GenericAdd<number, number, number>(2,5)}`);

interface IPerson {
    name: string;
    age: number;
    calculate()
    show(id:string, name:string): number;
}

let person: IPerson = {name:"ahmet", age:23, calculate:function(){}, show: function(id, name){return 5;}};

class Person implements IPerson{
    name: string;
    age: number;
    birthDate: Date;
    calculate(): void{
        throw new Error("Method not implemented")
    }
    show(id: string, name: string): number{
        throw new Error("Method not implemented");
    }
}

var p1 = new Person();
p1.age = 20;
p1.name = "ahmet";
p1.birthDate = new Date();

let person2: IPerson = p1;
(person2 as Person).birthDate;

interface IProduct{
    id: number;
    name: string;
    price: number;
}

var product5:IProduct = {id:1, name:"kalem", price: 3000}
// var product5:IProduct = {id:1, name:"kalem", priceeee: 3000} //kalıtım aldığı için propların ismi aynı olmaı, hata verir


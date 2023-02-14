class Product{
    #stock = 500;
    constructor(){
        var name = "kalem1";
        var price;
    }
    setStock(stock){
        if(stock>1000){
            this.#stock = stock
        }
        else{
            throw "stock değeri 1000 den fazla olmalıdır"
        }
    }
    getStock() {return this.#stock}
    setPrice(price){
        if(price>1 && price <100){
            this.price = price;
        }
        else{
        throw "price değeri 1 ile 100 arasında olmalıdır"
        }
    }
   
    getPrice(){
        return this.price;
    }
    //public method
    publicCalculate(){
       return this.#Calculate() * 1.18;
    }
    //private method
    #Calculate(){
        return 10;
    }
    
    
}
// var person = {id:2, name: "kalem2", func: (a,b) => a+b};
// person.id=10; //mutable
// let newPerson = person.copy({id:10}) //immutable


class Product2{
    constructor(price){
        if(price > 1 && price < 100){
            this.price = price;
        }
        else{

        }
    }
}

// class Person{
//     static age = 25; //scope u çok geniş, mümkün olduğunca kullanmayalım
//     name = "ahmet";
// }
// console.log(Person.age);
// console.log(Person.name);



//access modifiers
//public, private, protected
var product = new Product();
// console.log(product.name) //undefined verdi
// product.setPrice(10);
// console.log(product.getPrice());
// console.log(product.publicCalculate())
product.setStock(2000);
console.log(product.getStock());

class Person {
    static ageConst = 60;
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    calculate(ageConst2){
        console.log(`${this.name}${ageConst2-this.age}`)
    }
}
var p1 = new Person("ahmet", 20);
p1.calculate();
var p2 = new Person("mehmet", 30);

console.log(`${p1.name} ${Person.ageConst - p1.age}`)
console.log(`${p2.name} ${Person.ageConst - p2.age}`)
Person.ageConst = 100; //değişti. Tehlikeli
console.log(`${p1.name} ${Person.ageConst - p1.age}`)
console.log(`${p2.name} ${Person.ageConst - p2.age}`)

enum Category{
    PersonalCare,
    Food
}

interface ICalculatePrice{
    CalculatePrice(price: number) : number;
}

class CalculatePriceForPersonalCare implements ICalculatePrice {
    CalculatePrice(price: number): number {
       return price * 1.18;
    }

}

class CalculatePriceForFood implements ICalculatePrice{
    CalculatePrice(price: number): number {
        return price * 1.08;
    }

}

class CalculatePrice{
   Calculate(price:number, calculatePrice: ICalculatePrice){
      return calculatePrice.CalculatePrice(price);
   }
}


let externalPrice = 2000;
let externalCategory = Category.PersonalCare;
var calorieCalculate = new CalculatePrice();

class IPriceKeyValue{ 
    categoryType : Category;
    priceCalculate : ICalculatePrice;
}

let categoryArray: IPriceKeyValue[] = [];
categoryArray.push({categoryType: Category.Food, priceCalculate: new CalculatePriceForFood}); //version es6
categoryArray.push({categoryType: Category.PersonalCare, priceCalculate: new CalculatePriceForPersonalCare});

let currentPrice = categoryArray.find(x=>x.categoryType == externalCategory);
console.log(currentPrice?.priceCalculate.CalculatePrice(externalPrice));

//bad
if (externalCategory == Category.PersonalCare) {
    console.log(`For personal care products, price is : ${calorieCalculate.Calculate(externalPrice, new CalculatePriceForPersonalCare)}`);
}
else{
    console.log(`For food category products, price is : ${calorieCalculate.Calculate(externalPrice, new CalculatePriceForFood)}`);
}




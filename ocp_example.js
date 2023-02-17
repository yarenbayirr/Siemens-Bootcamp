var Category;
(function (Category) {
    Category[Category["PersonalCare"] = 0] = "PersonalCare";
    Category[Category["Food"] = 1] = "Food";
})(Category || (Category = {}));
class CalculatePriceForPersonalCare {
    CalculatePrice(price) {
        return price * 1.18;
    }
}
class CalculatePriceForFood {
    CalculatePrice(price) {
        return price * 1.08;
    }
}
class CalculatePrice {
    Calculate(price, calculatePrice) {
        return calculatePrice.CalculatePrice(price);
    }
}
let externalPrice = 2000;
let externalCategory = Category.PersonalCare;
var calorieCalculate = new CalculatePrice();
class IPriceKeyValue {
}
let categoryArray = [];
categoryArray.push({ categoryType: Category.Food, priceCalculate: new CalculatePriceForFood });
categoryArray.push({ categoryType: Category.PersonalCare, priceCalculate: new CalculatePriceForPersonalCare });
let currentPrice = categoryArray.find(x => x.categoryType == externalCategory);
console.log(currentPrice === null || currentPrice === void 0 ? void 0 : currentPrice.priceCalculate.CalculatePrice(externalPrice));
//bad
if (externalCategory == Category.PersonalCare) {
    console.log(`For personal care products, price is : ${calorieCalculate.Calculate(externalPrice, new CalculatePriceForPersonalCare)}`);
}
else {
    console.log(`For food category products, price is : ${calorieCalculate.Calculate(externalPrice, new CalculatePriceForFood)}`);
}

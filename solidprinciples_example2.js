// Menu, Extra ve Order sınıflarımız sadece property tutmaktadır.Gerekli işlemler için methodlar barındıran sınıflar oluşturulmuştur. Örneğin repository sınıfında daha çok database i ilgilendiren işlemler tutulmaktadır. (Single-responsibility)
//Ara yüzlere ortak olabileceği düşünülen methodlar tanımlanmıştır. Örneğin database'i ilgilendirenler ve hesaplamaların olduğu işlemlerin her biri için ayrı interfaceler oluşturulmuştur. (IMenuCalculate, IOrderCalculator)
class BaseProduct {
}
class Menu extends BaseProduct {
    ShowMySelection() {
        console.log(`Your selection is ${this.name}`);
    }
}
class Extra extends BaseProduct {
}
var MenuSize;
(function (MenuSize) {
    MenuSize[MenuSize["Small"] = 0] = "Small";
    MenuSize[MenuSize["Medium"] = 1] = "Medium";
    MenuSize[MenuSize["Big"] = 2] = "Big";
})(MenuSize || (MenuSize = {}));
class SmallSizeMenuCalculate {
    CalculateMenu(price) {
        return price;
    }
}
class MediumSizeMenuCalculte {
    CalculateMenu(price) {
        return price * 1.5;
    }
}
class BigSizeMenuCalculte {
    CalculateMenu(price) {
        return price * 2;
    }
}
var arrMenuTypes = [];
arrMenuTypes.push({ menuSize: MenuSize.Small, menuCalculate: new SmallSizeMenuCalculate });
arrMenuTypes.push({ menuSize: MenuSize.Medium, menuCalculate: new MediumSizeMenuCalculte });
arrMenuTypes.push({ menuSize: MenuSize.Big, menuCalculate: new BigSizeMenuCalculte });
var orders = [];
class Order {
    CalculateTotalMenuPrice() {
        let currentMenu = arrMenuTypes.find(x => x.menuSize == this.size);
        let totalMenuPrice = ((currentMenu === null || currentMenu === void 0 ? void 0 : currentMenu.menuCalculate.CalculateMenu(this.selectedMenu.price)) + this.selectedExtra.price) * this.quantity;
        return totalMenuPrice;
    }
}
class OrderDatabase1Repository {
    Save(order) {
        orders.push(order);
    }
    ShowDetails(order) {
        console.log(`Selected Menu:${order.selectedMenu.name}, Selected Extra:${order.selectedExtra.name}, Size: ${MenuSize[order.size]}, Quantity:${order.quantity}, Total:${order.CalculateTotalMenuPrice()} `);
    }
    Delete(id) {
        const deletedOrder = orders.findIndex(item => item.id == id);
        orders.splice(deletedOrder, 1);
    }
}
//methodları çalıştıracağım sınıfımla methodlarımın olduğı sınıf arasında interface bulunmaktadır. Böylelikle bağımlılığı azaltmış olduk. (Dependency Inversion Principle)
class OrderService {
    constructor(orderRepository) {
        this._orderRepository = orderRepository;
    }
    SaveOrder(order) {
        this._orderRepository.Save(order);
    }
    ShowOrderDetails(order) {
        this._orderRepository.ShowDetails(order);
    }
    DeleteOrder(id) {
        this._orderRepository.Delete(id);
    }
}
let myMenu = new Menu();
myMenu.id = 1;
myMenu.name = "Texas Smokehouse";
myMenu.price = 150;
let myExtra = new Extra();
myExtra.id = 1;
myExtra.name = "Ranch";
myExtra.price = 10;
let myOrder = new Order();
myOrder.id = 1;
myOrder.quantity = 1;
myOrder.selectedMenu = myMenu;
myOrder.selectedExtra = myExtra;
myOrder.size = MenuSize.Small;
var orderService = new OrderService(new OrderDatabase1Repository());
orderService.ShowOrderDetails(myOrder);

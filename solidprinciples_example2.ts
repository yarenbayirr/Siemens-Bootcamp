
// Menu, Extra ve Order sınıflarımız sadece property tutmaktadır.Gerekli işlemler için methodlar barındıran sınıflar oluşturulmuştur. Örneğin repository sınıfında daha çok database i ilgilendiren işlemler tutulmaktadır. (Single-responsibility)

//Ara yüzlere ortak olabileceği düşünülen methodlar tanımlanmıştır. Örneğin database'i ilgilendirenler ve hesaplamaların olduğu işlemlerin her biri için ayrı interfaceler oluşturulmuştur. (IMenuCalculate, IOrderCalculator)
class BaseProduct{
    id: number;
    name: string;
    price: number;
}
class Menu extends BaseProduct implements IMenuDatabase1Repository{ //örneğin sadece seçtiği menyü göstermek istiyorum. Yeni bir interface ile sınıfıma bu methodu ekleyebilirim. Liskov Substitution Prensibi ile tutarlıdır. 
    ShowMySelection() {
        console.log(`Your selection is ${this.name}`);
    }  
}
class Extra extends BaseProduct{
  
}
enum MenuSize{
    Small,
    Medium,
    Big
}
//Menü fiyatı enumdan gelen bilgiye göre şekillenecek. If-else bloğu yazmamak için "size" bilgisine göre hesaplama yapan sınıflar oluşturduk. Bu sınıflarda ortak method olduğu için implementasyon yapılacak ortak bir interface oluşturduk. Böylece enuma XL gibi bir size gelirse var olan kodlara dokunulmayacak. (Open-close principle)
interface IMenuCalculate{  //özelleşmiş interface oluşturulmuştur. (Interface Segregation Principle)
    CalculateMenu(price : number);
}
class SmallSizeMenuCalculate implements IMenuCalculate{
    CalculateMenu(price: number) {
        return price;
    }
}
class MediumSizeMenuCalculte implements IMenuCalculate{
    CalculateMenu(price: number) {
        return price * 1.5;
    }
}
class BigSizeMenuCalculte implements IMenuCalculate{
    CalculateMenu(price: number) {
        return price * 2;
    }
}
interface IMenuKeyValue{
    menuSize: MenuSize;
    menuCalculate: IMenuCalculate;
}
var arrMenuTypes: IMenuKeyValue[] = [];
arrMenuTypes.push({menuSize: MenuSize.Small, menuCalculate: new SmallSizeMenuCalculate});
arrMenuTypes.push({menuSize: MenuSize.Medium, menuCalculate: new MediumSizeMenuCalculte});
arrMenuTypes.push({menuSize: MenuSize.Big, menuCalculate: new BigSizeMenuCalculte});

var orders:Order[] = [];

class Order{
    id: number;
    selectedMenu: Menu;
    selectedExtra: Extra;
    quantity: number;
    size: MenuSize;
    CalculateTotalMenuPrice() {
        let currentMenu = arrMenuTypes.find(x=>x.menuSize == this.size);
        let totalMenuPrice = (currentMenu?.menuCalculate.CalculateMenu(this.selectedMenu.price) + this.selectedExtra.price) * this.quantity;
        return totalMenuPrice;
     }  
 }
 interface IMenuDatabase1Repository{
    ShowMySelection();
 }
 interface IOrderDatabase1Repository{
    Save(order: Order);
    ShowDetails(order: Order);
    Delete(id:number);
 }
 class OrderDatabase1Repository implements IOrderDatabase1Repository{
    Save(order: Order) {
        orders.push(order);
     }
     ShowDetails(order: Order) {
        console.log(`Selected Menu:${order.selectedMenu.name}, Selected Extra:${order.selectedExtra.name}, Size: ${MenuSize[order.size]}, Quantity:${order.quantity}, Total:${order.CalculateTotalMenuPrice()} `)
     }
     Delete(id:number) {
         const deletedOrder = orders.findIndex(item => item.id == id);
         orders.splice(deletedOrder,1);    
     }
 }

 //methodları çalıştıracağım sınıfımla methodlarımın olduğı sınıf arasında interface bulunmaktadır. Böylelikle bağımlılığı azaltmış olduk. (Dependency Inversion Principle)
 class OrderService{
    _orderRepository: IOrderDatabase1Repository;
    constructor(orderRepository:IOrderDatabase1Repository){
        this._orderRepository = orderRepository;
    }
    SaveOrder(order: Order){
        this._orderRepository.Save(order);
    }
    ShowOrderDetails(order: Order){
        this._orderRepository.ShowDetails(order);
    }
    DeleteOrder(id:number){
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



 




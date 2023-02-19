
interface IPersonel{ //Architect classı repository sınıfında kullanılacağı için bağımlılığı azaltmak adına IPerson interface'i oluşturuldu (dependency-inversion). Ayrıca diğer mesleklerin de buradan implementasyon alabilmesi sağlandı.
    id:number;
    name: string;
    lastName: string;
    identityNum: string;
    age: number;
    companyName: string;
    employeeNo: string;
}
class Architect implements IPersonel{ //architect sınıfında sadece propertyler bulunmaktadır. Methodlar repository sınıfında toplanacaktır. (single responsibility)
    id: number;
    name: string;
    lastName: string;
    identityNum: string;
    age: number;
    companyName: string;
    employeeNo: string;
}
class Engineer implements IPersonel, IControlBuilding{ //Örnek olarak bir engineer sınıfı oluşturuldu. Arhictect sınıfından farklı olarak yeni bir davranış eklendi(Liskov Substitution Principle)
    Control() {
        console.log("I control the buildings");
    } 
    id: number;
    name: string;
    lastName: string;
    identityNum: string;
    age: number;
    companyName: string;
    employeeNo: string;
}
interface IControlBuilding{ 
   Control();
}
interface IBaseBuilding{ //basebuilding sınıfı repository sınıfında kullanılacaktı (High level-low level). Bağımlılığı azaltmak için interfacei' oluşturuldu. (dependency iversion)
    story: number;
    unit: number;
    type: BuildingTypes;
}
class BaseBuilding implements IBaseBuilding{ //baseBuilding sınıfı sadece gerekli propertyleri tutmaktadır(single-responsibility)
    type: BuildingTypes;
    story: number;
    unit: number; 
}
enum BuildingTypes{ //bina tipleri enumda tutulmaktadır. Bina tipine göre console'a bilgi yazdıracağız. Bunun için ana bir interface tanımladık. 
    Residential,
    Industrial,
    Commercial,
    Institutional,
    Infrastructure
}
interface IDrawBuilding{ //bu interface sadece draw  methodunu tutmaktadır. Gövdesi yok, diğer sınıflara implemente olacak. Böylece özelleşmiş bir interface oluşturulmuştur. (Interface Segregation Principle)
    Draw(story:number, unit:number);
}
class DrawResidentialBuilding implements IDrawBuilding{  //her case için ayrı bir class oluşturduk. Her case'de ekrana yazdırılacak çıktı farklıdır. Enum'a yeni bir value eklendiğinde var olan sınıflara dokunmadak IDrawBuilding'in implemente edildiği yeni bir sınıf oluşturulabilir(open-close principle)
    Draw(story: number, unit: number) {
       return `I draw residential building with ${story} stories and ${unit} units.`
    }

}
class DrawIndustrialBuilding implements IDrawBuilding{
    Draw(story: number, unit: number) {
         return `I draw industrial building with ${story} stories and ${unit} units.`
    }

}
class DrawCommercialBuilding implements IDrawBuilding{
    Draw(story: number, unit: number) {
        return `I draw commercial building with ${story} stories and ${unit} units.`
    }

}
class DrawInstitutionalBuilding implements IDrawBuilding{
    Draw(story: number, unit: number) {
        return `I draw institutional building with ${story} stories and ${unit} units.`
    }

}
class DrawInfrastructureBuilding implements IDrawBuilding{
    Draw(story: number, unit: number) {
        return `I draw infrastructure building with ${story} stories and ${unit} units.`
    }

}
//if-else bloklarını önlemek için key-value yöntemini kullandık
interface IDrawKeyValue{
    buildingType: BuildingTypes;
    buildingDraw: IDrawBuilding;
}

var arrBuildingTypes: IDrawKeyValue[] = [];
arrBuildingTypes.push({buildingType: BuildingTypes.Commercial, buildingDraw: new DrawCommercialBuilding});
arrBuildingTypes.push({buildingType: BuildingTypes.Residential, buildingDraw: new DrawResidentialBuilding});
arrBuildingTypes.push({buildingType: BuildingTypes.Industrial, buildingDraw: new DrawIndustrialBuilding});
arrBuildingTypes.push({buildingType: BuildingTypes.Infrastructure, buildingDraw: new DrawInfrastructureBuilding});
arrBuildingTypes.push({buildingType: BuildingTypes.Institutional, buildingDraw: new DrawInstitutionalBuilding});

class ArchitectRepository{
    _architect : IPersonel;
    _baseBuilding : IBaseBuilding;
    constructor(architect : IPersonel, baseBuilding: IBaseBuilding){
        this._architect = architect;
        this._baseBuilding = baseBuilding;
    }
    SayIt(){
        let currentType = arrBuildingTypes.find(x=> x.buildingType == this._baseBuilding.type)
        console.log(`Hello. My name is ${this._architect.name} ${this._architect.lastName} and ${currentType?.buildingDraw.Draw(this._baseBuilding.story, this._baseBuilding.unit)}`);
    }
}

let myArchitect = new Architect();
myArchitect.name = "Yaren";
myArchitect.lastName = "Bayır";

let myBuilding = new BaseBuilding();
myBuilding.story = 2;
myBuilding.unit = 6;
myBuilding.type = BuildingTypes.Residential;

var myRepo = new ArchitectRepository(myArchitect, myBuilding);
myRepo.SayIt();



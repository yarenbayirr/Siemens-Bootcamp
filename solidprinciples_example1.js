class Architect {
}
class Engineer {
    Control() {
        console.log("I control the buildings");
    }
}
class BaseBuilding {
}
var BuildingTypes;
(function (BuildingTypes) {
    BuildingTypes[BuildingTypes["Residential"] = 0] = "Residential";
    BuildingTypes[BuildingTypes["Industrial"] = 1] = "Industrial";
    BuildingTypes[BuildingTypes["Commercial"] = 2] = "Commercial";
    BuildingTypes[BuildingTypes["Institutional"] = 3] = "Institutional";
    BuildingTypes[BuildingTypes["Infrastructure"] = 4] = "Infrastructure";
})(BuildingTypes || (BuildingTypes = {}));
class DrawResidentialBuilding {
    Draw(story, unit) {
        return `I draw residential building with ${story} stories and ${unit} units.`;
    }
}
class DrawIndustrialBuilding {
    Draw(story, unit) {
        return `I draw industrial building with ${story} stories and ${unit} units.`;
    }
}
class DrawCommercialBuilding {
    Draw(story, unit) {
        return `I draw commercial building with ${story} stories and ${unit} units.`;
    }
}
class DrawInstitutionalBuilding {
    Draw(story, unit) {
        return `I draw institutional building with ${story} stories and ${unit} units.`;
    }
}
class DrawInfrastructureBuilding {
    Draw(story, unit) {
        return `I draw infrastructure building with ${story} stories and ${unit} units.`;
    }
}
var arrBuildingTypes = [];
arrBuildingTypes.push({ buildingType: BuildingTypes.Commercial, buildingDraw: new DrawCommercialBuilding });
arrBuildingTypes.push({ buildingType: BuildingTypes.Residential, buildingDraw: new DrawResidentialBuilding });
arrBuildingTypes.push({ buildingType: BuildingTypes.Industrial, buildingDraw: new DrawIndustrialBuilding });
arrBuildingTypes.push({ buildingType: BuildingTypes.Infrastructure, buildingDraw: new DrawInfrastructureBuilding });
arrBuildingTypes.push({ buildingType: BuildingTypes.Institutional, buildingDraw: new DrawInstitutionalBuilding });
class ArchitectRepository {
    constructor(architect, baseBuilding) {
        this._architect = architect;
        this._baseBuilding = baseBuilding;
    }
    SayIt() {
        let currentType = arrBuildingTypes.find(x => x.buildingType == this._baseBuilding.type);
        console.log(`Hello. My name is ${this._architect.name} ${this._architect.lastName} and ${currentType === null || currentType === void 0 ? void 0 : currentType.buildingDraw.Draw(this._baseBuilding.story, this._baseBuilding.unit)}`);
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

enum SalaryType{
    High,
    Mid,
    Low
}

//doğru yaklaşım
interface ISalaryCalculate{
    calculate(salary: number): number;
}
class HighSalaryCalculate implements ISalaryCalculate{
    calculate(salary: number): number {
       return salary * 10;
    }

}
class LowSalaryCalculate implements ISalaryCalculate{
    calculate(salary: number): number {
        return salary * 5;
    }

}
class MidSalaryCalculate implements ISalaryCalculate{
    calculate(salary: number): number {
        return salary * 7;
    }

}


//klasik yaklaşım 
class SalaryCalculate {
    CalculateGood(salary:number, salaryCalculate: ISalaryCalculate){
        return salaryCalculate.calculate(salary);
    }
    CalculateBad(salary: number, salaryType: SalaryType) : number{
        let sumSalary = 0;
        switch (salaryType) {
            
            case SalaryType.High:
                sumSalary = salary * 10;
                break;
            
            case SalaryType.Low:
                sumSalary = salary *5;
                
                break;
        
            default:
                break;
        }
        return sumSalary;
    }
}

var salaryCalculate = new SalaryCalculate();
//bad
console.log(`high ${salaryCalculate.CalculateBad(1000, SalaryType.High)}`);
console.log(`low ${salaryCalculate.CalculateBad(1000, SalaryType.Low)}`);

//good
console.log(`high ${salaryCalculate.CalculateGood(1000, new HighSalaryCalculate())}`);
console.log(`low ${salaryCalculate.CalculateGood(1000, new LowSalaryCalculate())}`);
console.log(`mid ${salaryCalculate.CalculateGood(1000, new MidSalaryCalculate())}`);

// var olan koda dokunma yeni class açarak hallet


//if else kullanmadan !!!
interface ISalaryKeyValue{
    salaryType: SalaryType;
    SalaryCalculate: ISalaryCalculate;
}

let externalSalaryType = SalaryType.High;
let externalSalary = 2000;

let arrSalaryTypes: ISalaryKeyValue[] = [];
arrSalaryTypes.push({salaryType: SalaryType.High, SalaryCalculate: new HighSalaryCalculate});
arrSalaryTypes.push({salaryType: SalaryType.Mid, SalaryCalculate: new MidSalaryCalculate});
arrSalaryTypes.push({salaryType: SalaryType.Low, SalaryCalculate: new LowSalaryCalculate});


let currentSalaryCalculate = arrSalaryTypes.find(x=>x.salaryType == externalSalaryType);
console.log(currentSalaryCalculate?.SalaryCalculate.calculate(externalSalary));


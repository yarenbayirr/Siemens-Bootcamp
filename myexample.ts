class Employee{
    id: number;
    name: string;
    department: string;
    salary: number;
    constructor(id:number, name:string, department:string, salary:number){
       this.id = id;
       this.name = name;
       this.department = department;
       this.salary = salary;
    }
}
//repository sınıfı oluşturacağız ama öncelikle soyut olan interface i tanımlayalım. İçerisinde sıklıkla kullanılacak olan methodlardan örnek olarak 2 adet bulunsun
interface IEmployeeRepository{
    GetAll() : Employee[];
    insert(employee: Employee);
}

var employeeList:Employee[] = [];

class EmployeeRepository implements IEmployeeRepository{
    insert(employee: Employee) {
        employeeList.push(employee);
    }
  
    GetAll(): Employee[] {
        employeeList.push(new Employee(1, "Yaren Bayır", "IT", 10000));
        employeeList.push(new Employee(2, "Eren Bayır", "Pazarlama", 15000));
        employeeList.push(new Employee(3, "Atilla Gül", "Satın Alma", 20000));
        return employeeList;
    } 

}
class EmployeeService{
    private _employeeRepository: IEmployeeRepository;
    readonly _rise: number = 1.25;
    constructor(employeeRepository:IEmployeeRepository){
        this._employeeRepository = employeeRepository;
    }
    GetAll() : Employee[]{
        let newEmployeeList : Employee[] = [];
        this._employeeRepository.GetAll().forEach(x=>{
            newEmployeeList.push(new Employee(x.id, x.name, x.department, x.salary * this._rise));
        })
        return newEmployeeList;
    }
    Insert(employee: Employee){
        employeeList.push(employee);
    }
}

class EmployeeFactory{
    public CreateRepository(): IEmployeeRepository{
        return new EmployeeRepository();
    }
}

var employeeService = new EmployeeService(new EmployeeFactory().CreateRepository());
console.log(employeeService.GetAll());
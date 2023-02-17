interface IEmployee{
  calculateSalary(salary: number);
}
class Engineer implements IEmployee{
    calculateSalary(salary: number) {
        return salary * 3;
    }

}
class Manager implements IEmployee{
    calculateSalary(salary: number) {
        return salary * 5;
    }

}

class EmployeeService{
   _employee: IEmployee
   constructor(employee : IEmployee){
    this._employee = employee;
   }
   calculateMySalary(salary:number){
    this._employee.calculateSalary(salary);
   }
}

let calculateSalary = new EmployeeService(new Manager());
calculateSalary.calculateMySalary(8500);


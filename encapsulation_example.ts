class Employee2{
     name: string;
     surname: string;
     salary: number;
     setSalary(salary){
        if(salary >= 8506){
            this.salary = salary;
        }
        else{
            throw "Maaş, asgarinin altında olamaz!"
        }
     }
     getSalary(){
        return this.salary;
     }
}

let myEmployee = new Employee2();
myEmployee.setSalary(7000);
console.log(myEmployee.getSalary());
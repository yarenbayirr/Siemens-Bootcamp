import { Injectable } from "@angular/core";
import { Employee } from "./models/employee";

@Injectable({    //repository sınıfında bu gelmiyor bunu elle eklemeyi unutma!!!
    providedIn: 'root',
  })

export class EmployeeRepository {
    private employeeList : Employee[] = [];
    load(){
        this.employeeList.push({
            id:1,
            name:"Yaren",
            surname:"Bayır",
            age: 27,
            identityNo: "123456789",
            department: "IT",
            email: "abcd@abcd.com"
        });
        this.employeeList.push({
            id:2,
            name:"Atilla",
            surname:"Gül",
            age: 29,
            identityNo: "123456789",
            department: "Purchase",
            email: "xyz@xyz.com"
        });
        this.employeeList.push({
            id:3,
            name:"Eren",
            surname:"Bayır",
            age: 22,
            identityNo: "123456789",
            department: "HR",
            email: "ercb@ercb.com"
        });
        this.employeeList.push({
            id:4,
            name:"Aydın",
            surname:"Bayır",
            age: 58,
            identityNo: "123456789",
            department: "Management",
            email: "aydnb@aydn.com"
        });
    }
    constructor(){
        this.load();
    }
    getMyList(){
         return this.employeeList as ReadonlyArray<Employee>;
    }
    update(updatedEmployee : Employee){
         let myEmployee = this.employeeList.findIndex(x=>x.id == updatedEmployee.id);
         this.employeeList[myEmployee].age = updatedEmployee.age;
         this.employeeList[myEmployee].department = updatedEmployee.department;
         this.employeeList[myEmployee].email = updatedEmployee.email;
         this.employeeList[myEmployee].identityNo = updatedEmployee.identityNo;
         this.employeeList[myEmployee].name = updatedEmployee.name;
         this.employeeList[myEmployee].surname = updatedEmployee.surname;
    }
    delete(id: number){
        let deletedEmployeeIndex = this.employeeList.findIndex(x=>x.id == id);
        this.employeeList.splice(deletedEmployeeIndex,1);

    }
    getById(id: number){
          return this.employeeList.find(x=>x.id ==id);
    }
    add(newEmployee: Employee){
        this.employeeList.push(newEmployee);
    }
}

import { Employee } from "./models/employee";

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
    }
}

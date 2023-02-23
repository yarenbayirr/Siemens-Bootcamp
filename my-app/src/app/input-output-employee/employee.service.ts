import { Injectable } from '@angular/core';
import { EmployeeRepository } from './employee-repository';
import { Employee } from './models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private employeeRepository : EmployeeRepository) { }
  getAllDetails() : ReadonlyArray<Employee> {
   let employeeList: Employee[] = [];
   this.employeeRepository.getMyList().forEach((e) => {
    employeeList.push({
      id: e.id,
      name: e.name.charAt(0).toUpperCase() + e.name.slice(1).toLocaleLowerCase(),
      surname: e.surname.toLocaleUpperCase(),
      age: e.age,
      identityNo: e.identityNo,
      department: e.department.toLocaleUpperCase(),
      email: e.email.toLocaleLowerCase()
    })
   })
   return employeeList as ReadonlyArray<Employee>
  }
  getById(id: number){
    return this.employeeRepository.getById(id);
  }
  add(newEmployee: Employee){
     this.employeeRepository.add(newEmployee);
  }
  update(updatedEmployee:Employee){
     this.employeeRepository.update(updatedEmployee);
  }
  delete(id:number){
     this.employeeRepository.delete(id);
  }
}

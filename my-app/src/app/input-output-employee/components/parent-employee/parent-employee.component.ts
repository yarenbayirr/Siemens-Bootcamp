import { Component } from '@angular/core';
import { EmployeeService } from '../../employee.service';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-parent-employee',
  templateUrl: './parent-employee.component.html',
  styleUrls: ['./parent-employee.component.css']
})
export class ParentEmployeeComponent {
  employeeList : ReadonlyArray<Employee>
  selectedEmployee : Employee | undefined
  constructor(private employeeService : EmployeeService) {

    this.employeeList = employeeService.getAllDetails();
  
  }
  showDetail(employeeId : number){
     this.selectedEmployee = this.employeeService.getById(employeeId);
  }
  get toggleEmployeeDetail(){
    return this.selectedEmployee != undefined;
  }
}

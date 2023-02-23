import { Component, Input } from '@angular/core';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-child-employee',
  templateUrl: './child-employee.component.html',
  styleUrls: ['./child-employee.component.css']
})
export class ChildEmployeeComponent {
  @Input() employeeList : ReadonlyArray<Employee> | undefined
}

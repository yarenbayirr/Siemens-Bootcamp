import { Component, Input } from '@angular/core';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-child-employee-detail',
  templateUrl: './child-employee-detail.component.html',
  styleUrls: ['./child-employee-detail.component.css']
})
export class ChildEmployeeDetailComponent {
  @Input() selectedEmployee : Employee | undefined;

}

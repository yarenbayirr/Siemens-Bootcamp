import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-child-employee',
  templateUrl: './child-employee.component.html',
  styleUrls: ['./child-employee.component.css']
})
export class ChildEmployeeComponent {
  @Input() selectedId: number | undefined;
  @Input() employeeList : ReadonlyArray<Employee> | undefined;
  @Output() detailbtnClick = new EventEmitter<number>();
  showDetail(id: number){
    this.selectedId = id;
    this.detailbtnClick.emit(this.selectedId);
  }
  highlight(employeId: number){
    return this.selectedId == employeId;
  }
}

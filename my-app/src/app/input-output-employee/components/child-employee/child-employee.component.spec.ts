import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildEmployeeComponent } from './child-employee.component';

describe('ChildEmployeeComponent', () => {
  let component: ChildEmployeeComponent;
  let fixture: ComponentFixture<ChildEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

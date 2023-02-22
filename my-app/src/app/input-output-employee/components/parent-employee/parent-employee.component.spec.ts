import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentEmployeeComponent } from './parent-employee.component';

describe('ParentEmployeeComponent', () => {
  let component: ParentEmployeeComponent;
  let fixture: ComponentFixture<ParentEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

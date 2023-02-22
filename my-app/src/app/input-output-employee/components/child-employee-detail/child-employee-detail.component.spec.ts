import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildEmployeeDetailComponent } from './child-employee-detail.component';

describe('ChildEmployeeDetailComponent', () => {
  let component: ChildEmployeeDetailComponent;
  let fixture: ComponentFixture<ChildEmployeeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildEmployeeDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildEmployeeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorformComponent } from './visitorform.component';

describe('VisitorformComponent', () => {
  let component: VisitorformComponent;
  let fixture: ComponentFixture<VisitorformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitorformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitorformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

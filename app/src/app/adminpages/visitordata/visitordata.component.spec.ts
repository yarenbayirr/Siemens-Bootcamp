import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitordataComponent } from './visitordata.component';

describe('VisitordataComponent', () => {
  let component: VisitordataComponent;
  let fixture: ComponentFixture<VisitordataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitordataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitordataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

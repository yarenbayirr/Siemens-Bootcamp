import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutfooterComponent } from './layoutfooter.component';

describe('LayoutfooterComponent', () => {
  let component: LayoutfooterComponent;
  let fixture: ComponentFixture<LayoutfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutfooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

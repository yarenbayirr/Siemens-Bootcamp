import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subscribe1Component } from './subscribe1.component';

describe('Subscribe1Component', () => {
  let component: Subscribe1Component;
  let fixture: ComponentFixture<Subscribe1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Subscribe1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subscribe1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

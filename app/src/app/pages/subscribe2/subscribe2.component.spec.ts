import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subscribe2Component } from './subscribe2.component';

describe('Subscribe2Component', () => {
  let component: Subscribe2Component;
  let fixture: ComponentFixture<Subscribe2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Subscribe2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subscribe2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

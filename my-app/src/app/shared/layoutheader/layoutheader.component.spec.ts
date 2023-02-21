import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutheaderComponent } from './layoutheader.component';

describe('LayoutheaderComponent', () => {
  let component: LayoutheaderComponent;
  let fixture: ComponentFixture<LayoutheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutheaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

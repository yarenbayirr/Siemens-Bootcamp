import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminmainlayoutComponent } from './adminmainlayout.component';

describe('AdminmainlayoutComponent', () => {
  let component: AdminmainlayoutComponent;
  let fixture: ComponentFixture<AdminmainlayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminmainlayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminmainlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

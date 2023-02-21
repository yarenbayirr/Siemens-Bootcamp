import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamplePipeComponent } from './example-pipe.component';

describe('ExamplePipeComponent', () => {
  let component: ExamplePipeComponent;
  let fixture: ComponentFixture<ExamplePipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamplePipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamplePipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

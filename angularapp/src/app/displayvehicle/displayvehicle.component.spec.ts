import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayvehicleComponent } from './displayvehicle.component';

describe('DisplayvehicleComponent', () => {
  let component: DisplayvehicleComponent;
  let fixture: ComponentFixture<DisplayvehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayvehicleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayvehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

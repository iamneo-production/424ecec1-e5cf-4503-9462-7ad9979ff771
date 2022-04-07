import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetvehicleComponent } from './getvehicle.component';

describe('GetvehicleComponent', () => {
  let component: GetvehicleComponent;
  let fixture: ComponentFixture<GetvehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetvehicleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetvehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclebookinglistComponent } from './vehiclebookinglist.component';

describe('VehiclebookinglistComponent', () => {
  let component: VehiclebookinglistComponent;
  let fixture: ComponentFixture<VehiclebookinglistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiclebookinglistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclebookinglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpassengerComponent } from './editpassenger.component';

describe('EditpassengerComponent', () => {
  let component: EditpassengerComponent;
  let fixture: ComponentFixture<EditpassengerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditpassengerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditpassengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

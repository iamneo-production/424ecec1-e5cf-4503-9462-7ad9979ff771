import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewmanagementComponent } from './reviewmanagement.component';

describe('ReviewmanagementComponent', () => {
  let component: ReviewmanagementComponent;
  let fixture: ComponentFixture<ReviewmanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewmanagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminreviewlistComponent } from './adminreviewlist.component';

describe('AdminreviewlistComponent', () => {
  let component: AdminreviewlistComponent;
  let fixture: ComponentFixture<AdminreviewlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminreviewlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminreviewlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

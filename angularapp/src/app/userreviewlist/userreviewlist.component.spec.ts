import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserreviewlistComponent } from './userreviewlist.component';

describe('UserreviewlistComponent', () => {
  let component: UserreviewlistComponent;
  let fixture: ComponentFixture<UserreviewlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserreviewlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserreviewlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

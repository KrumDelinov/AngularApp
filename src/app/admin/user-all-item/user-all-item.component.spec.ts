import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAllItemComponent } from './user-all-item.component';

describe('UserAllItemComponent', () => {
  let component: UserAllItemComponent;
  let fixture: ComponentFixture<UserAllItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAllItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAllItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

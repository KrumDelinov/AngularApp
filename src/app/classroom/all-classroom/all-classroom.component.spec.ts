import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllClassroomComponent } from './all-classroom.component';

describe('AllClassroomComponent', () => {
  let component: AllClassroomComponent;
  let fixture: ComponentFixture<AllClassroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllClassroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllClassroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

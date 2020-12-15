import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageheadingComponent } from './pageheading.component';

describe('PageheadingComponent', () => {
  let component: PageheadingComponent;
  let fixture: ComponentFixture<PageheadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageheadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageheadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

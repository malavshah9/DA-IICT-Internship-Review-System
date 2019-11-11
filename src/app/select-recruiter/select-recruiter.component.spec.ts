import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectRecruiterComponent } from './select-recruiter.component';

describe('SelectRecruiterComponent', () => {
  let component: SelectRecruiterComponent;
  let fixture: ComponentFixture<SelectRecruiterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectRecruiterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectRecruiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

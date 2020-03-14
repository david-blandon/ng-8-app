import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablesSubjectComponent } from './observables-subject.component';

describe('ObservablesSubjectComponent', () => {
  let component: ObservablesSubjectComponent;
  let fixture: ComponentFixture<ObservablesSubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservablesSubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservablesSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

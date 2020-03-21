import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDirectivesNgContainerComponent } from './structural-directives-ng-container.component';

describe('StructuralDirectivesNgContainerComponent', () => {
  let component: StructuralDirectivesNgContainerComponent;
  let fixture: ComponentFixture<StructuralDirectivesNgContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructuralDirectivesNgContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructuralDirectivesNgContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

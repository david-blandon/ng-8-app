import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDirectivesNgTemplateComponent } from './structural-directives-ng-template.component';

describe('StructuralDirectivesNgTemplateComponent', () => {
  let component: StructuralDirectivesNgTemplateComponent;
  let fixture: ComponentFixture<StructuralDirectivesNgTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructuralDirectivesNgTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructuralDirectivesNgTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

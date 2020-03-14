import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelDrivenReactiveComponent } from './model-driven-reactive.component';

describe('ModelDrivenReactiveComponent', () => {
  let component: ModelDrivenReactiveComponent;
  let fixture: ComponentFixture<ModelDrivenReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelDrivenReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelDrivenReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

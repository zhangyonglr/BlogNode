import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioComponentComponent } from './formulario-component.component';

describe('FormularioComponentComponent', () => {
  let component: FormularioComponentComponent;
  let fixture: ComponentFixture<FormularioComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

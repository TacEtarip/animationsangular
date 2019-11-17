import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementoDeListaComponent } from './elemento-de-lista.component';

describe('ElementoDeListaComponent', () => {
  let component: ElementoDeListaComponent;
  let fixture: ComponentFixture<ElementoDeListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementoDeListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementoDeListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

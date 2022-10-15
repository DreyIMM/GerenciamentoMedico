import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosCategoriaComponent } from './dados-categoria.component';

describe('DadosCategoriaComponent', () => {
  let component: DadosCategoriaComponent;
  let fixture: ComponentFixture<DadosCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadosCategoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadosCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

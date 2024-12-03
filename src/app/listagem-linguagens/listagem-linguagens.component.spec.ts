import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemLinguagensComponent } from './listagem-linguagens.component';

describe('ListagemLinguagensComponent', () => {
  let component: ListagemLinguagensComponent;
  let fixture: ComponentFixture<ListagemLinguagensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListagemLinguagensComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemLinguagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

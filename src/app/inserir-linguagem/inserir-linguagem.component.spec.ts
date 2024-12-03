import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirLinguagemComponent } from './inserir-linguagem.component';

describe('InserirLinguagemComponent', () => {
  let component: InserirLinguagemComponent;
  let fixture: ComponentFixture<InserirLinguagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InserirLinguagemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InserirLinguagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

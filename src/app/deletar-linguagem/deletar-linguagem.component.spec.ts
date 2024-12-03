import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletarLinguagemComponent } from './deletar-linguagem.component';

describe('DeletarLinguagemComponent', () => {
  let component: DeletarLinguagemComponent;
  let fixture: ComponentFixture<DeletarLinguagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeletarLinguagemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletarLinguagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

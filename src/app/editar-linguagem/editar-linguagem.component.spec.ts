import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarLinguagemComponent } from './editar-linguagem.component';

describe('EditarLinguagemComponent', () => {
  let component: EditarLinguagemComponent;
  let fixture: ComponentFixture<EditarLinguagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarLinguagemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarLinguagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

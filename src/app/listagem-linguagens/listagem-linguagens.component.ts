import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-listagem-linguagens',
  standalone: true,
  imports: [MatCardModule, MatToolbarModule, MatSlideToggleModule],
  templateUrl: './listagem-linguagens.component.html',
  styleUrl: './listagem-linguagens.component.css'
})
export class ListagemLinguagensComponent {

}

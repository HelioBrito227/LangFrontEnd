import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { Linguagem } from '../../models/linguagem';
import { LinguagemService } from '../../services/linguagem-service';

@Component({
    selector: 'app-editar-linguagem',
    imports: [MatCardModule, MatToolbarModule, FormsModule],
    templateUrl: './editar-linguagem.component.html',
    styleUrl: './editar-linguagem.component.css'
})
export class EditarLinguagemComponent implements OnInit{
    
    constructor(
        private linguagemService: LinguagemService
    ) { }

    @Input() nome: string = "";
    @Input() tipo: string = "";
    @Input() descricao: string = "";
    @Input() dataCriacao: Date | undefined 

    idLinguagem:number | undefined
    linguagem:Linguagem | undefined
    
    ngOnInit(): void {
        this.buscarLinguagem(this.idLinguagem!)
    }

    buscarLinguagem(idLinguagem:number){
        this.linguagemService.getLinguagem(idLinguagem)
        .subscribe((res)=>{
            this.linguagem = res
        })
    }

    salvarEdicao(){
        this.linguagemService.editarLinguagem(this.linguagem!)
    }
}

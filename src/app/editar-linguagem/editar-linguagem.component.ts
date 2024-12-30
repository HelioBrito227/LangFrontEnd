import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { Linguagem } from '../../models/linguagem';
import { LinguagemService } from '../../services/linguagem-service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-editar-linguagem',
    imports: [MatCardModule, MatToolbarModule, FormsModule],
    templateUrl: './editar-linguagem.component.html',
    styleUrl: './editar-linguagem.component.css'
})
export class EditarLinguagemComponent implements OnInit{
    
    constructor(
        private linguagemService: LinguagemService,
        private route: ActivatedRoute
    ) { }

    @Input() nome: string = "";
    @Input() tipo: string = "";
    @Input() descricao: string = "";
    @Input() dataCriacao: Date | undefined 

    idLinguagem:number | undefined
    linguagem!:Linguagem
    
    ngOnInit(): void {
        this.route.params.subscribe((params: Params)=>{
            this.linguagemService.getLinguagem(+[params['id']])
            .subscribe((res)=>{
                this.linguagem = res
                console.log(this.linguagem)
            })
        })
    }
    salvarEdicao(){
        this.linguagemService.editarLinguagem(this.linguagem!)
    }
}

import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { LinguagemService } from '../../services/linguagem-service';

@Component({
    selector: 'app-listagem-linguagens',
    imports: [MatCardModule, MatToolbarModule, FormsModule],
    templateUrl: './listagem-linguagens.component.html',
    styleUrl: './listagem-linguagens.component.css'
})
export class ListagemLinguagensComponent implements OnInit {
    @Input() nomeLinguagem: string = "";
    @Input() tipo: string = "";
    @Input() ano: string = "";
    anos:number[] =[]
    tipos:string[] =[]


    constructor(
        private linguagemService:LinguagemService
    ){}

    ngOnInit(): void {
        this.buscarParamsFiltro();
    }

    buscarParamsFiltro(): void {
        this.linguagemService.buscaParamsAnos()
        .subscribe((res) => {
            this.anos = res
        })

        this.linguagemService.buscaParamsTipos()
        .subscribe((res) => {
            this.tipos = res
        })
    }

    buscarLinguagens(nome:string, ano:number, tipo:string):void{
        
    }
}

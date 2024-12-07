import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { LinguagemService } from '../../services/linguagem-service';
import { Linguagem } from '../../models/linguagem';

@Component({
    selector: 'app-listagem-linguagens',
    imports: [MatCardModule, MatToolbarModule, FormsModule],
    templateUrl: './listagem-linguagens.component.html',
    styleUrl: './listagem-linguagens.component.css'
})
export class ListagemLinguagensComponent implements OnInit {
    @Input() nomeLinguagem: string = "";
    @Input() tipo: string = "";
    @Input() ano : string = "";
    anos:string[] =[]
    tipos:string[] =[]
    linguagens:Linguagem[] = []


    constructor(
        private linguagemService:LinguagemService
    ){}

    ngOnInit(): void {
        this.buscarParamsFiltro();
    }

    buscarParamsFiltro(): void {
        this.linguagemService.getParamsAnos()
        .subscribe((res) => {
            this.anos = res
        })

        this.linguagemService.getParamsTipos()
        .subscribe((res) => {
            this.tipos = res
        })
    }

    buscarLinguagens(nomeLinguagem:string, tipo:string, ano:string):void{
        this.linguagemService.getLinguagens(nomeLinguagem, tipo, ano )
        .subscribe((res) => {
            this.linguagens = res
            console.log(this.linguagens)
        })
    }
}

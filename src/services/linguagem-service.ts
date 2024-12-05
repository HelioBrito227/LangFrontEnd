import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LinguagemService {

  private readonly urlBase = 'http://localhost:8080/linguagem'

  constructor(private http: HttpClient) { }

  getLinguagens(){
    
  }

  getLinguagem(){

  }

  adicionaLinguagem(){

  }

  excluiLinguagem(){

  }

  editaLinguagem(){

  }

  buscaParamsAnos():Observable<number[]>{
    return this.http.get<number[]>(this.urlBase+'/buscar_anos')
  }

  buscaParamsTipos():Observable<string[]>{
    return this.http.get<string[]>(this.urlBase+'/buscar_tipos')
  }
}
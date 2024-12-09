import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Linguagem } from '../models/linguagem';

@Injectable({
  providedIn: 'root'
})
export class LinguagemService {

  private readonly urlBase = 'http://localhost:8080/linguagens'

  constructor(private http: HttpClient) { }

  getLinguagens(nomeLinguagem:string | undefined, tipo:string | undefined, ano:string | undefined):Observable<Linguagem[]>{
    let querryParams = new HttpParams();
    if (nomeLinguagem){ querryParams = querryParams.append('nome', nomeLinguagem)}
    if (tipo){ querryParams = querryParams.append('tipo', tipo)}
    if (ano){ querryParams = querryParams.append('ano', ano)}
    return this.http.get<Linguagem[]>(this.urlBase + '/todas', {params: querryParams});
  }

  getLinguagem(idLinguagem: number):Observable<Linguagem>{
    return this.http.get<Linguagem>(this.urlBase + '/linguagem'+idLinguagem)
  }

  adicionarLinguagem(){

  }

  excluirLinguagem(){

  }

  editarLinguagem(linguagem:Linguagem):Observable<any>{
    return this.http.patch<any>(this.urlBase+'/editar_linguagem', linguagem)
  }

  getParamsAnos():Observable<string[]>{
    return this.http.get<string[]>(this.urlBase + '/buscar_anos')
  }

  getParamsTipos():Observable<string[]>{
    return this.http.get<string[]>(this.urlBase + '/buscar_tipos')
  }
}
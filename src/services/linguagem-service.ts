import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Linguagem } from '../models/linguagem';

@Injectable({
  providedIn: 'root'
})
export class LinguagemService {

  private readonly urlBase = 'http://localhost:8080/linguagem'

  constructor(private http: HttpClient) { }

  getLinguagens(nomeLinguagem:string | undefined, tipo:string | undefined, ano:string | undefined):Observable<Linguagem[]>{
    let querryParams = new HttpParams();
    if (nomeLinguagem){ querryParams = querryParams.append('nome', nomeLinguagem)}
    if (tipo){ querryParams = querryParams.append('tipo', tipo)}
    if (ano){ querryParams = querryParams.append('ano', ano)}
    return this.http.get<Linguagem[]>(this.urlBase + '/todas', {params: querryParams});
  }

  getLinguagem(){

  }

  adicionaLinguagem(){

  }

  excluiLinguagem(){

  }

  editaLinguagem(){

  }

  getParamsAnos():Observable<string[]>{
    return this.http.get<string[]>(this.urlBase + '/buscar_anos')
  }

  getParamsTipos():Observable<string[]>{
    return this.http.get<string[]>(this.urlBase + '/buscar_tipos')
  }
}
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { } //Para ter acesso ao meus métodos HTTP

  token ={
    headers: new HttpHeaders().set('Authorization', environment.token) //Esse campo só terá acesso se tiver esse token
  }

  getAllTema(): Observable<Tema[]>{
    return this.http.get<Tema[]>('http://localhost:8080/tema', this.token) //O mesmo token que adicionei no header
  }

  getByIdTema(id: number): Observable<Tema>{
    return this.http.get<Tema>(`http://localhost:8080/tema/${id}`, this.token )
  }

  postTema(tema: Tema): Observable<Tema>{ //Observa minha classe de TEMA
    return this.http.post<Tema>('http://localhost:8080/tema', tema, this.token)
  }

  putTema(tema: Tema): Observable<Tema>{
    return this.http.put<Tema>('http://localhost:8080/tema', tema, this.token)
  }

  deleteTema(id: number){
    return this.http.delete(`http://localhost:8080/tema/${id}`, this.token) //Como vou passar um parâmetro para o http, preciso colocar entre Crase. Outro fator, é que preciso usar o $, outro motivo para usar a crase
  }
}
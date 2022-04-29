import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Endereco } from './model/endereco.model';
import { Solicitante } from './model/solicitante.model';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class ServicoAgenda{

  viaCepUrl : string = 'https://viacep.com.br/ws/'

  urlSolicitante: string = '/agenda/solicitante/';
  urlGestorRa: string = '';

  constructor(private http : HttpClient ) { }

  getAdressByCep(cep : string) : Observable<Endereco> {
    return this.http.get<any>( this.viaCepUrl + cep + '/json');
  }

  getSolicitante(): Observable<any>{
    return this.http.get<any>(this.urlSolicitante);
  }

  getSolicitanteById(id: any): Observable<any>{
    return this.http.get<any>(this.urlSolicitante + id);
  }

  salvarSolicitante(solicitante: Solicitante): Observable<any>{
    return this.http.post<Solicitante>(this.urlSolicitante, solicitante);
  }

  editarSolicitante(id : any, solicitante : Solicitante): Observable<any>{
    const body = { solicitante: solicitante };
    return this.http.put<any>(this.urlSolicitante + id, body);
  }

  deletarSolicitante(id: any): Observable<any>{
    return this.http.delete<any>(this.urlSolicitante + id);
  }


}

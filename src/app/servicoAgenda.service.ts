import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Endereco } from './model/endereco.model';
import { Solicitante } from './model/solicitante.model';
import { Quadra } from './model/quadra.model';
import { Regiao } from './model/regiao.model';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class ServicoAgenda{

  viaCepUrl : string = 'https://viacep.com.br/ws/'

  urlSolicitante : string = '/agenda/solicitante/';
  urlGestorRa : string = 'agenda/gestorra/';
  urlQuadra : string = 'agenda/quadra/';
  urlRegiao : string = 'agenda/regiao/';

  constructor(private http : HttpClient ) { }

  //SERVIÇO VIACEP
  getAdressByCep(cep : string) : Observable<Endereco> {
    return this.http.get<any>( this.viaCepUrl + cep + '/json');
  }

  //SERVIÇOS SOLICITANTES

  getSolicitante(filtroSolicitante : Solicitante) : Observable<Solicitante[]>{
    const filter  = JSON.stringify(filtroSolicitante);
    return this.http.get<Solicitante[]>(this.urlSolicitante, {
      params : {
        filtro : filter
      }
    });
  }

  getSolicitanteById(id: any) : Observable<any>{
    return this.http.get<any>(this.urlSolicitante + id);
  }

  salvarSolicitante(solicitante: Solicitante) : Observable<any>{
    return this.http.post<Solicitante>(this.urlSolicitante, solicitante);
  }

  editarSolicitante(id : any, solicitante : Solicitante) : Observable<any>{
    const body = { solicitante: solicitante };
    return this.http.put<any>(this.urlSolicitante + id, body);
  }

  deletarSolicitante(id: any) : Observable<any>{
    return this.http.delete<any>(this.urlSolicitante + id);
  }

  //SERVIÇOS GESTOR

  getGestorById(id: any) : Observable<any>{
    return this.http.get(this.urlGestorRa + id);
  }

  //SERVIÇOS QUADRA

  getQuadras(filtro : Quadra) : Observable<any>{
    
    const filter = JSON.stringify(filtro);
    // TODO: implementar filtro 
    return this.http.get(this.urlQuadra, {
      params : {
        filtro : filter
      }
    });
  }

  getQuadraById(id : any) : Observable<any>{
    return this.http.get(this.urlQuadra + id);
  }

  salvarQuadra( quadra : Quadra) : Observable<any>{
    const body = {quadra : quadra}; 
    return this.http.post(this.urlQuadra, body);
  }

  editarQuadra(id: any, quadra : Quadra) : Observable<any>{
    const body = {quadra : quadra}; 
    return this.http.put(this.urlQuadra + id, body);
  }

  deletarQuadra(id:any): Observable<any>{
    return this.http.delete(this.urlQuadra + id);
  }

  //SERVIÇO REGIAO

  getRegiao(filtro : Regiao) : Observable<any>{
    return this.http.get(this.urlRegiao);
  }

  getRegiaoById(id:any):Observable<any>{
    return this.http.get(this.urlRegiao + id);
  }


}

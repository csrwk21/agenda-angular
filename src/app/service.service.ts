import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Endereco } from './model/endereco.model';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class ServiceService {

  constructor(private http : HttpClient ) { }

  getAdressByCep(cep : string) : Observable<Endereco> {
    return this.http.get<Endereco>('https://viacep.com.br/ws/${cep}/json/');
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Endereco } from '../model/endereco.model';
import { Quadra } from '../model/quadra.model';
import { ServicoAgenda } from '../servicoAgenda.service';

@Component({
  selector: 'app-cadastro-quadra',
  templateUrl: './cadastro-quadra.component.html',
  styleUrls: ['./cadastro-quadra.component.css'],

})
export class CadastroQuadraComponent implements OnInit {

  formQuadra: FormGroup;

  endereco: Endereco;

  constructor(private router: Router, private servico: ServicoAgenda, 
   private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.enderecoForm(new Quadra);
  }

  goGestor(){
    this.router.navigate(['/gestor']);
  }

  goSolicitante(){
    this.router.navigate(['/solicitante']);
  }

  goCadastrarQuadra(){
    this.router.navigate(['/quadra']);
  }

  enderecoForm(quadra: Quadra) {
    this.formQuadra = this.formBuilder.group({
      nome : [''],
      qtdPessoas: [''],
      ra: [],
      cep: [''],
      logradouro: [''],
      complemento: [''],
      bairro: [''],
      localidade: [''],
      uf: ['']
    })
  }

  pesquisaCep(){
    let cep = this.formQuadra.get('cep')?.value;
    
    //sevico viaCep
    this.servico.getAdressByCep(cep).subscribe( enderecoViaCep =>{
      this.endereco = enderecoViaCep;
      console.log(this.endereco);

      this.formQuadra.controls['bairro'].setValue(this.endereco.bairro);
      this.formQuadra.controls['logradouro'].setValue(this.endereco.logradouro);
      this.formQuadra.controls['localidade'].setValue(this.endereco.localidade);
      this.formQuadra.controls['uf'].setValue(this.endereco.uf);

    })
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Endereco } from '../model/endereco.model';
import { Solicitante } from '../model/solicitante.model';
import { ServicoAgenda } from '../servicoAgenda.service';

@Component({
  selector: 'cadastrar-solicitante',
  templateUrl: './cadastrar-solicitante.component.html',
  styleUrls: ['./cadastrar-solicitante.component.css']
})
export class CadastrarSolicitanteComponent implements OnInit {

  formSolicitante: FormGroup;
  endereco: Endereco;

  constructor(private router: Router, private formBuilder: FormBuilder,
    private servico: ServicoAgenda) { }

  ngOnInit(): void {
    this.enderecoForm(new Solicitante);
  }

  goCadastrarSolicitante() {
    this.router.navigate(['/solicitante']);
  }

  enderecoForm(solicitante: Solicitante) {
    this.formSolicitante = this.formBuilder.group({
      nome: [''],
      rg: [''],
      cpf: [''],
      telefone: [''],
      email: [''],
      dataNascimento: [''],
      cep: [''],
      logradouro: [''],
      complemento: [''],
      bairro: [''],
      localidade: [''],
      uf: ['']
    })
  }

  pesquisaCep() {
    let cep = this.formSolicitante.get('cep')?.value;

    //sevico viaCep
    this.servico.getAdressByCep(cep).subscribe(enderecoViaCep => {
      this.endereco = enderecoViaCep;
      console.log(this.endereco);

      this.formSolicitante.controls['bairro'].setValue(this.endereco.bairro);
      this.formSolicitante.controls['logradouro'].setValue(this.endereco.logradouro);
      this.formSolicitante.controls['localidade'].setValue(this.endereco.localidade);
      this.formSolicitante.controls['complemento'].setValue(this.endereco.complemento);

    })
  }

  cadastrarSolicitante() {
  }

}

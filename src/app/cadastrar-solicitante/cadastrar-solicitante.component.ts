import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Endereco } from '../model/endereco.model';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-cadastrar-solicitante',
  templateUrl: './cadastrar-solicitante.component.html',
  styleUrls: ['./cadastrar-solicitante.component.css']
})
export class CadastrarSolicitanteComponent implements OnInit {

  formEndereco: FormGroup;
  end: Endereco;

  constructor(private router: Router, private formBuilder: FormBuilder, private servico : ServiceService) { }

  ngOnInit(): void {
    this.enderecoForm(new Endereco);
  }

  goCadastrarSolicitante() {
    this.router.navigate(['/solicitante']);
  }

  criarFormularioEndereco(endereco: Endereco) {
    this.formEndereco = new FormGroup({
      cep: new FormControl(endereco.cep),
      logradouro: new FormControl(endereco.logradouro),
      complemento: new FormControl(endereco.logradouro),
      bairro: new FormControl(endereco.bairro),
      localidade: new FormControl(endereco.localidade),
      uf: new FormControl(endereco.uf)
    });
  }

  enderecoForm(endereco: Endereco) {
    this.formEndereco = this.formBuilder.group({
      cep: [endereco.cep],
      logradouro: [endereco.logradouro],
      complemento: [endereco.complemento],
      bairro: [endereco.bairro],
      localidade: [endereco.localidade],
      uf: [endereco.uf]
    })
  }

  pesquisaCep(){
    let cep = this.formEndereco.get('cep')?.value;
    
    this.servico.getAdressByCep(cep).subscribe( endereco =>{
      this.end = endereco;
      console.log(this.end);

      this.formEndereco.controls['bairro'].setValue(this.end.bairro);
      this.formEndereco.controls['logradouro'].setValue(this.end.bairro);
      this.formEndereco.controls['localidade'].setValue(this.end.localidade);
      this.formEndereco.controls['complemento'].setValue(this.end.complemento);

    })
  }

  cadastrarSolicitante(){

  }

}

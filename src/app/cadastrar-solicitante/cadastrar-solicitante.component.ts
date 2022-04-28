import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-solicitante',
  templateUrl: './cadastrar-solicitante.component.html',
  styleUrls: ['./cadastrar-solicitante.component.css']
})
export class CadastrarSolicitanteComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  goCadastrarSolicitante(){
    this.router.navigate(['/solicitante']);
  }

}

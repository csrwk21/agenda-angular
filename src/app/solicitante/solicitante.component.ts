import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solicitante',
  templateUrl: './solicitante.component.html',
  styleUrls: ['./solicitante.component.css']
})
export class SolicitanteComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
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

  goCadastrarSolicitante(){
    this.router.navigate(['/cadastrar-solicitante']);
  }
}

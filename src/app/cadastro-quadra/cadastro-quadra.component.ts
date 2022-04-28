import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-cadastro-quadra',
  templateUrl: './cadastro-quadra.component.html',
  styleUrls: ['./cadastro-quadra.component.css'],

})
export class CadastroQuadraComponent implements OnInit {

  constructor(private router: Router) { }

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

}

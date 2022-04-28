import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  goGestor(){
    this.router.navigate(['/gestor']);
  }

  goSolicitante(){
    this.router.navigate(['/solicitante']);
  }

  goLogin(){
    this.router.navigate(['/login']);
  }

  goConsultarQuadra(){
    this.router.navigate(['/quadra']);
  }
}

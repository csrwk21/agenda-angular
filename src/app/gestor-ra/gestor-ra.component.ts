import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'gestor-ra',
  templateUrl: './gestor-ra.component.html',
  styleUrls: ['./gestor-ra.component.css']
})
export class GestorRaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  public teste() {
    this.router.navigate(['/login']);
  }

  goGestor(){
    this.router.navigate(['/gestor']);
  }

  goSolicitante(){
    this.router.navigate(['/solicitante']);
  }
}

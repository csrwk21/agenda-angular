import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quadra',
  templateUrl: './quadra.component.html',
  styleUrls: ['./quadra.component.css']
})
export class QuadraComponent implements OnInit {

  constructor( private router : Router) { }

  ngOnInit(): void {
  }

  goCadastrarQuadra(){
    this.router.navigate(['/cadastrar-quadra']);
  }

}

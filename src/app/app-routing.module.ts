import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarGestorComponent } from './cadastrar-gestor/cadastrar-gestor.component';
import { CadastrarSolicitanteComponent } from './cadastrar-solicitante/cadastrar-solicitante.component';
import { CadastroQuadraComponent } from './cadastro-quadra/cadastro-quadra.component';
import { ConsultaQuadrasComponent } from './consulta-quadras/consulta-quadras.component';
import { GestorRaComponent } from './gestor-ra/gestor-ra.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { QuadraComponent } from './quadra/quadra.component';
import { ReservaQuadraComponent } from './reserva-quadra/reserva-quadra.component';
import { SolicitanteComponent } from './solicitante/solicitante.component';

const routes: Routes = [

  { path: '',  pathMatch: 'full', redirectTo : 'home'},
  { path : 'home', component: HomeComponent},
  { path : 'gestor', component: GestorRaComponent},
  { path : 'cadastrar-gestor', component: CadastrarGestorComponent},
  { path : 'login', component: LoginComponent},
  { path : 'solicitante', component : SolicitanteComponent},
  { path : 'cadastrar-solicitante', component : CadastrarSolicitanteComponent},
  { path : 'cadastrar-quadra', component : CadastroQuadraComponent},
  { path : 'quadra', component : QuadraComponent},
  { path : 'reservar-quadra', component : ReservaQuadraComponent},
  { path : 'consulta-quadra', component : ConsultaQuadrasComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

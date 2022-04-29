import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GestorRaComponent } from './gestor-ra/gestor-ra.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SolicitanteComponent } from './solicitante/solicitante.component';
import { CadastroQuadraComponent } from './cadastro-quadra/cadastro-quadra.component';
import { ReservaQuadraComponent } from './reserva-quadra/reserva-quadra.component';
import { ConsultaQuadrasComponent } from './consulta-quadras/consulta-quadras.component';
import { QuadraComponent } from './quadra/quadra.component';
import { CadastrarSolicitanteComponent } from './cadastrar-solicitante/cadastrar-solicitante.component';
import { CadastrarGestorComponent } from './cadastrar-gestor/cadastrar-gestor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ServicoAgenda } from './servicoAgenda.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GestorRaComponent,
    HomeComponent,
    SolicitanteComponent,
    CadastroQuadraComponent,
    ReservaQuadraComponent,
    ConsultaQuadrasComponent,
    QuadraComponent,
    CadastrarSolicitanteComponent,
    CadastrarGestorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ServicoAgenda],
  bootstrap: [AppComponent]
})
export class AppModule { }

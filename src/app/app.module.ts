import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { PrevidenciaComponent } from './previdencia/previdencia.component';
import { SaudeComponent } from './saude/saude.component';
import { SegurosComponent } from './seguros/seguros.component';
import { EmprestimosComponent } from './emprestimos/emprestimos.component';
import { NotificacoesComponent } from './notificacoes/notificacoes.component';
import { PerfilComponent } from './perfil/perfil.component';
import { CardPrevidenciaComponent } from './home/card-previdencia/card-previdencia.component';
import { CardSaudeComponent } from './home/card-saude/card-saude.component';
import { CardEmprestimosComponent } from './home/card-emprestimos/card-emprestimos.component';
import { CardSegurosComponent } from './home/card-seguros/card-seguros.component';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { HeaderComponent } from './header/header.component';
import { BuscaComponent } from './home/busca/busca.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TitleComponent } from './title/title.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent,
    HeaderComponent,
    TitleComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

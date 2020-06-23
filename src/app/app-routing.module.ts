import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotificacoesComponent } from './notificacoes/notificacoes.component';
import { DefaultLayoutModule } from './default-layout/default-layout.module';


const routes: Routes = [
  { path: '', loadChildren: () => DefaultLayoutModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

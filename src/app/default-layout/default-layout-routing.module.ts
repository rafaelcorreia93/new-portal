import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { NotificacoesComponent } from '../notificacoes/notificacoes.component';
import { DefaultLayoutComponent } from './default-layout.component';


const routes: Routes = [
  {
    path: '', component: DefaultLayoutComponent, children: [
      { path: 'home',  component: HomeComponent, data: { animation: 'isLeft', title: 'Home' } },
      { path: 'avisos', component: NotificacoesComponent, data: { animation: 'isRight', title: 'Avisos' } },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultLayoutRoutingModule { }

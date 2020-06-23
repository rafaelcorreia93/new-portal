import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultLayoutRoutingModule } from './default-layout-routing.module';
import { HomeComponent } from '../home/home.component';
import { NotificacoesComponent } from '../notificacoes/notificacoes.component';
import { BuscaComponent } from '../home/busca/busca.component';
import { TitleComponent } from '../title/title.component';
import { PrevidenciaComponent } from '../previdencia/previdencia.component';
import { SaudeComponent } from '../saude/saude.component';
import { SegurosComponent } from '../seguros/seguros.component';
import { EmprestimosComponent } from '../emprestimos/emprestimos.component';
import { PerfilComponent } from '../perfil/perfil.component';
import { CardPrevidenciaComponent } from '../home/card-previdencia/card-previdencia.component';
import { CardSaudeComponent } from '../home/card-saude/card-saude.component';
import { CardEmprestimosComponent } from '../home/card-emprestimos/card-emprestimos.component';
import { CardSegurosComponent } from '../home/card-seguros/card-seguros.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { ServiceShortcutComponent } from '../shared/service-shortcut/service-shortcut.component';



@NgModule({
  declarations: [
    HomeComponent,
    NotificacoesComponent,
    BuscaComponent,
    PrevidenciaComponent,
    SaudeComponent,
    SegurosComponent,
    EmprestimosComponent,
    CardPrevidenciaComponent,
    CardSaudeComponent,
    CardEmprestimosComponent,
    CardSegurosComponent,
    ServiceShortcutComponent
  ],
  imports: [
    CommonModule,
    MatSliderModule,
    DefaultLayoutRoutingModule,
    MatDatepickerModule,
    MatButtonModule,
    MatTabsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class DefaultLayoutModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsumoModuleRoutingModule } from './insumo-module-routing.module';
import { CadastroInsumoComponent } from './cadastro-insumo/cadastro-insumo.component';
import { ListaInsumoComponent } from './lista-insumo/lista-insumo.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CadastroInsumoComponent,
    ListaInsumoComponent
  ],
  imports: [
    CommonModule,
    InsumoModuleRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class InsumoModuleModule { }

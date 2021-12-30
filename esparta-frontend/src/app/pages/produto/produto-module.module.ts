import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoModuleRoutingModule } from './produto-module-routing.module';
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ListaProdutoComponent
  ],
  imports: [
    CommonModule,
    ProdutoModuleRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class ProdutoModuleModule { }

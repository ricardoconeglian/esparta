import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroInsumoComponent } from './cadastro-insumo/cadastro-insumo.component';
import { ListaInsumoComponent } from './lista-insumo/lista-insumo.component';

const routes: Routes = [
  {
    //Rota para a tela listagem de produtos
    path: "",
    component: ListaInsumoComponent
  },

  {
    //Rota para a tela de cadastro de produto
    path: 'cadastro-insumo/new',
    component: CadastroInsumoComponent
  },

  {
    // Rota para edição de produtos
    path: ":id/edit",
    component: CadastroInsumoComponent
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsumoModuleRoutingModule { }

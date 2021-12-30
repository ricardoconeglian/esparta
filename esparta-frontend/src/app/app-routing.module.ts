import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {

    path: "produto",
    loadChildren: () => import('./pages/produto/produto-module.module').then(m => m.ProdutoModuleModule)
  },

  {

    path: "insumo",
    loadChildren: () => import('./pages/insumo/insumo-module.module').then(m => m.InsumoModuleModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

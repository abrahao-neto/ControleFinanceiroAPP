import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtualizarCategoriaComponent } from './components/Categoria/atualizar-categoria/atualizar-categoria.component';
import { ListagemCategoriasComponent } from './components/Categoria/listagem-categorias/listagem-categorias.component';
import { NovaCategoriaComponent } from './components/Categoria/nova-categoria/nova-categoria.component';


const routes: Routes = [
  {
    path: 'categorias/listagemCategorias', component: ListagemCategoriasComponent
  },

  {
    path: 'categorias/novaCategoria', component: NovaCategoriaComponent
  },

  {
    path: 'categorias/atualizarCategoria/:id', component: AtualizarCategoriaComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

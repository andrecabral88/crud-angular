import { AlterarPessoaComponent } from './pessoas/alterar-pessoa/alterar-pessoa.component';
import { ListarPessoasComponent } from './pessoas/listar-pessoas/listar-pessoas.component';
import { CadastrarPessoaComponent } from './pessoas/cadastrar-pessoa/cadastrar-pessoa.component';
import { PessoasModule } from './pessoas/pessoas.module';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component: ListarPessoasComponent},
  {path: 'cadastrarPessoa', component: CadastrarPessoaComponent },
  {path: 'alterarPessoa/:id', component: AlterarPessoaComponent },
  {
    path: 'pessoas',
    loadChildren: () => import('./pessoas/pessoas.module').then(m => m.PessoasModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

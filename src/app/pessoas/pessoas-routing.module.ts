import { AlterarPessoaComponent } from './alterar-pessoa/alterar-pessoa.component';
import { CadastrarPessoaComponent } from './cadastrar-pessoa/cadastrar-pessoa.component';
import { ListarPessoasComponent } from './listar-pessoas/listar-pessoas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: ListarPessoasComponent},
  {path: 'cadastrarPessoa', component: CadastrarPessoaComponent},
  {path: 'alterarPessoa', component: AlterarPessoaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoasRoutingModule { }

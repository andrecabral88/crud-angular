import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';

import { PessoasRoutingModule } from './pessoas-routing.module';
import { ListarPessoasComponent } from './listar-pessoas/listar-pessoas.component';
import { CadastrarPessoaComponent } from './cadastrar-pessoa/cadastrar-pessoa.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlterarPessoaComponent } from './alterar-pessoa/alterar-pessoa.component';


@NgModule({
  declarations: [
    ListarPessoasComponent,
    CadastrarPessoaComponent,
    AlterarPessoaComponent
  ],
  imports: [
    CommonModule,
    PessoasRoutingModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class PessoasModule { }

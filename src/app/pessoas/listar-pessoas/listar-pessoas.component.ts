import { PessoasService } from './../service/pessoas.service';
import { PessoasModule } from './../pessoas.module';
import { Pessoa } from './../model/pessoa';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgIf } from '@angular/common';
import { Observable, of, EMPTY } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import {FormBuilder, FormGroup, FormControl, Validators, FormsModule} from "@angular/forms";

@Component({
  selector: 'app-listar-pessoas',
  templateUrl: './listar-pessoas.component.html',
  styleUrls: ['./listar-pessoas.component.scss']
})
export class ListarPessoasComponent implements OnInit {

  pessoaDataSource$: Observable<Pessoa[]>;
  //pessoaDataSource: Pessoa[] = [];

  buscarNomeForm: FormGroup;

  public nome: string;

  pessoaSelecionada: Pessoa;

  displayedColumns = ['nome', 'sobrenome', 'idade', 'acao'];

  constructor(private pessoasService : PessoasService,
              private router: Router,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder) {
    //this.pessoalModel = [];
    //this.pessoasService = new PessoasService();

    this.pessoaDataSource$ = this.pessoasService.listar();

  }

  excluir(pessoa: Pessoa) {
    this.pessoaSelecionada = pessoa;

    if(confirm("Deseja remover "+pessoa.nome+ "?")) {

      this.pessoasService.excluir(pessoa)
      .subscribe( data => {
        window.location.reload();
      });

    }

  }

  redirecionarEdicao(pessoa: Pessoa): void {
    //window.localStorage.removeItem("id");
    window.localStorage.setItem("id", pessoa.id.toString());

    window.localStorage.setItem("nome", pessoa.nome.toString());
    window.localStorage.setItem("sobrenome", pessoa.sobrenome.toString());
    window.localStorage.setItem("idade", pessoa.idade.toString());

    this.router.navigate(['alterarPessoa/'+pessoa.id]);
  };

  ngOnInit(): void {
    this.buscarNomeForm = this.formBuilder.group({
      nome: ['','']
    });
  }

  buscarNome(){
    this.pessoaDataSource$ = this.pessoasService.buscarPorNome(this.nome);
  }



}

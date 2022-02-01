import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PessoasService } from './../service/pessoas.service';
import { Pessoa } from './../model/pessoa';
import {FormBuilder, FormGroup, FormControl, Validators} from "@angular/forms";
import {  } from '@angular/forms';

@Component({
  selector: 'app-alterar-pessoa',
  templateUrl: './alterar-pessoa.component.html',
  styleUrls: ['./alterar-pessoa.component.scss']
})
export class AlterarPessoaComponent implements OnInit {

  editForm: FormGroup;
  pessoa: Pessoa;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private pessoasService: PessoasService
              ) { }

  ngOnInit() {

    let pessoaId = window.localStorage.getItem("id");
    let nome = window.localStorage.getItem("nome");
    let sobrenome = window.localStorage.getItem("sobrenome");
    let idade = window.localStorage.getItem("idade");

    if(!pessoaId) {
      alert("ação inválida");
      return;
    }

    this.editForm = this.formBuilder.group({
      id:[pessoaId, ''],
      nome: [nome, Validators.required],
      sobrenome: [sobrenome, Validators.required],
      idade: [idade, Validators.required]
    });

    this.pessoasService.obter(+pessoaId)
      .subscribe( data => {
        this.editForm.setValue(this.pessoa);
      });

  }

  alterar(pessoa: Pessoa) {
    this.pessoasService.editar(this.editForm.value)
      .subscribe( data => {
        this.router.navigate(['']);
      });
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PessoasService } from './../service/pessoas.service';
import { Pessoa } from './../model/pessoa';
import {FormBuilder, FormGroup, FormControl, Validators} from "@angular/forms";
import {  } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-pessoa',
  templateUrl: './cadastrar-pessoa.component.html',
  styleUrls: ['./cadastrar-pessoa.component.scss']
})
export class CadastrarPessoaComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private pessoasService: PessoasService
              ) {}

  addForm: FormGroup;
  pessoa: Pessoa;

  ngOnInit() {
    this.validaForm();
  }

  validaForm(){
    this.addForm = this.formBuilder.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      idade: ['', Validators.required],
    });
  }

  cadastrar() {
    this.pessoasService.salvar(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['']);
      });
  }

}

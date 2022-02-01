import { Pessoa } from './../model/pessoa';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { delay, first, tap, take } from 'rxjs/operators';
import { Observable } from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  private readonly pessoasAPI = 'api/pessoas';

  constructor(private httpClient : HttpClient) { }

  listar(){

    return this.httpClient.get<Pessoa[]>(this.pessoasAPI)
    /*.pipe(
      first(),
      // delay(5000),
      tap(pessoas => console.log(pessoas))
    )*/
  }

  salvar(pessoa : Pessoa){
    return this.httpClient.post<Pessoa>(this.pessoasAPI, pessoa)
  }

  excluir(pessoa: Pessoa) {
    return this.httpClient.delete(this.pessoasAPI + "/" + pessoa.id);
  }

  obter(id: number): Observable<Pessoa> {
    return this.httpClient.get<Pessoa>(this.pessoasAPI + "/" + id);
  }

  editar(pessoa: Pessoa){
    return this.httpClient.put<Pessoa>(this.pessoasAPI + "/" + pessoa.id, pessoa);
  }

  buscarPorNome(nome: string){

    //let params = new HttpParams();

    //if (nome != null) {
    //  params.set('nome', nome);
    //}

    return this.httpClient.get<Pessoa[]>(this.pessoasAPI+ '?nome='+nome);

  }

}

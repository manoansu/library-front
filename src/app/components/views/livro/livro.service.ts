import { ActivatedRoute } from '@angular/router';
import { Livro } from './livro-read-all/livro.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  baseUrl: String = environment.baseUrl;

  constructor(private htt: HttpClient) { }

  findAll(id_cat:String):Observable<Livro[]>{
    const url = `${this.baseUrl}/livros?categoria=${id_cat}`;
    return this.htt.get<Livro[]>(url);
  }
}

import { CategoriaService } from './../categoria.service';
import { Categoria } from './../categoria.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria-read',
  templateUrl: './categoria-read.component.html',
  styleUrls: ['./categoria-read.component.css']
})
export class CategoriaReadComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'descricao', 'acoes'];

  categorias: Categoria[] = [];

  constructor(private service: CategoriaService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.service.findAll().subscribe(response =>{
      this.categorias = response;
      console.log(response);
    })
  }

 
}

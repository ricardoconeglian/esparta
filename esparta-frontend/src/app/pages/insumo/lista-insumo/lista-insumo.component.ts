import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-insumo',
  templateUrl: './lista-insumo.component.html',
  styleUrls: ['./lista-insumo.component.css']
})
export class ListaInsumoComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  navegaParaCadastraInsumo(){
    this.router.navigate(["insumo/cadastro-insumo/new"])
  }

}

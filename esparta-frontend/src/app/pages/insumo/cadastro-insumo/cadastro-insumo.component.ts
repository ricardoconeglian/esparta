import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-insumo',
  templateUrl: './cadastro-insumo.component.html',
  styleUrls: ['./cadastro-insumo.component.css']
})
export class CadastroInsumoComponent implements OnInit {


  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

   //Retorna para a tela lista insumo
   navegarParaListaInsumo(){
    this.router.navigate(['/insumo/',])
  }

}

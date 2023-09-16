import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  constructor(
    private parametrizador: ActivatedRoute,
    private navegador: Router
  ) {
    //http://localhost:4200/portfolio/{1} recuperando parametros (params)
    this.parametrizador.firstChild?.params.subscribe((res) => console.log(res));
    //http://localhost:4200/portfolio/{1}?name=felipe&token=123 recuperando Query parametros (QueryParams)
    this.parametrizador.queryParams.subscribe((res) => console.log(res));
  }

  ngOnInit(): void {
    //força o redirecionamento para o caminho especificado abaixo após 5000 milissegundos
    // setInterval(() => this.navegador.navigate(['/']), 5000);
  }
}

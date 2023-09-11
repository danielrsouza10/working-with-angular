import { Component } from '@angular/core';

@Component({
  selector: 'app-comp-atributos',
  templateUrl: './comp-atributos.component.html',
  styleUrls: ['./comp-atributos.component.css'],
})
export class CompAtributosComponent {
  estilo: string = 'enable';
  botaoEstilo: string = 'disable';
  corFundo: string = 'red';
  item: string = '';
  produtos: string[] = [];

  switchStyle(): void {
    if (this.estilo === 'enable') {
      this.estilo = 'disable';
      this.botaoEstilo = 'enable';
    } else {
      this.estilo = 'enable';
      this.botaoEstilo = 'disable';
    }
  }

  adicionarProduto(item: string): void {
    this.produtos.push(item);
  }
}

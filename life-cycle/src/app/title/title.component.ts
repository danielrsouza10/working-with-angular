import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges {

  constructor(){
    console.log(`ola eu sou o constructor`)
  }

  @Input() name:string = "";

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`Ola! O ${this.name} eh lindo!!!`);
  }



  ngOnInit(): void {
    console.log(`Ola! O ${this.name} eh lindo`);
  }

}

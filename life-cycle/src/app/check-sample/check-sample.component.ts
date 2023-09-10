import { Component, OnInit ,DoCheck, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent implements OnInit ,DoCheck, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy {

  quantidade:number = 0;

  adicionar(){
    this.quantidade += 1;
  }
  subtrair(){
    this.quantidade > 0 ? this.quantidade -= 1 : this.quantidade = this.quantidade;
  }


  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  ngOnInit(): void {
    console.log('ngOnInit');
  }
    ngOnDestroy(): void {
    console.log('Good bye, my friend');
  }

}

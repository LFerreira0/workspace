import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.scss']
})
export class ClassBindingComponent implements OnInit {
  site: string = "portifolio-lcf.herokuapp.com";
  boolean1 = false;
  boolean2 = true;
  urlImagem = 'https://loremflickr.com/100/50?random=2';
  constructor() { }

  ngOnInit(): void {
  }

  public getValor(){
    return 3;
  }
}

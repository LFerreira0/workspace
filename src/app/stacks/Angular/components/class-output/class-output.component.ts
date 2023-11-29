import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './class-output.component.html',
  styleUrls: ['./class-output.component.scss']
})
export class ClassOutputComponent implements OnInit {
  @Input() valor:any = 0;

  @Output() mudouValor = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  incrementa(){
    this.valor++;
    this.mudouValor.emit({novoValor: this.valor})
  }

  decrementa(){
    this.valor--;
    this.mudouValor.emit({novoValor: this.valor}) 
  }

}

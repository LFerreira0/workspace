import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClassService {
  emitirValores = new EventEmitter<string>();
  private valores: string[] = ["1","2","3"];
  constructor() { }

  getValues(){
    return this.valores;
  }

  addValues(valor: string){
    this.valores.push(valor);
    this.emitirValores.emit(valor);
  }

}

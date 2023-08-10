import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClassService {
  private valores: string[] = ["1","2","3"];
  constructor() { }

  getValues(){
    return this.valores;
  }

  addValues(valor: string){
    this.valores.push(valor);
  }

}

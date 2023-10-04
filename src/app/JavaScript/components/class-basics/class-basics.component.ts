import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-basics',
  templateUrl: './class-basics.component.html',
  styleUrls: ['./class-basics.component.scss']
})
export class ClassBasicsComponent implements OnInit {
  day : number = 4;
  constructor() { }
  
  ngOnInit(): void {    
  
      switch (this.day) {
        case 0:
            console.log("It is a Sunday.");
            break;
        case 1:
            console.log("It is a Monday.");
            break;
        case 2:
            console.log("It is a Tuesday.");
            break;
        case 3:
            console.log("It is a Wednesday.");
            break;
        case 4:
            console.log("It is a Thursday.");
            break;
        case 5:
            console.log("It is a Friday.");
            break;
        case 6:
            console.log("It is a Saturday.");
            break;
        default:
            console.log("No such day exists!");
            break;
    }

    this.corFavorita("preto");    
  }
  
  corFavorita(cor: string){  
    if(cor === 'azul'){
      return 'Sua cor favorita é azul!';
    }else{
      return 'Sua cor favorita não é azul';
    }
  }

  testandoLoops(){
    var valores = [1, 2, 3]
    for (let index = 0; index <  valores.length; index++) {
      console.log(index);
    }

    let i = 0;
    while(i < 10){
      console.log(i)
      i++;
    }

    valores.forEach(function(item, index, array){
      let ultimoValor = valores[valores.length - 1];
      console.log(item, index, array)
      console.log(ultimoValor)
    })
  }
}

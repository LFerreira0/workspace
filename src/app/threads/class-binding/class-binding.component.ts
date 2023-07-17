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
  valorAtual: string = "";
  valorSalvo: string = "";
  isMouseOver: boolean = false;
  nome: string = '';
  nomeCurso: string = 'Angular';
  pessoa: any = {
    nome: 'def',
    idade: '18'
  }

  constructor() { }

  ngOnInit(): void {
  }

  public getValor(){
    return 3;
  }

  public onClick(){
    alert("Executado")
  }

  public onKeyUp(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  public onKeyUpEnter(event:any){    
    this.valorSalvo = event;  
  } 

  public onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  public onMudouValor(evento:any){
    console.log(evento.novoValor);
  }
}

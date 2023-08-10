import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[CustomHighlight]'
})
export class CustomHighlightDirective {

  @HostListener('mouseenter') onMouseOver() {
    this.backgroundColor = this.highlightColor; 
  }
  @HostListener('mouseleave') onMouseLeave() {  
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') backgroundColor!: string;

  @HostBinding('style.backgroundColor') get SetColor(){
    return this.backgroundColor;
  }  

  //Ao expor via input dando o mesmo nome do seletor, é possivel declarar valor diretamente na atribuição da diretiva no HTML

  @Input() defaultColor: string = 'white';
  @Input('CustomHighlight') highlightColor: string = 'yellow';

   constructor() {}

   ngOnInit(){
      this.backgroundColor = this.defaultColor;
   }

}

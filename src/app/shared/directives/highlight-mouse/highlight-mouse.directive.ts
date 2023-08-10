import { Directive, HostListener, HostBinding, ElementRef, Renderer2, Host } from '@angular/core';

@Directive({
  selector: '[HighlightMouse]'
})
export class HighlightMouseDirective {

  //Existe outra forma de obter o mesmo comportamento através dos códigos comentados

  @HostListener('mouseenter') onMouseOver() {
    // this._renderer.setStyle(this._elementRef.nativeElement, 'background-color', 'yellow');
    this.backgroundColor = 'var(--background-reverse)';  }

  @HostListener('mouseleave') onMouseLeave() {
  //   this._renderer.setStyle(this._elementRef.nativeElement, 'background-color', 'white');
  this.backgroundColor = 'var(--background-color)';
  }

  @HostBinding('style.backgroundColor') backgroundColor!: string;

  @HostBinding('style.backgroundColor') get SetColor(){
    return this.backgroundColor;
  }
  // private backgroundColor !: string;

   constructor(
      // private _elementRef: ElementRef,
      // private _renderer: Renderer2
    ) {}

}

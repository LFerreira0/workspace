import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[HighLight]'
})
export class HighLightDirective {

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) { 
    this._renderer.setStyle(this._elementRef.nativeElement, 'background-color', 'var(--background-reverse)');
  }
  
}

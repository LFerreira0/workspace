import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sand-box',
  templateUrl: './sand-box.component.html',
  styleUrls: ['./sand-box.component.scss']
})
export class SandBoxComponent implements OnInit {
  public content!: string;

  @ViewChild('errorField') errorField!: ElementRef<HTMLParagraphElement>;
  
  @ViewChild('outputField') outputField!: ElementRef<HTMLParagraphElement>;

  @HostListener('keyup', ['$event.key'])
  private sandbox(key: string) {
    try {
      this.errorField.nativeElement.textContent = '';
      const contentWritten = eval(this.content);
      this.outputField.nativeElement.innerHTML = contentWritten || '';
    } catch (error) {
      this.errorField.nativeElement.textContent = `${error}`;
      this.outputField.nativeElement.textContent = '';
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}

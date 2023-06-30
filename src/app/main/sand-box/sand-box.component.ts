import { ThisReceiver } from '@angular/compiler';
import { AfterViewChecked, AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { PrismService } from 'src/app/services/prism.service';

@Component({
  selector: 'app-sand-box',
  templateUrl: './sand-box.component.html',
  styleUrls: ['./sand-box.component.scss']
})
export class SandBoxComponent implements OnInit, AfterViewChecked, AfterViewInit, OnDestroy {
  public content!: string;
  public language: string = 'js';
  highlighted: boolean = false;

  @ViewChild('errorField') errorField!: ElementRef<HTMLParagraphElement>;
  
  @ViewChild('outputField') outputField!: ElementRef<HTMLParagraphElement>;

  @ViewChild('codeViewer') codeViewer!: ElementRef<HTMLElement>

  subscription$: Subscription = new Subscription();

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


  constructor(private prism: PrismService, private r2: Renderer2, private fb: FormBuilder) { }
  ngAfterViewInit(): void {
    this.subscription$.add(
    this.form.valueChanges.subscribe(value => {
      const modifiedContent = this.prism.convertHtmlIntoString(value.contentEditor!);
      this.r2.setProperty(this.codeViewer.nativeElement, 'innerHTML', modifiedContent);
      this.highlighted = true;
    })
    )
  }

  form = this.fb.group({
    contentEditor: '',
    language: '',
  })
  
  ngOnInit(): void {
    
  }

  ngAfterViewChecked(): void {
    if (this.highlighted) {
      this.prism.highlightAll();
      this.highlighted = false;
    }
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

  languageChange(){
    this.prism.highlightAll()
    this.highlighted = true;
  }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-input',
  templateUrl: './class-input.component.html',
  styleUrls: ['./class-input.component.scss']
})
export class ClassInputComponent implements OnInit {

  @Input('nome') nomeCurso: string  = '';

  constructor() { }

  ngOnInit(): void {
  }

}

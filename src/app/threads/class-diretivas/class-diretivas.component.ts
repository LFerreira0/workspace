import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-diretivas',
  templateUrl: './class-diretivas.component.html',
  styleUrls: ['./class-diretivas.component.scss']
})
export class ClassDiretivasComponent implements OnInit {

  valores: number[] = [1,2,3];

  opcao!: string;

  ativo: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}

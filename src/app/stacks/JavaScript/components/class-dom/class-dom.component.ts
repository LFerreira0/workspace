import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-dom',
  templateUrl: './class-dom.component.html',
  styleUrls: ['./class-dom.component.scss']
})
export class ClassDomComponent implements OnInit {
  public language: string = 'js';
  constructor() { }

  ngOnInit(): void {    
  }

  code1 = `
  array.forEach(function(item, index, array){
    console.log(item, index, array)
  })
  `

  code2 = `
  array.forEach((item) => {
    console.log(item)
  })
  ` 

  code3 = `
  array.forEach(() => console.log(i++))
  `

  code4 = `
  img.forEach((img) => {
      img.addEventListener('click', callBack);
  })
  `
}

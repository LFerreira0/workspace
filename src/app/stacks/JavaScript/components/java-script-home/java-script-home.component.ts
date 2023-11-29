import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-java-script-home',
  templateUrl: './java-script-home.component.html',
  styleUrls: ['./java-script-home.component.scss']
})
export class JavaScriptHomeComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }

  @HostListener("window:scroll")
  public showScroll(){
    console.log("teste");
    
  }

}

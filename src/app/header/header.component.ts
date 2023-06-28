import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import { Theme } from '../enums/theme.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  exibirMenu = false;  
  templateEnums = {
      theme: Theme
  }

  constructor(
    public readonly themeService : ThemeService
  ) { }

  ngOnInit(): void {    
  }

  public exibirMenuSecundario(){    
      this.exibirMenu = !this.exibirMenu;
  }

  public themeSwitch(){
    this.themeService.toggleTheme();    
  }


}

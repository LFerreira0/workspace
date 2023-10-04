import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../services/theme/theme.service';
import { Theme } from '../enums/theme.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  exibirMenu = false;  
  exibirMenuJs = false;
  templateEnums = {
      theme: Theme
  }

  constructor(
    public readonly themeService : ThemeService
  ) { }

  ngOnInit(): void {    
  }

  public exibirMenuSecundarioJS(){
    this.exibirMenuJs = !this.exibirMenuJs;
    this.exibirMenu = false;
  }

  public exibirMenuSecundario(){    
      this.exibirMenu = !this.exibirMenu;
      this.exibirMenuJs = false;
  }

  public themeSwitch(){
    this.themeService.toggleTheme();    
  }


}

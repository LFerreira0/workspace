import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SandBoxComponent } from './main/sand-box/sand-box.component';
import { AppRoutingModule } from './app-routing.module';
import { ThreadsModule } from './threads/threads.module';
import "prismjs";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-scss";
import { FormsModule } from '@angular/forms';
import { ThemeService } from './services/theme.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SandBoxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ThreadsModule,
    FormsModule
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

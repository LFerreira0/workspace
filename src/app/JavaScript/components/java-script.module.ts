import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JavaScriptHomeComponent } from './java-script-home/java-script-home.component';
import { ClassDomComponent } from './class-dom/class-dom.component';
import { ClassBasicsComponent } from './class-basics/class-basics.component';
import { JavaScriptRoutingModule } from './java-script-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    JavaScriptHomeComponent,
    ClassDomComponent,
    ClassBasicsComponent
  ],
  imports: [
    CommonModule,
    JavaScriptRoutingModule,
  ],  
})
export class JavaScriptModule { }

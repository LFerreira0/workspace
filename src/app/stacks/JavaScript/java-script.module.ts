import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JavaScriptHomeComponent } from './components/java-script-home/java-script-home.component';
import { ClassDomComponent } from './components/class-dom/class-dom.component';
import { ClassBasicsComponent } from './components/class-basics/class-basics.component';
import { JavaScriptRoutingModule } from './java-script-routing.module';
import { ClassObjectsComponent } from './components/class-objects/class-objects.component';

@NgModule({
  declarations: [
    JavaScriptHomeComponent,
    ClassDomComponent,
    ClassBasicsComponent,
    ClassObjectsComponent
  ],
  imports: [
    CommonModule,
    JavaScriptRoutingModule,
  ],  
})
export class JavaScriptModule { }

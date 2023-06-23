import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassTemplateComponent } from './class-template/class-template.component';
import { ClassModuleComponent } from './class-module/class-module.component';



@NgModule({
  declarations: [
    ClassTemplateComponent,
    ClassModuleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ClassTemplateComponent
  ]
})
export class ThreadsModule { }

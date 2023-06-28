import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassTemplateComponent } from './class-template/class-template.component';
import { ClassModuleComponent } from './class-module/class-module.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';



@NgModule({
  declarations: [
    ClassTemplateComponent,
    ClassModuleComponent,
    ClassBindingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ClassTemplateComponent
  ]
})
export class ThreadsModule { }

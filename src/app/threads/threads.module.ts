import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassTemplateComponent } from './class-template/class-template.component';
import { ClassModuleComponent } from './class-module/class-module.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { FormsModule } from '@angular/forms';
import { ClassInputComponent } from './class-input/class-input.component';
import { ClassOutputComponent } from './class-output/class-output.component';
import { ClassLifeCycleComponent } from './class-life-cycle/class-life-cycle.component';



@NgModule({
  declarations: [
    ClassTemplateComponent,
    ClassModuleComponent,
    ClassBindingComponent,
    ClassInputComponent,
    ClassOutputComponent,
    ClassLifeCycleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    ClassTemplateComponent
  ]
})
export class ThreadsModule { }

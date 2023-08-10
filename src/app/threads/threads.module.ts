import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassTemplateComponent } from './class-template/class-template.component';
import { ClassModuleComponent } from './class-module/class-module.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { FormsModule } from '@angular/forms';
import { ClassInputComponent } from './class-input/class-input.component';
import { ClassOutputComponent } from './class-output/class-output.component';
import { ClassLifeCycleComponent } from './class-life-cycle/class-life-cycle.component';
import { ClassCliComponent } from './class-cli/class-cli.component';
import { ClassDiretivasComponent } from './class-diretivas/class-diretivas.component';
import { ClassNgContentComponent } from './class-ng-content/class-ng-content.component';
import { HighLightDirective } from '../shared/directives/highlight/highlight.directive';
import { HighlightMouseDirective } from '../shared/directives/highlight-mouse/highlight-mouse.directive';
import { CustomHighlightDirective } from '../shared/directives/custon-highlight/custom-highlight.directive';
import { NgElseDirective } from '../shared/directives/ng-else/ng-else.directive';
import { ClassServicesComponent } from './class-services/class-services.component';



@NgModule({
  declarations: [
    ClassTemplateComponent,
    ClassModuleComponent,
    ClassBindingComponent,
    ClassInputComponent,
    ClassOutputComponent,
    ClassLifeCycleComponent,
    ClassCliComponent,
    ClassDiretivasComponent,
    ClassNgContentComponent,
    HighLightDirective,
    HighlightMouseDirective,
    CustomHighlightDirective,
    NgElseDirective,
    ClassServicesComponent
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

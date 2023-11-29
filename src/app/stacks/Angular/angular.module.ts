import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassTemplateComponent } from './components/class-template/class-template.component';
import { ClassModuleComponent } from './components/class-module/class-module.component';
import { ClassBindingComponent } from './components/class-binding/class-binding.component';
import { FormsModule } from '@angular/forms';
import { ClassInputComponent } from './components/class-input/class-input.component';
import { ClassOutputComponent } from './components/class-output/class-output.component';
import { ClassLifeCycleComponent } from './components/class-life-cycle/class-life-cycle.component';
import { ClassCliComponent } from './components/class-cli/class-cli.component';
import { ClassDiretivasComponent } from './components/class-diretivas/class-diretivas.component';
import { ClassNgContentComponent } from './components/class-ng-content/class-ng-content.component';

import { ClassServicesComponent } from './components/class-services/class-services.component';
import { AngularHomeComponent } from './components/angular-home/angular-home.component';
import { AngularRoutingModule } from './angular-routing.module';
import { HighLightDirective } from 'src/app/shared/directives/highlight/highlight.directive';
import { HighlightMouseDirective } from 'src/app/shared/directives/highlight-mouse/highlight-mouse.directive';
import { CustomHighlightDirective } from 'src/app/shared/directives/custon-highlight/custom-highlight.directive';
import { NgElseDirective } from 'src/app/shared/directives/ng-else/ng-else.directive';



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
    ClassServicesComponent,
    AngularHomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AngularRoutingModule
  ],
  exports: [
    ClassTemplateComponent
  ]
})
export class AngularModule { }

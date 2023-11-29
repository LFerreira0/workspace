import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularHomeComponent } from './components/angular-home/angular-home.component';
import { ClassBindingComponent } from './components/class-binding/class-binding.component';
import { ClassCliComponent } from './components/class-cli/class-cli.component';
import { ClassDiretivasComponent } from './components/class-diretivas/class-diretivas.component';
import { ClassInputComponent } from './components/class-input/class-input.component';
import { ClassLifeCycleComponent } from './components/class-life-cycle/class-life-cycle.component';
import { ClassModuleComponent } from './components/class-module/class-module.component';
import { ClassServicesComponent } from './components/class-services/class-services.component';
import { ClassTemplateComponent } from './components/class-template/class-template.component';


const ANGULAR_ROUTES: Routes = [
  {   path: '', component: AngularHomeComponent, children: [
    {   path: 'module', component: ClassModuleComponent},
    {   path: 'template', component: ClassTemplateComponent},
    {   path: 'binding', component: ClassBindingComponent},
    {   path: 'input', component: ClassInputComponent},
    {   path: 'life-cycle', component: ClassLifeCycleComponent},
    {   path: 'cli', component: ClassCliComponent},
    {   path: 'diretivas', component: ClassDiretivasComponent},
    {   path: 'services', component: ClassServicesComponent},  
  ]},  
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(ANGULAR_ROUTES)],
  exports: [RouterModule],

})
export class AngularRoutingModule { }

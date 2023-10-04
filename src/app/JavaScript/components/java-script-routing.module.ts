import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassBasicsComponent } from './class-basics/class-basics.component';
import { ClassDomComponent } from './class-dom/class-dom.component';
import { JavaScriptHomeComponent } from './java-script-home/java-script-home.component';

const JS_ROUTES: Routes = [
  {   path: '', component: JavaScriptHomeComponent, children: [
    {   path: 'basico', component: ClassBasicsComponent},
    {   path: 'dom', component: ClassDomComponent},
  ]},  
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(JS_ROUTES)],
  exports: [RouterModule],

})
export class JavaScriptRoutingModule { }

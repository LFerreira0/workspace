import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassBasicsComponent } from './components/class-basics/class-basics.component';
import { ClassDomComponent } from './components/class-dom/class-dom.component';
import { JavaScriptHomeComponent } from './components/java-script-home/java-script-home.component';
import { ClassObjectsComponent } from './components/class-objects/class-objects.component';

const JS_ROUTES: Routes = [
  {   path: '', component: JavaScriptHomeComponent, children: [
    {   path: 'basico', component: ClassBasicsComponent},
    {   path: 'dom', component: ClassDomComponent},
    {   path: 'objetos', component: ClassObjectsComponent},
  ]},  
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(JS_ROUTES)],
  exports: [RouterModule],

})
export class JavaScriptRoutingModule { }

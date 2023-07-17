import { Routes, RouterModule } from "@angular/router";
import { SandBoxComponent } from "./main/sand-box/sand-box.component";
import { NgModule } from "@angular/core";
import { ClassTemplateComponent } from "./threads/class-template/class-template.component";
import { ClassModuleComponent } from "./threads/class-module/class-module.component";
import { ClassBindingComponent } from "./threads/class-binding/class-binding.component";
import { ClassInputComponent } from "./threads/class-input/class-input.component";
import { ClassLifeCycleComponent } from "./threads/class-life-cycle/class-life-cycle.component";

const APP_ROUTES: Routes = [
    {   path: '', component: SandBoxComponent   },
    {   path: 'module', component: ClassModuleComponent},
    {   path: 'template', component: ClassTemplateComponent},
    {   path: 'binding', component: ClassBindingComponent},
    {   path: 'input', component: ClassInputComponent},
    {   path: 'life-cycle', component: ClassLifeCycleComponent},

]

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule],
})
export class AppRoutingModule{};
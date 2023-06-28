import { Routes, RouterModule } from "@angular/router";
import { SandBoxComponent } from "./main/sand-box/sand-box.component";
import { NgModule } from "@angular/core";
import { ClassTemplateComponent } from "./threads/class-template/class-template.component";
import { ClassModuleComponent } from "./threads/class-module/class-module.component";
import { ClassBindingComponent } from "./threads/class-binding/class-binding.component";

const APP_ROUTES: Routes = [
    {   path: '', component: SandBoxComponent   },
    {   path: 'module', component: ClassModuleComponent},
    {   path: 'template', component: ClassTemplateComponent},
    {   path: 'binding', component: ClassBindingComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule],
})
export class AppRoutingModule{};
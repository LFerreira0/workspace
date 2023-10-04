import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SandBoxComponent } from "./main/sand-box/sand-box.component";
import { ClassBindingComponent } from "./threads/class-binding/class-binding.component";
import { ClassCliComponent } from "./threads/class-cli/class-cli.component";
import { ClassDiretivasComponent } from "./threads/class-diretivas/class-diretivas.component";
import { ClassInputComponent } from "./threads/class-input/class-input.component";
import { ClassLifeCycleComponent } from "./threads/class-life-cycle/class-life-cycle.component";
import { ClassModuleComponent } from "./threads/class-module/class-module.component";
import { ClassServicesComponent } from "./threads/class-services/class-services.component";
import { ClassTemplateComponent } from "./threads/class-template/class-template.component";


const APP_ROUTES: Routes = [
    {   path: '', component: SandBoxComponent   },
    {   path: 'module', component: ClassModuleComponent},
    {   path: 'template', component: ClassTemplateComponent},
    {   path: 'binding', component: ClassBindingComponent},
    {   path: 'input', component: ClassInputComponent},
    {   path: 'life-cycle', component: ClassLifeCycleComponent},
    {   path: 'cli', component: ClassCliComponent},
    {   path: 'diretivas', component: ClassDiretivasComponent},
    {   path: 'services', component: ClassServicesComponent},    
    {   path: 'java-script', loadChildren: () => import('./JavaScript/components/java-script.module').then(m => m.JavaScriptModule) }
]

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule],
})
export class AppRoutingModule{};
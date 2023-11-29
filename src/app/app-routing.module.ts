import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SandBoxComponent } from "./main/sand-box/sand-box.component";

const APP_ROUTES: Routes = [
    {   path: '', component: SandBoxComponent   },  
    {   path: 'java-script', loadChildren: () => import('./stacks/JavaScript/java-script.module').then(m => m.JavaScriptModule) },
    {   path: 'angular', loadChildren: () => import('./stacks/Angular/angular.module').then(m => m.AngularModule) }
]   

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule],
})
export class AppRoutingModule{};
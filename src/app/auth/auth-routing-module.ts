import {  NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { AuthGuard } from "../auth.guard";

const routes: Routes = [{ path: '', redirectTo: 'login', pathMatch: 'full' },
    {path:'login',component:LoginComponent,canActivate:[AuthGuard]},
{path:'register',component:RegisterComponent,canActivate:[AuthGuard]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { loggedGuard } from "../routeGuards/logged.guard";

const routes: Routes = [
    { path: 'login', component: LoginComponent,canActivate:[loggedGuard] },
    { path: 'register', component: RegisterComponent,canActivate:[loggedGuard] }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
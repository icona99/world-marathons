import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [{ path: '', pathMatch: 'full', redirectTo: '/home' },
{path:'auth',
loadChildren:()=>import('./auth/auth.module').then((m)=>m.AuthModule)},
{path:'marathons',
loadChildren:()=>import('./marathons/marathons.module').then((m)=>m.MarathonsModule)},
{ path: 'home', component: HomeComponent },
{path:'**',redirectTo:'/404'},
{path:'404',component:ErrorComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoaderComponent } from './loader/loader.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/notFound.component';
import { ErrorComponent } from './core/error/error.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/loader' },
  { path: 'loader', component: LoaderComponent },
  { path: 'home', component: HomeComponent },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule) },
  { path: 'marathons', loadChildren: () => import('./marathons/marathons.module').then((m) => m.MarathonsModule) },
  { path: 'error', component: ErrorComponent },
  { path: '**', redirectTo: '/404' },
  { path: '404', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

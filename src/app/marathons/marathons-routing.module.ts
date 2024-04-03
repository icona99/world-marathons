import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateComponent } from "./create/create.component";
import { CatalogComponent } from "./catalog/catalog.component";
import { DetailsComponent } from "./details/details.component";
import { EditComponent } from "./edit/edit.component";
import { AuthGuard } from "../routeGuards/auth.guard";
import { SearchComponent } from "./search/search.component";

const routes: Routes = [{ path: 'catalog', component: CatalogComponent,canActivate:[AuthGuard] },
{ path: 'create', component: CreateComponent,canActivate:[AuthGuard] },
{path:'search',component:SearchComponent,canActivate:[AuthGuard]},
{ path: 'details/:id', component: DetailsComponent,canActivate:[AuthGuard]  },
{ path: 'edit/:id', component: EditComponent,canActivate:[AuthGuard]   }]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MarathonsRoutingModule { }
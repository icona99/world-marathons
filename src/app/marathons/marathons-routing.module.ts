import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RegistrationComponent } from "./registration/registration.component";
import { CreateComponent } from "./create/create.component";
import { CatalogComponent } from "./catalog/catalog.component"
import { DetailsComponent } from "./details/details.component";

const routes: Routes = [{ path: 'catalog', component: CatalogComponent },
{ path: 'create', component: CreateComponent },
{path:'details/:id',component:DetailsComponent},
{ path: 'registration', component: RegistrationComponent }]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MarathonsRoutingModule { }
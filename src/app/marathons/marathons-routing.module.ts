import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RegistrationComponent } from "./registration/registration.component";
import { CreateComponent } from "./create/create.component";
import { CatalogComponent } from "./catalog/catalog.component"

const routes: Routes = [{ path: 'catalog', component: CatalogComponent },
{ path: 'create', component: CreateComponent },
{ path: 'registration', component: RegistrationComponent }]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MarathonsRoutingModule { }
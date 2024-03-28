import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateComponent } from "./create/create.component";
import { CatalogComponent } from "./catalog/catalog.component"
import { DetailsComponent } from "./details/details.component";
import { EditComponent } from "./edit/edit.component";
import { AuthGuard } from "../auth.guard";

const routes: Routes = [{ path: 'catalog', component: CatalogComponent},
{ path: 'create', component: CreateComponent, },
{ path: 'details/:id', component: DetailsComponent },
{ path: 'edit/:id', component: EditComponent  }]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MarathonsRoutingModule { }
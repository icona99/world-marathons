import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarathonsRoutingModule } from './marathons-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateComponent } from './create/create.component';
import { CatalogComponent } from './catalog/catalog.component';
import { DetailsComponent } from './details/details.component';
import { SharedModule } from '../shared/shared.module';
import { EditComponent } from './edit/edit.component';
import { SearchComponent } from './search/search.component';







@NgModule({
  declarations: [
    CreateComponent,
    CatalogComponent,
    DetailsComponent,
    EditComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    MarathonsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
})
export class MarathonsModule { }

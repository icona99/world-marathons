import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarathonsRoutingModule } from './marathons-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateComponent } from './create/create.component';
import { CatalogComponent } from './catalog/catalog.component';
import { DetailsComponent } from './details/details.component';
import { SharedModule } from '../shared/shared.module';
import { EditComponent } from './edit/edit.component';







@NgModule({
  declarations: [
    CreateComponent,
    CatalogComponent,
    DetailsComponent,
    EditComponent,
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

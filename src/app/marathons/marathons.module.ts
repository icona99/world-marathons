import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarathonsRoutingModule } from './marathons-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { CreateComponent } from './create/create.component';
import { CatalogComponent } from './catalog/catalog.component';




@NgModule({
  declarations: [
   RegistrationComponent,
    CreateComponent,
    CatalogComponent
    

  ],
  imports: [
    CommonModule,
    MarathonsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class MarathonsModule { }

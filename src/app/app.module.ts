import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HomeComponent } from './home/home.component';
import {  NotFoundComponent } from './not-found/notFound.component';
import { appInterceptorProvider } from './app.intereseptor';
import { LoaderComponent } from './loader/loader.component';
import { SlicePipe } from '@angular/common';





@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
NotFoundComponent,
  LoaderComponent
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    MatSlideToggleModule,
    AppRoutingModule,
    SlicePipe

  ],
  providers: [appInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }

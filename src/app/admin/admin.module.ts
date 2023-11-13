import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AccueilComponent } from './accueil/accueil.component';
import { PagesComponent } from './pages/pages.component';


@NgModule({
  declarations: [
    // AdminComponent,
    AccueilComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }

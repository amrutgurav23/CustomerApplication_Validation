import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './CustomerApp.HomeComponent';
import { MasterPageComponent } from './CustomerApp.MasterPageComponent';
import { MainRoutingModule } from '../Routing/CustomerApp.MainRouting';

@NgModule({
  declarations: [
    HomeComponent, MasterPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MainRoutingModule
  ],
  providers: [],
  bootstrap: [MasterPageComponent]
})
export class MainModule { }

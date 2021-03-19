import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ChartComponent } from './chart/chart.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CommonModule,
    AppRoutingModule,
    MatCheckboxModule,
    MatSidenavModule,
    FormsModule,
    MatGridListModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

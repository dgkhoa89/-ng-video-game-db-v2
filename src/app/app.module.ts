import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//manual import
import { FormsModule } from '@angular/forms';
import { GaugeModule } from 'angular-gauge'
import { HttpClientModule } from '@angular/common/http'
import { MatTabsModule } from '@angular/material/tabs'
import { MatIconModule } from '@angular/material/icon'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatSelect, MatSelectModule } from '@angular/material/select'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    SearchBarComponent
  ],
  imports: [
    GaugeModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatTabsModule,
    MatIconModule,
    MatFormFieldModule, 
    MatSelectModule,
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

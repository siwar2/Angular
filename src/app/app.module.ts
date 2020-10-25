import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TasksComponent } from './components/tasks/tasks.component';
import {HttpClientModule} from  '@angular/common/http' ;
import { FormsModule} from    '@angular/forms';

import { ChartsModule } from 'ng2-charts'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TasksComponent,
    
 

    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    HttpClientModule,
    ChartsModule,
   
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent , TasksComponent]
})
export class AppModule { }

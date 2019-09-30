import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {
  HttpModule, XHRBackend, RequestOptions, Http,
  ConnectionBackend,
  RequestOptionsArgs,
  Response,
  Headers,
  Request
} from '@angular/http';


import { AppComponent } from './app.component';
import { GlobalService } from './service/global.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }

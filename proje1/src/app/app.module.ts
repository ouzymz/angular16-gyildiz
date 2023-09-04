import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Com1Component } from './com1/com1.component';
import { ComComponent } from './com/com.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent, //olusturulan componentin kullanilabilmesi icin declaration kısmında belirtilmesi gerekir. 
    Com1Component, ComComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent] //burada tanimlanan component uygulamanin ana component oldugunu belirtir.

})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StandaloneComponent } from './standalone/standalone/standalone.component';
import { Standalonev2Component } from './standalone/standalonev2/standalonev2.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule,StandaloneComponent,Standalonev2Component],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}

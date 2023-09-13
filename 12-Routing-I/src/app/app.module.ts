import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes/routes';
import { ErrorComponent } from './error/error.component';
import { APP_BASE_HREF } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // RouterModule.forRoot(routes) -- usteki approutingmodule uzerinden islemlar tamamlandi.
  ],
  providers: [
    {provide:APP_BASE_HREF,useValue:"/DEMO"}, // bu alan sayasinde indec.html deki base href i degistirebiliriz. 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

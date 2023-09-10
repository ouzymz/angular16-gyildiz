import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductService } from './productService';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProductService], //product service burada declere edildi. bu modulde declere edilen butun komponentlerde kullanilabilir. 
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoggerService, ProductService, ProductServicesWithLogger } from './productService';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProductService, ProductServicesWithLogger, LoggerService],
  // providers: [ProductService, ProductServicesWithLogger], //product service burada declere edildi. bu modulde declere edilen butun komponentlerde kullanilabilir. Bu kullanimda ProductServicesWithLogger hata alirsiniz. cunku bu servis icinde LoggerService inject edilmistir. LoggerService ise burada declere edilmemistir. Sorunu cosmek icin ProductServiceWithLogger'i @Injectable decoratoru ile kullanmaliyiz.
  bootstrap: [AppComponent]
})
export class AppModule { }

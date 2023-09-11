import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductService } from './productservice';
import { ProductServiceIT } from './injection-token';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    // ProductService // DI token
    // {provide: ProductService, useClass: ProductService} // TypeToken
    // {provide: 'ProductService', useClass: ProductService} // string token
    // {provide: ProductServiceIT, useClass: ProductService},
    // {provide:'example',useValue:'Merhaba'},
    // {provide:'example2',useValue:()=>{return 'Merhaba'}},
    {
      //userFactory fonsiyonunda async fonksiyon kullanimi desteklenmez!!!
      provide: 'productService',
      useFactory: (httpClient: HttpClient) => {
        const obs = httpClient.get(
          'https://jsonplaceholder.typicode.com/todos/1'
        ).subscribe({next:data => console.log(data)});

        return new ProductService();

      },
      deps: [HttpClient],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

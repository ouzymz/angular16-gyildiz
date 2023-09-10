import { Component } from '@angular/core';
import { InjectableProductService, ProductService } from './productService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // providers:  dependenct injection ya komponentin kendi providers'ı ya da app.module.ts'deki providers'ına declere edilir. .
})
export class AppComponent {

  //contructorda dependency injection yapildi.. 
  constructor(private productService: ProductService, private InjectableProductService: InjectableProductService) { 
    console.log(productService.getProducts());

    //@Injectable decoratoru ile tanimlandigi icin providerde verilmemistir. 
    console.log(InjectableProductService.getProducts());
  }


}

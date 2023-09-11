import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // constructor(@Inject('ProductService') private productService: any) {
  //   console.log(productService.getProducts());
  // } // string token

  // constructor(
  //   @Inject('ProductServiceIT') private productService: any,
  //   @Inject('example') private example: any,
  //   @Inject('example2') private func: any,
  // ) {
  //   console.log(productService.getProducts(), `example: ${example}`);
  //   console.log(func());
  // } // DI token

  constructor(@Inject('productService') private productService: any) {
    console.log(productService.getProducts());
  } // TypeToken
}

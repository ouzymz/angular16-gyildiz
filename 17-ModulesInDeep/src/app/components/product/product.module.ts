import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AddProductComponent,
    ProductListComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([  { path: 'products', component: ProductListComponent },
    { path: 'products/add', component: AddProductComponent },
    { path: 'products/:id', component: ProductDetailsComponent },])//kendi custom module'umuzde verilecek rootlar forchild uzerinden verilir.
  ],
  exports:[
    ProductDetailsComponent,
    AddProductComponent,
    ProductListComponent
  ]
})
export class ProductModule { }

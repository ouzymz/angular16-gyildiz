import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductOverviewComponent } from './components/product-overview/product-overview.component';
import { ProductSpecComponent } from './components/product-spec/product-spec.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductComponent,
    children: [
      {
        path: 'detail/:id',
        component: ProductDetailComponent,
        children: [
          { path: '', redirectTo: 'overview', pathMatch: 'full' },
          { path: 'overview', component: ProductOverviewComponent },
          { path: 'spec', component: ProductSpecComponent },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/products/product-detail/product-detail.component';
import {
  canActivateChildGuard,
  canActivateGuard,
  canDeactivateGuard,
  resolvingGuard,
} from './guards';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    canDeactivate: [canDeactivateGuard],
  },
  {
    path: 'about',
    component: AboutComponent,
    resolve: { data: resolvingGuard },
  },
  {
    path: 'products',
    canActivate: [canActivateGuard],
    canActivateChild: [canActivateChildGuard],
    component: ProductsComponent,
    children: [{ path: 'product/:id', component: ProductDetailComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

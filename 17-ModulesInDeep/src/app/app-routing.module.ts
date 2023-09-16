import { NgModule } from '@angular/core';
import { PreloadingStrategy, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CustomPreloadingStrategy } from './strategies/custom.preloadingstrategy';


const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'customers', loadChildren:()=>import('../app/components/customer/customer.module').then(m=>m.CustomerModule), data:{preload:false}},
  {path:'products', loadChildren:()=>import('../app/components/product/product.module').then(m=>m.ProductModule), data:{preload:true}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:CustomPreloadingStrategy})],
  exports: [RouterModule],
})
export class AppRoutingModule {}

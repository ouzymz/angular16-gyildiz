import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';

const routes: Routes = [
  {path:"firstComponent", component:FirstComponent},
  {path:"secondComponent", component:SecondComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

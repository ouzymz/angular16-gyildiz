import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{path:'standalone',loadComponent:()=>import('./standalone/standalone/standalone.component').then(s=>s.StandaloneComponent)},
{path:'standalonev2',loadComponent:()=>import('./standalone/standalonev2/standalonev2.component').then(s=>s.Standalonev2Component)}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import {
  ActivatedRouteSnapshot,
  CanActivateChildFn,
  CanDeactivateFn,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { AboutComponent } from './components/about/about.component';
import { inject } from '@angular/core';

export const canActivateGuard: CanActivateChildFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  console.log('can activate guard!');

  return true;
};

export const canActivateChildGuard: CanActivateChildFn = () => {
  console.log('canActivateChild true');

  return false; //true olursa childa ulasilir. false olursa childa erisim kapatilmis olur.
};

export const canDeactivateGuard: CanDeactivateFn<any> = (
  component: any,
  currentRoute: ActivatedRouteSnapshot,
  currentState: RouterStateSnapshot,
  nextState: RouterStateSnapshot
) => {
  console.log('CanDeactivate is runnuing cuz changing leaving active route');

  return true; //componenett'ten cikabilir.
  //   return false;//componenett'ten cikamaz.
};

export const resolvingGuard: ResolveFn<any> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const httpClient = inject(HttpClient);

  const getData: any = httpClient.get(
    'https://jsonplaceholder.typicode.com/photos'
  );
  console.log(getData);
  return getData;
};

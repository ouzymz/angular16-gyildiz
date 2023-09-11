import { Injectable } from '@angular/core';

//injectable decorator ile yapinin bir service oldugu anlasiliyor. 
@Injectable({
  providedIn: 'root',
})
export class PersonelService {
  constructor() {}
  
  add() {}
  remoce() {}
  get() {}
}

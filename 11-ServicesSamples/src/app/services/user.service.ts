import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  
  //field
  private _names:string[] =[];

  //getter property
  get users():string[] {
    return this._names
  }

  addUser ( name:string ) {
    this._names.push( name )
  }
}

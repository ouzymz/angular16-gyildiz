import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class RandomServiceString {
  private _randomString: string;
  constructor() {
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+_)-.,></?:;[{}]*&^%$#@!~`";
    let result = "";
    const length = 10;
    for (let i = 0; i < length; i++) {

      const randomIndex = Math.floor(Math.random() * charset.length);
      result += charset.charAt(randomIndex);
      this._randomString = result;
    }
  }
  get randomString(): string {
    return this._randomString;
  }
}

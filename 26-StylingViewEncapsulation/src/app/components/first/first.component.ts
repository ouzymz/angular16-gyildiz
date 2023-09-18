import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
  // encapsulation: ViewEncapsulation.None //component css'inin index html'e global css gibi eklenmesini saglar. 
  // encapsulation: ViewEncapsulation.Emulated //default olarak bu deger kullanilir. Ilgili component elemanlarina uygulanacak css belirtir. css kadlari yalnizca o componentin elementleri uzerinde gecerli olur.
  encapsulation: ViewEncapsulation.ShadowDom //component css'i shadow dom'a eklenir.Sadece verilen com elementini etkiler.

})
export class FirstComponent {
  status: string = 'error';

  //buradaki function kullanilarak da [style.color]="getColor()" seklinde de kullanilabilir.
  getColor(){
    return this.status === 'error' ? 'red' : 'green';
  }
}

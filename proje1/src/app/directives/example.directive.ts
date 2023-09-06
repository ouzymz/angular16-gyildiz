import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';
import * as $ from 'jquery'; //jquery kullanabilmek icin tanimlandi.

@Directive({
  selector: '[appExample]',

  //selector ozelligi koseli parantez icinde yaziliyorsa bu attribute olarak kullanilacagi anlamina gelir ve html'de ornegin <p appExample></p> seklinde kullanilabilir.
  //eger nokta '.' ile kullaniliyorsa ilgili directive'in class olarak kullanilacagi anlamina gelir ve html'de ornegin <p class="appExample"></p> seklinde kullanilabilir.
})
export class ExampleDirective implements OnInit {
  constructor(private element: ElementRef) {
    // element.nativeElement.style.backgroundColor = this.colorFromDirective;
    // element.nativeElement.style.color = 'white';
    // //ornek jquery kullanimi
    $(element.nativeElement).click(function () {
      $(element.nativeElement).fadeOut(500).fadeIn(2000); //element.nativeElement ile html elementine erisim saglanir.
    }); //jquery ile elementin uzerine tiklandiginda acilip kapanmasini sagladik.
   

    //KODLARI NGONINIT ICINE ALMAK GEREKIR.CUNKU CONSTRUCTOR'DA HTML ELEMENTI HENUZ OLUSMAMISTIR.OLUSTUKTAN SONRA ELEMENTE ERISIM SAGLANABILIR.
  }
  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = this.colorFromDirective;
    this.element.nativeElement.style.color = 'white';
    //ornek jquery kullanimi

    $(this.element.nativeElement).fadeOut(500).fadeIn(2000);//ilk acilista calismasi icin kullanilir.

  }
  
  @HostListener('click') //click eventi ile gorevlendirildi.
  onClick() {
    alert('directive element clicked!');
  }

  @HostBinding('style.color') //style.Color ile gorevlendirildi.
  writingColor: string =`white` ;

  @Input() colorFromDirective:string;
}

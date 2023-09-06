import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root', //html'de cagirilirken kullanilacak tag title.. Uygulamanin herhangi bir yarinden nasil cagiralacagini bildiren kisimdir.
  // templateUrl: './app.component.html', //Componentin gorsel calismarilinin yaoildigi parcadir -- icerisinde html esliginde directive pipe gibi angular ozelliklerini calistirebilecek yaoidadir.

  template: `
    //PROPERTY BINDING
    <p>Merhaba</p>
    , {{ title }} <input type="text" [value]="title" />
    <app-home pageName="Oguzhan"></app-home>
    <br />

    //Two-Way Data Binding -- cift yonlu mekanizma!!
    <br />
    <input type="text" [(ngModel)]="name" />
    <br />
    <input type="text" [(ngModel)]="name" (ngModelChange)="onChange($event)" />
    <h1>[(ngModel)]'den gelen cift yonlu degisiklik?</h1>
    <br />
    {{ name }}

    // *ngfor kullanimi //
    <br />
    <li *ngFor="let name of names; index as i">{{ name }}, {{ i }}</li>
    <br />
    // *ngfor directives //
    <br />
    <li
      *ngFor="
        let name of names;
        let i = index;
        let isFirst = first;
        let isEven = even
      "
    >
      {{ name }}, index: {{ i }}, even: {{ isEven }}, first: {{ isFirst }}
    </li>
    <br />

    // *ngIf kullanimi //
    <button (click)="changeVisibility($event)">off</button>
    <h1 #visibleContent *ngIf="visible; else elseContent">Button ON</h1>
    //false durumunda bu tag gorunmez olur else ile verilen template aktif hale
    gecer
    <ng-template #elseContent>
      <h1 #visibleContent *ngIf="!visible; else trueContent">
        Button OFF
      </h1></ng-template
    >
    <ng-template #trueContent
      ><h1 #visibleContent *ngIf="visible; else elseContent">
        Button OFF
      </h1></ng-template
    >

    // *ngSwitch kullanimi //

    <div [ngSwitch]="selectedNumber">
      <div *ngSwitchCase="1">Dogru Sayi</div>
      <div *ngSwitchCase="2">yanlis Sayi</div>
      <div *ngSwitchDefault>Hicbiri</div>
    </div>
    <br />
    // directive kullanimi //

    <div appExample colorFromDirective="blue">
      CLICK ON ELEMENT TO ACTIVE ANIMATION
    </div>
    <br />
    // structural directive kullanimi //

    <div *appCustomIf="true">STRUCTURAL DIRECTIVES customIF</div>

    <br />
    <div *appCustomFor="3; let i = index;let iP= indexPlus ">STRUCTURAL DIRECTIVES customfor (3 adet olusturulmasi istendi) index : {{i}}, indexPlus: {{iP}} </div>
  `,

  styleUrls: ['./app.component.scss'], //style klasorunu hedefleyen
})
export class AppComponent {
  //componentin asil parcasidir. API gibi dis servislere atilan istekler de bu claslar uzerinden yapilir.
  title = 'proje1';
  name: string;

  names: string[] = ['ahmet', 'hakan', 'oguzhan'];

  visible: boolean = true;

  selectedNumber: number = 2;

  changeVisibility($event) {
    this.visible ? (this.visible = false) : (this.visible = true);
    console.log(this.visible);
  }

  onChange($event) {
    console.log(`on change event triggered!`);
  }

  //#DIRECTIVE OLUSTURMA
  //directive olusturma : --ng generate/g directive/d "directiveName" ; islem tamamlandiktan sonra ng CLI'yi yaptigi islemleri terminalde yazidirir.
  //directive olusturulduktan sonra app.module.ts dosyasinda import edilmesi gerekir.
  //directive olusturulduktan sonra app.module.ts dosyasinda declarations kismina eklenmesi gerekir.
  //bir directive'in sinif adinin sonunda Directive kelimesi bulunmalidir.
  //bir sinifin directive olabilmesi icin @Directive dekoratoru ile isaretlenmesi gerekir.
  //bir directive'in selectoru ile html'de kullanilabilmesi icin selector kismina yazilmasi gerekir.

  //#SELECTOR'I ATTRIBUTE OLARAK KULLANMA
  //selector ozelligi koseli parantez icinde yaziliyorsa bu attribute olarak kullanilacagi anlamina gelir ve html'de ornegin <p appExample></p> seklinde kullanilabilir.

  //#SELECTOR'CLASS OLARAK KULLANMA
  //eger nokta '.' ile kullaniliyorsa ilgili directive'in class olarak kullanilacagi anlamina gelir ve html'de ornegin <p class="appExample"></p> seklinde kullanilabilir.

  //DIRECTIVE ILE ISARETLENEN HTML NESNESINI KULLANMA
  //directive ile isaretlenen html nesnesi directive'in constructor'ina parametre olarak gonderilir.

  //#DIRECTIVE'E PARAMETRE TANIMLAMA
  //directive'e parametre tanimlamak icin @Input dekoratoru kullanilir.

  //#HostListener
  //Olusturulan directive'in hangi event ile gorevlendirilecegini saglayan dekoratordur.

  //#HostBinding
  //Directive'in isaretledigi DOM nesnesinin bir ozelligine bind olarak islemler gerceklestirebiliyoruz.
}

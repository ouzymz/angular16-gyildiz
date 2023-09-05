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
       <div *ngSwitchCase="1">Dogru Sayi</div> <div *ngSwitchCase="2">yanlis Sayi</div> 
       <div *ngSwitchDefault>Hicbiri</div> 
      </div>
  `,

  styleUrls: ['./app.component.scss'], //style klasorunu hedefleyen
})
export class AppComponent {
  //componentin asil parcasidir. API gibi dis servislere atilan istekler de bu claslar uzerinden yapilir.
  title = 'proje1';
  name: string;

  names: string[] = ['ahmet', 'hakan', 'oguzhan'];

  visible: boolean = true;

  selectedNumber:  number =2;



  changeVisibility($event) {
    this.visible ? (this.visible = false) : (this.visible = true);
    console.log(this.visible);
  }

  onChange($event) {
    console.log(`on change event triggered!`);
  }
}

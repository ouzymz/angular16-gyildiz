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
    <input type="text" [(ngModel)]="name" (ngModelChange)="onChange($event)"/>
    <h1>[(ngModel)]'den gelen cift yonlu degisiklik?</h1>
    <br />
    {{ name }}
  `,

  styleUrls: ['./app.component.scss'], //style klasorunu hedefleyen
})
export class AppComponent {
  //componentin asil parcasidir. API gibi dis servislere atilan istekler de bu claslar uzerinden yapilir.
  title = 'proje1';
  name: string;

  onChange($event){
    console.log(`on change event triggered!`);
    
  }
}

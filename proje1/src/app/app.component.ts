import { Component } from '@angular/core';

@Component({
  selector: 'app-root',//html'de cagirilirken kullanilacak tag title.. Uygulamanin herhangi bir yarinden nasil cagiralacagini bildiren kisimdir. 
  // templateUrl: './app.component.html', //Componentin gorsel calismarilinin yaoildigi parcadir -- icerisinde html esliginde directive pipe gibi angular ozelliklerini calistirebilecek yaoidadir. 
  template: '<p>Merhaba</p>, {{title}}',
  styleUrls: ['./app.component.scss'] //style klasorunu hedefleyen 
})
export class AppComponent {
  //componentin asil parcasidir. API gibi dis servislere atilan istekler de bu claslar uzerinden yapilir. 
  title = 'proje1';
}

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  //STANDALONE YAPIDAKI YONTEM
  // httpClient = inject(HttpClient);
  // constructor() {
  //   this.httpClient
  //     .get('https://jsonplaceholder.typicode.com/todos/1')
  //     .subscribe((data) => {
  //       console.log(data);
  //     });
  // }

  //DEPENDENCY INJECTION YAPIDAKI YONTEM
  constructor(private httpClient: HttpClient) {
    // this.httpClient
    //   .get('https://jsonplaceholder.typicode.com/todos/1')
    //   .subscribe((data) => {
    //     console.log(data);
    //   });
    const paramsDeneme = new HttpParams().set('id', '1').set('sort', 'desc');

    const params2 = new HttpParams().set('id', '1').append('id', '2').set('sort', 'desc');   
    
    this.httpClient
      .get('https://jsonplaceholder.typicode.com/todos/1', {params:params2})
      .subscribe({
        next: data =>  console.log(data),
        error: error => console.log(error)      
      });

      //httpParams has: methodu ile parametre var mı yok mu kontrol edilir.
      //httpParams get: methodu ile parametrenin ilk degeri alınır.
      //httpParams getAll: methodu ile parametrelerin hepsi alınır.
      //httpParams keys: methodu ile parametrelerin keyleri alınır.
      //HTTPPARAMS APPEND: methodu ile parametre eklenir.
      //httpParams delete: methodu ile parametre silinir.
      //httpParams ({fromString: 'id=1&sort=desc'}) ile parametreler olusturulabilir.
      //httpParams ({fromObject: {id: '1', sort: 'desc'}}) ile parametreler olusturulabilir.

      const headers = new HttpHeaders().set('name', 'fatih').set('surname', 'kayhan');
  }
}

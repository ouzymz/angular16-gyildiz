import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  item: any;
  constructor(private httpClient: HttpClient) {
    httpClient.get('https://jsonplaceholder.typicode.com/todos/1').subscribe({
      next: (data) => {
        this.item = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}

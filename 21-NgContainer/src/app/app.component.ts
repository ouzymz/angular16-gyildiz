import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [NgIf,NgFor],
})
export class AppComponent {
  products: any[] = [
    { productName: 'Laptop', id: 1 , avaible: true},
    { productName: 'Keyboard', id: 1 , avaible: true},
    { productName: 'Desktop', id: 1 , avaible: false},
    { productName: 'Mouse', id: 1 , avaible: true},
    { productName: 'MousePad', id: 1 , avaible: true},
    { productName: 'Monitor', id: 1 , avaible: true},
  ];
}

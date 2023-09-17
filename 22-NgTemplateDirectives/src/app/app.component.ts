import { NgFor, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [NgTemplateOutlet,NgFor,ChildComponent],
})
export class AppComponent {
  persons: any[] = [
    { name: 'John', age: 30 },
    { name: 'Mary', age: 25 },
    { name: 'Rain', age: 25 },
    { name: 'Rose', age: 25 },
  ];
}

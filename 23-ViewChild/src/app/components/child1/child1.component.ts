import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss'],
  providers: [{provide:'Example Provider',useValue:'Example Provider Value'}],
})
export class Child1Component {
  customFunction() {
    console.log('custom function');
  }
}

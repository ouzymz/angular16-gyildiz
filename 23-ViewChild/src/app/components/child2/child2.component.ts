import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss'],
  providers: [{provide:'Example Provider',useValue:'Example Provider Value2'}],

})
export class Child2Component {

}

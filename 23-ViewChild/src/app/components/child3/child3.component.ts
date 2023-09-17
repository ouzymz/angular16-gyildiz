import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.scss'],
  providers: [{provide:'Example Provider',useValue:'Example Provider Value3'}],

})
export class Child3Component {

}

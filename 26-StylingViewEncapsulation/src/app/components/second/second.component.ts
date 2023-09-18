import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './second.component.html',
  // styleUrls: ['./second.component.scss'] //ViewEncapsulation.None ozelligini kullanmak icin comment line haline getirildi.
})
export class SecondComponent {
  color: string = 'blue';


  ngOnInit() {
  }
}

import { Component } from '@angular/core';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [FirstComponent,SecondComponent],
})
export class AppComponent {
  title = '26-StylingViewEncapsulation';
}

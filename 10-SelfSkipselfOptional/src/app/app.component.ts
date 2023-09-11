import { Component } from '@angular/core';
import { RandomService } from './randomservice';
import { RandomServiceString } from './randomServiceString';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  viewProviders: [{ provide: RandomServiceString}],
  providers: [{ provide: RandomService}]
})
export class AppComponent {
  constructor(public randomService: RandomService) {}
}

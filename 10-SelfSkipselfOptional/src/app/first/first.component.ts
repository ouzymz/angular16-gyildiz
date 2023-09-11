import { Component } from '@angular/core';
import { RandomService } from '../randomservice';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent {
constructor(public randomService:RandomService) { }
}

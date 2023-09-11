import { Component, Self } from '@angular/core';
import { RandomService } from '../randomservice';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss'],
  providers: [{ provide: RandomService}] // @Self() decoratoru kullanilirsa componentin kendi provider'inda ilgili service cagirilir. SecondCompenentin child componentleride service parentlarindaki instancetan kullanirlar. 
})
export class SecondComponent {
  constructor(@Self() public randomService:RandomService) { }

}

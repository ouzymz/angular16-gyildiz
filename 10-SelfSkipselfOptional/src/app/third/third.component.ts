import { Component, Optional, SkipSelf } from '@angular/core';
import { RandomService } from '../randomservice';
import { skip } from 'rxjs';
import { RandomServiceString } from '../randomServiceString';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.scss'],
  // providers: [{ provide: RandomService}] // @Optianal() decoratoru kullanildigi icin provider tanimjli olmasa bile hata vermez.
})
export class ThirdComponent {

  //skipself decoratoru kullanildigi kendi providerinda saglanan intance yerine parent providerinda saglanan instance kullanilir.
constructor(@Optional() @SkipSelf() public randomService:RandomService, public randomStringService:RandomServiceString) { }
}

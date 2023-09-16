import { Component } from '@angular/core';
import { Standalonev2Component } from '../standalonev2/standalonev2.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-standalone',
  templateUrl: './standalone.component.html',
  styleUrls: ['./standalone.component.scss'],
  standalone:true,
  imports: [Standalonev2Component,FormsModule]
})
export class StandaloneComponent {
  data:any;

}

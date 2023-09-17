import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterModule, NgSwitchDefault, NgSwitchCase, NgSwitch],
})
export class AppComponent {
  title = '19-boostrapApplication-RouterInput';
  constructor(@Inject('url') private url: string) {}
}

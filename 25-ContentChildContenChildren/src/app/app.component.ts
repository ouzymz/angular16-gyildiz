import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ChildComponent } from './components/child/child.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [ChildComponent]
})
export class AppComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    console.log(this.divElement);
  }
  @ViewChild('divElement', { static: false }) divElement: ChildComponent;
  title = '25-ContentChildContenChildren';
}

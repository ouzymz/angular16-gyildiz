import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private renderer: Renderer2) {}//contructorda renderer2 inject edildi. 
  
  @ViewChild('divElement', { static: true }) divElement: ElementRef;
  
  ngOnInit(): void {
    this.renderer.setStyle(this.divElement.nativeElement, 'color', 'red');//renderer2 ile DIV elementinin rengi kırmızı yapılar HTML DOM uzerinde manipulasyon yapilmis oldu.
  }

}

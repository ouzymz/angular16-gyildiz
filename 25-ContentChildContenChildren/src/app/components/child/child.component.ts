import { Component, ContentChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent {

  //@contentChild ile ng-content'e parent'tan verilen DOM elementler ChildComponent icinde ulasilabilir oldu. 
  @ContentChild('divElement') divElement: ElementRef;
  ngAfterContentInit() {
    console.log(this.divElement);
  }
}

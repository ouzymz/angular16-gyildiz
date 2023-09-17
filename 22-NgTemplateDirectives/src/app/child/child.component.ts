import { Component, Input, TemplateRef } from '@angular/core';
import { CommonModule, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule,NgTemplateOutlet],
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @Input() childContainer : TemplateRef<HTMLElement>;

}

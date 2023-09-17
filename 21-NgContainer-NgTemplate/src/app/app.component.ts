import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { AfterViewInit, Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [NgIf,NgFor, NgTemplateOutlet],
})
export class AppComponent implements AfterViewInit{
  @ViewChild('ngTemplateIcerikViewChild',{read:TemplateRef}) //templateref ng-template'i component class'i uzerinde temsil etmemizi saglayan bir siniftir.
  
  templateRef: any;
  constructor(private viewContainerRef:ViewContainerRef){}//viewcontainerref ng-template'in nerede olusturulacagini belirtmemizi saglar.

  //interfacesiz de tanimlanabilir ama interface ile daha saglikli kullanim olacaktir.
  ngAfterViewInit(): void {
    this.viewContainerRef.createEmbeddedView(this.templateRef);
  }

  products: any[] = [
    { productName: 'Laptop', id: 1 , avaible: true},
    { productName: 'Keyboard', id: 1 , avaible: true},
    { productName: 'Desktop', id: 1 , avaible: false},
    { productName: 'Mouse', id: 1 , avaible: true},
    { productName: 'MousePad', id: 1 , avaible: true},
    { productName: 'Monitor', id: 1 , avaible: true},
  ];
}

import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Child1Component } from './components/child1/child1.component';
import { ExampleDirectiveDirective } from './directives/example-directive.directive';
import { Child2Component } from './components/child2/child2.component';
import { Child3Component } from './components/child3/child3.component';
import { NgIf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    Child1Component,
    ExampleDirectiveDirective,
    Child2Component,
    Child3Component,NgIf
  ],
})
export class AppComponent implements AfterViewInit, OnInit {
  @ViewChild('h1Element', { static: false, read: ElementRef })
  h1Element: ElementRef; //h1Element'i ElementRef tipinde tanimladik.
  @ViewChild('h1Element', { static: false, read: ExampleDirectiveDirective })
  h1Element2: ExampleDirectiveDirective; //h1Element'i ExampleDirectiveDirective tipinde tanimladik. Read Parametresinin gorevlerinde biri.
  @ViewChild(Child1Component, { static: true, read: 'Example Provider' })
  child1ExampleProvider; //h1Element'i Example Provider tipinde tanimladik bu sayede child componentinde provide edilen bir degeri yakalamis olduk. Read Parametresinin gorevlerinde biri.
  @ViewChild(Child1Component, { static: true })
  child1Component: Child1Component;

  @ViewChildren('divElements') divElements: ElementRef[]; //divElements'i ElementRef tipinde tanimladik. ViewChildren ile birden fazla elementi yakalayabiliyoruz.

  @ViewChildren('childElement', { read: 'Example Provider' })
  divElements2: QueryList<string>; //ViewChildrenda read elementi kullanimi.

  visible :boolean = true;

  showHide() {this.visible = !this.visible;}

  @ViewChildren('parag') list: QueryList<ElementRef>;//ElementRef'in changes propertysine subscribe olarak takip edebilmek icin kuruldu. 


  ngOnInit(): void {
    console.log(this.h1Element); //static false oldugu icin undefined doner.
    console.log(this.child1Component); //static true oldugu icin child1Component'i doner.
  }
  ngAfterViewInit() {
    // child1Component'te tanimlanan bir function'i viewchild sayesinde istedigim componentte cagirip kullanabiliyorum.
    this.child1Component.customFunction();
    console.log(this.h1Element);
    console.log(this.child1Component);
    console.log(this.child1ExampleProvider);
    console.log(this.divElements); //QUERYLIST DONER
    console.log(this.divElements2); //QUERYLIST DONER - providerda donen degerlari array olarak yakalamamizi saglar.
    
    this.list.changes.subscribe({next: data => console.log(data)});//ElementRef'in changes propertysine subscribe olarak takip edebilmek icin kuruldu.
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  ngOnInit(): void {

  }
  object: any;
  childEvent(message: string) {
    console.log(message);
    this.object = message;   
  }
}

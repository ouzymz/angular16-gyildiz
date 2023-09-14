import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string;



  //HTML 5 style routing
  go() {
    // history.pushState({message:"merhaba"},'title',"#/a/b/contact");
    window.history.pushState({ message: 'merhaba' }, 'title', '/a/b/contact');
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '12-Routing-I';


  //HTML 5 style routing
  go(){
    // history.pushState({message:"merhaba"},'title',"#/a/b/contact");
    window.history.pushState({message:"merhaba"},'title',"/a/b/contact");
  }
}

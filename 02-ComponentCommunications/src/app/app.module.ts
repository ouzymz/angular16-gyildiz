import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent_to_child/parent/parent.component';
import { ChildComponent } from './components/parent_to_child/child/child.component';
import { ParentComponent as ParentComponent2} from './components/child_to_parent/parent/parent.component';
import { ChildComponent as ChildComponent2 } from './components/child_to_parent/child/child.component';
import { FirstChildComponent } from './components/child_to_child/first-child/first-child.component';
import { SecondChildComponent } from './components/child_to_child/second-child/second-child.component';
import { CToCParentComponent } from './components/child_to_child/c-to-c-parent/c-to-c-parent.component';



@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    //ayni isimde iki component olamayacagi icin as ile isim degistiriyoruz
    ParentComponent2,
    ChildComponent2,
    FirstChildComponent,
    SecondChildComponent,
    CToCParentComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

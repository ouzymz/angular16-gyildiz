import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { ReadUserComponent } from './components/read-user/read-user.component';
import { UserService } from './services/user.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    ReadUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // bunu eklemeden kullaninca form submit edince degeri aliyor ancak sayfayi yeniliyor ve form sifirlaniyor. nedenini arastir.
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ComComponent } from './com/com.component';
import { FormsModule } from '@angular/forms';
import { ExampleDirective } from './directives/example.directive';
import { CustomIfDirective } from './directives/custom-if.directive';
import { CustomForDirective } from './directives/custom-for.directive';
import { CustomPipePipe } from './pipes/custom-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent, //olusturulan componentin kullanilabilmesi icin declaration kısmında belirtilmesi gerekir. 
    ComComponent, ExampleDirective, CustomIfDirective, CustomForDirective, CustomPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent] //burada tanimlanan component uygulamanin ana component oldugunu belirtir.

})
export class AppModule { }

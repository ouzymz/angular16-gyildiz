import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomModule } from './custom/custom.module';
import { CustomPreloadingStrategy } from './strategies/custom.preloadingstrategy';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CustomModule],
  providers: [CustomPreloadingStrategy],
  bootstrap: [AppComponent],
})
export class AppModule {}

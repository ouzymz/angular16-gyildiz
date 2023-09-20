import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { APP_INITIALIZER, importProvidersFrom } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppConfigService } from './assets/config/appConfigService';

//APPCONFIGSERVICE YAPISI OLMADAN SALT MIMARI ILE OLUSTURULAN APP_INITIALIZER
bootstrapApplication(AppComponent, {

  providers: [
    importProvidersFrom(HttpClientModule),
    {
      provide: APP_INITIALIZER,
      useFactory: (httpClient:HttpClient) => {
        // console.log('oncelikle yapilandirmalar gerceklestirildi');
        // return null;
        httpClient.get('assets/config/appConfig.json').subscribe((config) => {console.log(config)});

      },deps:[HttpClient],
    },
  ],
});

//APPCONFIGSERVICE YAPISI ILE OLUSTURULAN APP_INITIALIZER

// bootstrapApplication(AppComponent, {
//   providers: [
//     importProvidersFrom(HttpClientModule),
//     {
//       provide: APP_INITIALIZER,
//       useFactory: (appConfigService: AppConfigService) => {
//         return appConfigService.loadConfigurations();
//       },
//       deps: [AppConfigService]
//     },
//   ],
// });

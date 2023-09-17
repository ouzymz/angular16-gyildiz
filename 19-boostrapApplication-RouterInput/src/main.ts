import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';
import {
  PreloadAllModules,
  provideRouter,
  withComponentInputBinding,
  withPreloading,
} from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { importProvidersFrom, inject } from '@angular/core';

// import { AppModule } from './app/app.module';

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

bootstrapApplication(AppComponent, {
  providers: [
    { provide: 'url', useValue: 'value' },
    //gerekli moduleler burada import edilir.
    importProvidersFrom([HttpClientModule]),
    //RouterModule kullanimi yerine routelar provider icinde verilir.
    //withPreloading ile uygulamaya preloading strategy eklenebilir.
    provideRouter(
      [
        {
          path: '',
          loadComponent: () =>
            import('./app/components/home/home.component').then(
              (m) => m.HomeComponent
            ),
        },
        {
          path: 'about',
          loadComponent: () =>
            import('./app/components/about/about.component').then(
              (m) => m.AboutComponent
            ),
        },
        {
          path: 'product',
          loadComponent: () =>
            import('./app/components/product/product.component').then(
              (m) => m.ProductComponent
            ),
          data: { productName: 'terlik' },resolve: { products: (route , state)=>{const httpClient:HttpClient = inject(HttpClient)
          return httpClient.get("https://jsonplaceholder.typicode.com/posts")} }
        },
      ],
      withPreloading(PreloadAllModules),withComponentInputBinding()
    ), //custompreloading yapilabilir.,
    
  ],
});

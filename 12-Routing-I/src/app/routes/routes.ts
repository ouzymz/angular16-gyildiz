import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';

//angular yapilanmasinda default route en basa tanimlanmalidir, cunku angular route lari ustten asagiya okuyor ve ilk buldugunu calistiriyor.
export const routes: Routes = [
  { path: "", redirectTo: '/about', pathMatch: 'full' }, //varsayilan rota 
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
];

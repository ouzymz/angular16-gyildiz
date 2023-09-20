import { Component } from '@angular/core';
import { AppConfigService } from 'src/assets/config/appConfigService';
import { environment } from 'src/environments/environment';
import { ChildComponent } from './components/child/child.component';


@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [ChildComponent],
})
export class AppComponent {
  constructor() {
    console.log(AppConfigService.settings);
    //varsayilan olarak uygulama developer modda calisiyor bunu production ortaminda calistirmak icin ng serve --configuration=production komutunu kullanmamiz gerekiyor
    console.log(environment.production); 
    console.log(environment.apiEndpoint);

    
  }
}

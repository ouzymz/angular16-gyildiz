import { Injectable } from '@angular/core';
import { IAppConfig } from './IAppConfig';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AppConfigService {
    
  static settings: IAppConfig;
  constructor(private httpClient: HttpClient) {}

  loadConfigurations() {
    const configFile = `assets/config/appConfig.json`;

    return new Promise<void>((resolve, reject) => {
      this.httpClient
        .get(configFile)
        .subscribe({
            next: configs => {
                AppConfigService.settings = configs as IAppConfig;
                console.log(AppConfigService.settings);               
                resolve();
            }
        })
        });
    }
  }


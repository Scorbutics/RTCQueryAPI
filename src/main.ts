import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import { RTCQueryAPIModule } from './rtcqueryapi/rtcqueryapi.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(RTCQueryAPIModule)
  .catch(err => console.error(err));

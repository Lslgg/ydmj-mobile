import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createUploadLink } from 'apollo-upload-client';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = "WelcomePage";

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    apollo: Apollo, httpLink: HttpLink) {

    platform.ready().then(() => splashScreen.hide());

    const grqphqlUrl = "http://192.168.1.102:8080";

    apollo.create({
      link: createUploadLink({ uri: `${grqphqlUrl}/graphql`, credentials: "include" }),
      cache: new InMemoryCache()
    });

  }
}

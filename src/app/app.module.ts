import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpClientModule } from '@angular/common/http';
import { ApolloModule } from 'apollo-angular';
import { HttpLinkModule } from 'apollo-angular-link-http';
import { Utility } from '../common/utility';
import { HomePageModule } from '../pages/home/home.module';
import { GoodsModule } from '../pages/goods/goods.module';
import { ClassifyPageModule } from '../pages/classify/classify.module';
import { BusinessModule } from '../pages/business/business.module';
import { ListPageModule } from '../pages/list/list.module';
import { NavPageModule } from '../pages/nav/nav.module';
import { HomeButtonModule } from '../components/home-buttom/homeButton.module';
import { DetailPageModule } from '../pages/nav/page/detail.module';



@NgModule({
  declarations: [
    MyApp,
    TabsPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    IonicModule.forRoot(MyApp),
    HomePageModule,
    GoodsModule,
    ClassifyPageModule,
    BusinessModule,
    ListPageModule,
    NavPageModule,
    HomeButtonModule,
    DetailPageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    { provide: 'utility', useClass: Utility },
  ]
})
export class AppModule { }

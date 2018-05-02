import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { Postlist } from '../pages/postlist/postlist';
import { Categorylist } from '../pages/categorylist/categorylist';
import { UserInfo } from '../pages/user-info/user-info';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataProvider } from '../providers/data/data';
import { HttpClientModule } from '@angular/common/http';
import { SportsPage } from '../pages/sports/sports';
import { SportsProvider } from '../providers/sports/sports';
import {IonicStorageModule} from '@ionic/storage';
import { ScienceProvider } from '../providers/science/science';
import { SciencePage } from '../pages/science/science';
import { TechnologyProvider } from '../providers/technology/technology';
import { BusinessProvider } from '../providers/business/business';
import { TechnologyPage } from '../pages/technology/technology';
import { BusinessPage } from '../pages/business/business';
import { Geolocation } from '@ionic-native/geolocation';
import { GeolocationProvider } from '../providers/geolocation/geolocation';
@NgModule({
  declarations: [
    MyApp,
    Postlist,
    Categorylist,
    UserInfo,
    TabsPage,
    SportsPage,
    TechnologyPage,
    BusinessPage,
    SciencePage,
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Postlist,
    Categorylist,
    UserInfo,
    TabsPage,
    SportsPage,
    SciencePage,
    TechnologyPage,
    BusinessPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider,
    SportsProvider,
    ScienceProvider,
    TechnologyProvider,
    BusinessProvider,
    GeolocationProvider,
    Geolocation
  ]
})
export class AppModule {}
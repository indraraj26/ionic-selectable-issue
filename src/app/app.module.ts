import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicSelectableModule } from 'ionic-selectable';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EditPage } from '../pages/edit/edit';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EditPage
  ],
  imports: [
    BrowserModule,
    IonicSelectableModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EditPage
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

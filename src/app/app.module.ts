import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ReCaptchaModule} from './re-captcha/re-captcha.module';
import { AppComponent } from './app.component';


@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    ReCaptchaModule.forRoot()
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

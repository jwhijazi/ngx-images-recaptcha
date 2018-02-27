import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReCaptchaComponent } from './re-captcha.component';
import {ReCaptchaService} from './re-captcha.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ReCaptchaComponent
  ],
  exports:[
    ReCaptchaComponent
  ]
})
export class ReCaptchaModule { 
  static forRoot(){
    return {
      ngModule: ReCaptchaModule,
      providers:[ReCaptchaService]
    }
  }
}

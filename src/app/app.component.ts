import { Component } from '@angular/core';
import {ReCaptchaService} from './re-captcha/re-captcha.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  showError: boolean = false;

  constructor(private srv: ReCaptchaService){}

  submitForm() {
    this.validateCaptcha();
  }

  validateCaptcha() {
   var sub = this.srv.getValidationResult().subscribe((result)=>{
     this.showError = !result;
      if (result)
      alert("Valid Form");
    else
      alert("Captcha has error.");
    });
    sub.unsubscribe();//so that same method is not called when selection is changed. 
  }
}

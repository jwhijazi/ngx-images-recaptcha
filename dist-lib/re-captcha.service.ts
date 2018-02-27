import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';;
import { catchError } from 'rxjs/operators/catchError';
import { map } from 'rxjs/operators/map';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {ReCaptchaModel} from './re-captcha.model';

@Injectable()
export class ReCaptchaService {
  private __validationResult: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private __showError: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private httpClient: HttpClient) { }

  GetIconsList(): Observable<ReCaptchaModel[]>{
    let url = 'assets/images.json';
    return this.httpClient.get(url).pipe(
      map(this.handleSuccess),
      catchError(this.handleError)
    );
  }

  getValidationResult() {
    return this.__validationResult.asObservable();
  }

  setValidationResult(value: boolean) {
    this.__validationResult.next(value);
  }

  getShowError(){
    return this.__showError.asObservable();
  }

  private setShowError(value: boolean){
    this.__showError.next(value);
  }

  private handleSuccess(res:any){
    return res;
  }
  private handleError(error: any){
    console.error("Missing images.json file");
    return new ErrorObservable('Something bad happened; please try again later.');
    }
}

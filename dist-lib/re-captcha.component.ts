import { Component, OnInit, EventEmitter, Output, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ReCaptchaService } from './re-captcha.service';
import { ReCaptchaModel } from './re-captcha.model';

@Component({
  selector: 're-captcha',
  templateUrl: './re-captcha.component.html',
  styleUrls: ['./re-captcha.component.css']
})
export class ReCaptchaComponent implements OnInit, OnChanges {
  @Input() showError: boolean;

  imagesList: ReCaptchaModel[] = [];
  candicateImage: ReCaptchaModel = null;
  selectedImage: ReCaptchaModel = null;
  error: boolean = false;

  constructor(private recaptchaSRV: ReCaptchaService) { }

  ngOnInit() {
    this.genRandomImages();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['showError']) {
      this.error = this.showError;
      if(this.error)//Reset the images List
        this.genRandomImages();
    }
  }

  refresh() {
    this.genRandomImages();
  }

  selectImageEvent(image: ReCaptchaModel) {
    this.selectedImage = image;
    this.imagesList.forEach((img) => {
      img.selected = false;
    });
    this.imagesList.find(i => i.id == image.id).selected = true;
    let validationResult = this.selectedImage == this.candicateImage;
    this.recaptchaSRV.setValidationResult(validationResult);
  }



  private genRandomImages() {
    this.imagesList = [];
    this.candicateImage = null;
    this.selectedImage = null;
    this.recaptchaSRV.GetIconsList().subscribe((icons) => {
      let usedIndexes: number[] = [];
      for (let i = 0; i <= 4; i++) {
        let randIndex = Math.floor(Math.random() * 10); //0-9
        if (!usedIndexes.includes(randIndex)) {
          this.imagesList.push(icons[randIndex]);
          usedIndexes.push(randIndex);
        }
        else
          i--;
      }
      let rand = Math.random();
      let candidateIndex = Math.floor(rand * 5); //0-4
      //console.log(rand);
      console.log(candidateIndex);
      this.candicateImage = this.imagesList[candidateIndex];
    });
  }
}

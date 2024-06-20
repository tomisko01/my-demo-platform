import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-i18n',
  templateUrl: './i18n.component.html',
  styleUrl: './i18n.component.css'
})
export class I18nComponent {

  currentLanguage: string = 'en';

  constructor(private translateService: TranslateService) {


  }

  changeLanguage() {
    this.currentLanguage = this.currentLanguage === 'en' ? 'doge' : 'en';
    this.translateService.use(this.currentLanguage);
  }
}

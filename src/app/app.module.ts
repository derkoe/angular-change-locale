import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import localeDeAt from '@angular/common/locales/de-AT';
import { Injectable, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule } from '@clr/angular';

import { AppComponent } from './app.component';

registerLocaleData(localeDeAt, 'de-AT');
registerLocaleData(localeDe, 'de');

@Injectable({ providedIn: 'root' })
export class DynamicLocaleId extends String {
  currentLang = 'en';

  constructor() {
    super();
  }

  override toString() {
    return this.currentLang;
  }
  override toLowerCase(): string {
    return this.currentLang.toLowerCase();
  }
  override toUpperCase(): string {
    return this.currentLang.toUpperCase();
  }
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, ClarityModule],
  providers: [{ provide: LOCALE_ID, useExisting: DynamicLocaleId }],
  bootstrap: [AppComponent],
})
export class AppModule {}

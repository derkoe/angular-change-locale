import { Component } from '@angular/core';
import { DynamicLocaleId } from './app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  date: Date | null = null;
  formShown = true;
  constructor(public dynamicLocaleId: DynamicLocaleId) {
  }
}

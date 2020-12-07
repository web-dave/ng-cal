import { Component, OnInit } from '@angular/core';
import { config } from 'wc/config';
import { WebDaveWebComponent } from 'wc/web.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'wdwc';
  config = JSON.stringify(config);
  constructor() {
    customElements.define('web-dave-web-component', WebDaveWebComponent);
  }
  ngOnInit() {
    document
      .querySelector('web-dave-web-component')
      ?.setAttribute('config', this.config);
  }
}

import { Component } from '@angular/core';

import { ApiService } from './shared';

import '../style/app.scss';
import '../style/font.scss';

@Component({
  selector: 'my-app', // <my-app></my-app>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  url = 'https://github.com/preboot/angular2-webpack';
  title: string;

  constructor(private api: ApiService) {
    this.title = this.api.title;

  }
  public options = {
        position: ["bottom", "right"],
        timeOut: 0,
        lastOnBottom: true,
    };
}

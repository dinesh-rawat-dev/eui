import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  pageHeader = 'Hello Angular';
  name: string = "Dinesh";
  imagePath: string = "/1200px-Google_2015_logo.svg.png";
  isDisabled: boolean;
}

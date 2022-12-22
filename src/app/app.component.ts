import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // テンプレートに流し込む値をここで設定
  title = 'Hello Angular!';
  isAngular = true;
}

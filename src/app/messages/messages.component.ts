import { Component } from '@angular/core';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  // HTMLテンプレートから変数、メソッドを参照するにはアクセス修飾子をpublicにする
  constructor(public messagesService :MessagesService){}  
}

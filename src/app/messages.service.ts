import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  messages: string[] = [];
  // テンプレート内で直接使う
  test = "test"

  add(message: string) {
    this.messages.push (message)
  }
  clear() {
    this.messages = [];
  }
  constructor() { }
}

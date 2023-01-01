import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Member } from './member';
import { MEMBERS } from './mock-members';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root' // どこで使用するかを指定する　rootはアプリケーション全体で使用可能にする
})
export class MemberService {

  constructor(private messagesService :MessagesService) { }

  // RxJSオブジェクトを返す
  getMembers(): Observable<Member[]>{
    this.messagesService.add('MemberService: 社員一覧データを取得しました。');
    // of関数は引数の値をObservable型に変換する
    return of(MEMBERS)
  }
}

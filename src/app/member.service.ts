import { Injectable } from '@angular/core';
import { Member } from './member';
import { MEMBERS } from './mock-members';

@Injectable({
  providedIn: 'root' // どこで使用するかを指定する　rootはアプリケーション全体で使用可能にする
})
export class MemberService {

  constructor() { }

  getMembers(): Member[]{
    return MEMBERS
  }
}

import { Component } from '@angular/core';
import { Member } from '../member';
import { MemberService } from '../member.service'; // classの型を取得
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent {
  // service（外部）からデータを取得する
  members: Member[];

  selectedMember: Member;

  // DI
  constructor(
    private memberService :MemberService,
    private messagesService :MessagesService
  ){}

  ngOnInit(): void {
    console.log("ライフサイクル")
    // コンポーネントの初期化時に実行
    this.getMembers();
  }

  onSelected = (member: Member): void => {
    this.messagesService.add(`MessageComponent: 社員データ(id=${member.id})が選択されました。`);
    this.selectedMember = member
  }

  getMembers(): void {
    this.memberService.getMembers().subscribe(members => this.members = members);
  }

  // ライフサイクルメソッドが入ってくる
}

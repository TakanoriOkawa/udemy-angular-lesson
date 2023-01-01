import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { MembersComponent } from './members/members.component';

const routes: Routes = [
  // pathとコンポーネントの設定
  {path: 'members', component: MembersComponent}
]

@NgModule({
  imports: [
    // ルーティングをアプリ全体で使用する設定
    RouterModule.forRoot(routes)
  ],
  exports: [ // app.module.tsで使用するためにexport
    RouterModule
  ]
})
export class AppRoutingModule { }

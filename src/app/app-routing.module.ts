import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { MembersComponent } from './members/members.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  // pathとコンポーネントの設定
  {path: 'members', component: MembersComponent},
  {path: '**', component: NotFoundComponent}
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

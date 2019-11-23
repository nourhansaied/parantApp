import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { SingleUserModule } from './components/single-user/single-user.module';
import { RouterModule } from '../../../../node_modules/@angular/router';
import { UserCardModule } from './components/user-card/user-card.module';
import { AddUserModule } from './components/add-user/add-user.module';



@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    UserCardModule,
    SingleUserModule,
    RouterModule.forChild([{
      path: '',
      component: UsersComponent
    }]),
  ]
})
export class UsersModule { }

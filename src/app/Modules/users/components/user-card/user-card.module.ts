import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from './user-card.component';
import { AddUserModule } from '../add-user/add-user.module';



@NgModule({
  declarations: [UserCardComponent],
  imports: [
    CommonModule,
    AddUserModule
  ],
  exports: [UserCardComponent]
})
export class UserCardModule { }

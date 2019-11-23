import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleUserComponent } from './single-user/single-user.component';
import { AddUserModule } from '../add-user/add-user.module';



@NgModule({
  declarations: [SingleUserComponent],
  imports: [
    CommonModule,
    AddUserModule
  ],
  exports: [SingleUserComponent]
})
export class SingleUserModule { }

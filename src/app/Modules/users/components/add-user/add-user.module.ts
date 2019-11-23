import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AddUserComponent } from './add-user.component';
import { FormsModule } from '../../../../../../node_modules/@angular/forms';


@NgModule({
  declarations: [AddUserComponent],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule
  ],
  exports: [AddUserComponent]
})
export class AddUserModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '../../../../../node_modules/@angular/router';
import { FormsModule } from '@angular/forms';
import { QueryService } from '../../../shared/services/query.service';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: LoginComponent
    }]),
    FormsModule
  ],
  exports: [LoginComponent],
  providers: [QueryService]
})
export class LoginModule { }

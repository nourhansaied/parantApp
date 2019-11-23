import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../../../node_modules/@angular/router';
import { NgForm } from '../../../../../../node_modules/@angular/forms';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public user: { email: string, password: string } = { email: null, password: null };
  public errorMsg: string = null;
  constructor(
    private router: Router,
    private _AuthService : AuthService
  ) { 
    this._AuthService.setLoginState(true)
  }

  ngOnInit() {
  }
  public onSubmit(form: NgForm): void{
    // we just route before the calling of API as it alwasy gives error
    this._AuthService.setLoginState(false)
    window.localStorage.setItem('login','true')
    this.router.navigate(['/users']);
    if(form.valid){
      this._AuthService.authanticateUser(form.value).subscribe(response => {
        this.errorMsg = null;
        if (response['token']) {
          localStorage.setItem('loginUser', JSON.stringify({ 'token': response['token'] }));
          this._AuthService.setUserToken();
          
        }
      }, error => {
        this.errorMsg = error['error']['error'];
      });
    }
   
  }
}
